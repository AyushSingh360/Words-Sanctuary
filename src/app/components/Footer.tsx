import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-bio">
          <h3 className="footer-title">Words &amp; Silence</h3>
          <p className="footer-text">
            A minimalist sanctuary for thoughts, quotes, and reflections. 
            Embracing luxury, brevity, and emotional calmness.
          </p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon">X</a>
          <a href="#" className="social-icon">In</a>
          <a href="#" className="social-icon">Ig</a>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Words &amp; Silence. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
