import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-light py-5">
      <Container>
        <h2 className="mb-4">Contact</h2>
        <p>Email : <a href="mailto:nsillaire@gmail.com">nsillaire@gmail.com</a></p>
        <p>Téléphone : <a href="phoneto:07.77.28.93.75">0777289375</a></p>
        <p>
          <FaLinkedin size={20} style={{ marginRight: '8px' }} />
          <a
            href="https://www.linkedin.com/in/noah-sillaire-186682349"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir mon profil LinkedIn
          </a>
        </p>
        <Button variant="primary" href="/cv-noah-sillaire.pdf" download>
          Télécharger le CV PDF
        </Button>
      </Container>
    </section>
  );
}

export default Contact;
