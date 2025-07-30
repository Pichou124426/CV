import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">À propos</h2>
        <Row className="align-items-center justify-content-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="about-photo-wrapper">
              <Image
                src="/noah.jpg"
                alt="Noah Sillaire"
                className="about-photo"
                fluid
              />
            </div>
          </Col>
          <Col md={7}>
            <div className="about-card">
              <p className="about-text">
                Bonjour, je m'appelle <strong>Noah</strong> 👋 <br />
                Actuellement étudiant en <strong>Bachelor Informatique</strong> à l’École Hexagone de Clermont-Ferrand, je suis passionné par les projets concrets, le développement logiciel et l’innovation. <br /><br />
                Grâce à mes expériences professionnelles, associatives et académiques, j’ai consolidé des compétences en <em>gestion de projet</em>, <em>développement fullstack & IoT</em> et <em>communication d’équipe</em>. J’accorde une grande importance à la fiabilité, la rigueur, et l’élégance dans le code comme dans les relations humaines.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;