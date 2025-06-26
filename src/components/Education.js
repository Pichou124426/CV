import React from 'react';
import { Container } from 'react-bootstrap';

function Education() {
  return (
    <section id="education" className="bg-light py-5">
      <Container>
        <h2 className="mb-4">Formation</h2>
        <ul>
          <li><strong>Brevet des colléges</strong><br />2021 - 2024 – Collége Moliére, Beaumont</li>
          <li><strong>Baccalauréat Général</strong><br />2021 - 2024 – Lycée René Descartes, Cournon</li>
          <p> Spécialité Mathématiques et Physique Chimie + Pôle Espoir Handball </p>
          <li><strong>Bachelor Informatique</strong><br />2024 - 2027 – École Hexagone, Clermont-Ferrand</li>
        </ul>
      </Container>
    </section>
  );
}

export default Education;
