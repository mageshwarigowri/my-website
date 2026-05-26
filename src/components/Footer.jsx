import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <h2>Let's Work Together</h2>
          <p>I'm always open to new opportunities and interesting projects</p>

          <div className="social-links">
            <a href="https://github.com/mageshwarigowri" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="mailto:mageshwarigowri@gmail.com" className="social-link">
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Mageshwari Gowri. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
