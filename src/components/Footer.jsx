import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt />
              <span>53-55 Milton Road, Westcliff-on-Sea, SS0 7JP</span>
            </li>
            <li>
              <FaPhone />
              <a href="tel:01702346392">01702 346392 (Telephone)</a>
            </li>
            <li>
              <FaMobileAlt />
              <a href="tel:07427665750">07427 665750 (Mobile)</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:faizanemadinasouthend@gmail.com">
                faizanemadinasouthend@gmail.com
              </a>
            </li>
            <li>
              <FaWhatsapp />
              <a
                href="https://chat.whatsapp.com/JSjCIBk2jkr9rnlaHONDO1?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our WhatsApp Group
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {currentYear} Faizan-e-Madina Southend (Dawat-e-Islami). All
        Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
