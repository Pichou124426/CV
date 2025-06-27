import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="py-5 section-education">
      <Container>
        <h2 className="text-center mb-5"> Formation</h2>

        <div className="education-grid">
          <div className="edu-card">
            <FaGraduationCap className="edu-icon" />
            <h5>Brevet des collèges</h5>
            <p>2017 – 2021<br />Collège Molière, Beaumont</p>
          </div>

          <div className="edu-card">
            <FaGraduationCap className="edu-icon" />
            <h5>Baccalauréat Général</h5>
            <p>2021 – 2024<br />Lycée René Descartes, Cournon</p>
            <small>Spécialités : Mathématiques, Physique-Chimie<br />Pôle Espoir Handball</small>
          </div>

          <div className="edu-card highlight">
            <FaGraduationCap className="edu-icon" />
            <h5>Bachelor Informatique</h5>
            <p>2024 – 2027<br />École Hexagone, Clermont-Ferrand</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Education;