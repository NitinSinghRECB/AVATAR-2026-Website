import PyPDF2

def extract(pdf_path, out_path):
    text = ""
    try:
        with open(pdf_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text() + "\n"
        with open(out_path, "w", encoding="utf-8", errors="ignore") as out:
            out.write(text)
        print(f"Extracted {pdf_path}")
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")

extract(r"..\rules and regulations.pdf", "rules_extracted.txt")
extract(r"..\volunteers.pdf", "volunteers_extracted.txt")
