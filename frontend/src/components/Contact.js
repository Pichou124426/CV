import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <Container className="text-center">
        <h2 className="mb-5"> Me contacter</h2>

        <div className="contact-grid">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:nsillaire@gmail.com">nsillaire@gmail.com</a>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:0777289375">07 77 28 93 75</a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/noah-sillaire-186682349"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profil LinkedIn
            </a>
          </div>

          <div className="contact-item">
            <FaDownload className="contact-icon" />
            <a href="/CV-noah.pdf" download>Télécharger mon CV</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;