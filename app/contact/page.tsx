import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-text">
            Whether it's a shared thought, a collaboration inquiry, or a simple greeting—I welcome your words into this sanctuary.
          </p>
        </div>

        <div className="contact-links">
          <span className="contact-links-title">Digital Echoes</span>
          
          <a href="mailto:hello@example.com" className="contact-link-item">
            <div className="contact-link-icon-wrap">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <span className="contact-link-text">Email</span>
          </a>

          <a href="#" className="contact-link-item">
            <div className="contact-link-icon-wrap">
              {/* Material symbols doesn't have social icons by default, using generic ones */}
              <span className="material-symbols-outlined">photo_camera</span>
            </div>
            <span className="contact-link-text">Instagram</span>
          </a>

          <a href="#" className="contact-link-item">
            <div className="contact-link-icon-wrap">
              <span className="material-symbols-outlined">brand_awareness</span>
            </div>
            <span className="contact-link-text">Pinterest</span>
          </a>

          <a href="#" className="contact-link-item">
            <div className="contact-link-icon-wrap">
              <span className="material-symbols-outlined">edit_note</span>
            </div>
            <span className="contact-link-text">Substack</span>
          </a>

        </div>
      </div>
    </section>
  );
}
