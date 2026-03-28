const fs = require('fs');
const eventPath = './src/data/eventDetails.js';
const teamPath = './src/pages/TeamPage.jsx';

// Hacky require wrapper because eventDetails has ES6 export
const code = fs.readFileSync(eventPath, 'utf8');
const transformedCode = code.replace('export const eventDetailsData', 'const eventDetailsData = module.exports.eventDetailsData');
const m = new module.constructor();
m.paths = module.paths;
m._compile(transformedCode, eventPath);
const eventDetailsData = m.exports.eventDetailsData;

const teamContent = fs.readFileSync(teamPath, 'utf8');
const volMatch = teamContent.match(/const volunteers = \[([\s\S]*?)\];/);
const teamVols = volMatch[1].split(',').map(s=>s.replace(/['"\n]/g,'').trim()).filter(x=>x);

let missingInTeam = [];
let eventVolsSet = new Set();

for(const k in eventDetailsData){
  eventDetailsData[k].volunteers.forEach(v => {
    eventVolsSet.add(v);
    if(!teamVols.includes(v)) {
      missingInTeam.push({event: k, vol: v});
    }
  });
}

console.log("Volunteers in EventDetails but missing from TeamPage array:");
console.log(missingInTeam);
