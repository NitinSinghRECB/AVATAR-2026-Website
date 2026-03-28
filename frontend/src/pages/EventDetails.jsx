import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegistrationModal from '../components/RegistrationModal';
import { eventDetailsData } from '../data/eventDetails';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetailsData[id];
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div style={{ background: '#060608', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="font-squid" style={{ color: 'var(--pink)', fontSize: '40px' }}>EVENT ELIMINATED</h1>
        <p className="font-orbitron" style={{ color: 'var(--cream)', marginTop: '20px' }}>We couldn't find the data for this event.</p>
        <Link to="/" className="btn-primary font-squid" style={{ marginTop: '30px' }}>RETURN TO LOBBY</Link>
      </div>
    );
  }

  const bgColor = event.color === 'pink' ? 'rgba(255,0,102,0.05)' : 'rgba(0,201,177,0.05)';
  const borderColor = event.color === 'pink' ? 'rgba(255,0,102,0.3)' : 'rgba(0,201,177,0.3)';
  const mainColor = event.color === 'pink' ? 'var(--pink)' : 'var(--teal)';

  return (
    <div style={{ background: '#060608', minHeight: '100vh' }}>
      {/* We skip the modal toggle in the generic Navbar here because we embed it directly in the page below */}
      <Navbar onRegisterClick={() => setIsModalOpen(true)} />
      
      <div style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '1000px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        
        {/* Back Button */}
        <Link to="/#events" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--white)', textDecoration: 'none', opacity: 0.7, marginBottom: '30px', transition: '0.3s' }} className="font-orbitron hover-glow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}><polyline points="15 18 9 12 15 6"></polyline></svg>
          BACK TO GAMES
        </Link>
        
        {/* Header Block */}
        <div style={{ background: bgColor, border: `1px solid ${borderColor}`, padding: '40px', borderRadius: '8px', position: 'relative', overflow: 'hidden', marginBottom: '40px' }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="font-orbitron" style={{ color: mainColor, letterSpacing: '2px', fontSize: '14px', marginBottom: '10px' }}>{event.type.toUpperCase()}</div>
            <h1 className="font-squid" style={{ fontSize: 'clamp(40px, 6vw, 64px)', color: 'var(--white)', lineHeight: 1.1, marginBottom: '20px', textShadow: `0 0 20px ${borderColor}` }}>
              {event.title}
            </h1>
            <p className="font-orbitron" style={{ color: 'var(--cream)', fontSize: '16px', fontStyle: 'italic', letterSpacing: '1px', opacity: 0.8, borderLeft: `3px solid ${mainColor}`, paddingLeft: '15px' }}>
              "{event.themeRule}"
            </p>
          </div>
          
          {/* Metadata Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginTop: '40px', borderTop: `1px dashed ${borderColor}`, paddingTop: '20px', position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={mainColor} strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              <span className="font-orbitron" style={{ color: 'var(--white)', fontSize: '14px' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={mainColor} strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span className="font-orbitron" style={{ color: 'var(--white)', fontSize: '14px' }}>{event.teamSize}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={mainColor} strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span className="font-orbitron" style={{ color: 'var(--white)', fontSize: '14px' }}>{event.date} | {event.time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={mainColor} strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span className="font-orbitron" style={{ color: 'var(--white)', fontSize: '14px' }}>{event.venue}</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'revert', gap: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Rules Column */}
          <div>
            <h2 className="font-squid" style={{ color: mainColor, fontSize: '24px', marginBottom: '20px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '10px' }}>RULES & REGULATIONS</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {event.rules.map((r, i) => (
                <li key={i} className="font-orbitron" style={{ color: 'var(--cream)', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px', display: 'flex' }}>
                  <span style={{ color: mainColor, marginRight: '10px' }}>▸</span> {r}
                </li>
              ))}
            </ul>

            <h2 className="font-squid" style={{ color: mainColor, fontSize: '24px', marginBottom: '20px', marginTop: '40px', borderBottom: `1px solid ${borderColor}`, paddingBottom: '10px' }}>JUDGING CRITERIA</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {event.judgingCriteria.map((c, i) => (
                <li key={i} className="font-orbitron" style={{ color: 'var(--cream)', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px', display: 'flex' }}>
                  <span style={{ color: mainColor, marginRight: '10px' }}>▸</span> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Teams Column & Registration */}
          <div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h2 className="font-squid" style={{ color: 'var(--white)', fontSize: '20px', marginBottom: '20px' }}>THE AUTHORITIES</h2>
              
              <div style={{ marginBottom: '25px' }}>
                <h3 className="font-orbitron" style={{ color: mainColor, fontSize: '12px', letterSpacing: '1px', marginBottom: '10px' }}>COORDINATORS</h3>
                {event.coordinators.map((c, i) => (
                  <div key={i} className="font-squid" style={{ color: 'var(--cream)', fontSize: '14px', marginBottom: '8px' }}>{c}</div>
                ))}
              </div>

              <div>
                <h3 className="font-orbitron" style={{ color: mainColor, fontSize: '12px', letterSpacing: '1px', marginBottom: '10px' }}>VOLUNTEERS & GUARDS</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {event.volunteers.map((v, i) => (
                    <span key={i} className="font-orbitron" style={{ background: 'rgba(255,255,255,0.05)', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', color: 'var(--cream)' }}>
                      {v}
                    </span>
                  ))}
                  {event.volunteers.length === 0 && <span className="font-orbitron" style={{ opacity: 0.5, fontSize: '12px' }}>TBA</span>}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '30px' }}>
              <button 
                className="btn-primary font-squid" 
                style={{ width: '100%', fontSize: '18px', padding: '20px' }}
                onClick={() => setIsModalOpen(true)}
              >
                JOIN THE GAME <span style={{ marginLeft: '10px' }}>▸</span>
              </button>
              <p className="font-orbitron" style={{ textAlign: 'center', marginTop: '15px', color: 'var(--cream)', fontSize: '11px', opacity: 0.5, letterSpacing: '1px' }}>
                WARNING: ONCE YOU AGREE, THERE IS NO GOING BACK
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />

      {/* Embedded Registration Modal just for this page */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        preSelectedEvent={event.registerId}
      />
    </div>
  );
};

export default EventDetails;
