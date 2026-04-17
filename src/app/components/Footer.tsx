import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Subscribe to Fragments</h3>
            <p className="newsletter-text">
              Receive a quiet reflection and curated poetic words in your inbox 
              once a week. No noise, just silence.
            </p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required 
            />
            <button type="submit" className="newsletter-submit">Join</button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-bio">
            <span className="footer-logo">Words &amp; Silence</span>
            <p className="footer-description">
              A minimalist sanctuary for thoughts, quotes, and reflections. 
              Created for those who seek luxury in brevity and beauty in the unspoken.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/vault.of.words" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.cosmos.so/ash.ae" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Cosmos">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 7v2m0 6v2m-5-5h2m6 0h2" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ayushsingh360/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <span className="footer-nav-title">Explore</span>
            <div className="footer-nav-links">
              <a href="/" className="footer-nav-link">Home</a>
              <a href="/quotes" className="footer-nav-link">Quotes</a>
              <a href="/writings" className="footer-nav-link">Writings</a>
              <a href="/gallery" className="footer-nav-link">Gallery</a>
            </div>
          </div>

          <div className="footer-nav">
            <span className="footer-nav-title">Sanctuary</span>
            <div className="footer-nav-links">
              <a href="/about" className="footer-nav-link">About Us</a>
              <a href="/contact" className="footer-nav-link">Contact</a>
              <a href="/privacy" className="footer-nav-link">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Words &amp; Silence. All rights reserved.
          </div>
          <div className="footer-quote">
            &ldquo;Silence is the sanctuary of the soul.&rdquo;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
