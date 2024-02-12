import React from 'react';
import'./Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
       <footer className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        &copy; 2024 Company Name. All Rights Reserved.
      </footer>
    </div>
  )
}

export default Footer
