import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh', 
        paddingTop: '80px', 
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f8f9fa', 
      }}
    >
      <Container>
        <h2 className="mb-4">À propos</h2>
        <Row className="align-items-center">
          <Col md={4}>
            <Image
              src="/noah.jpg"
              alt="Noah Sillaire"
              roundedCircle
              fluid
            />
          </Col>
          <Col md={8} >
            <p>
              " Étudiant en informatique à l’École Hexagone de Clermont-Ferrand, passionné par le développement logiciel et le travail en équipe.
              J’ai acquis de l’expérience dans l'encadrement, la gestion de projet et le développement de jeux vidéo grâce à mes expériences associatives et professionnelles. "
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
