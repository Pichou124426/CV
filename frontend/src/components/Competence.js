import React from "react";
import { Container } from "react-bootstrap";

function Competence() {
  return (
    <section id="competence" className="py-5">
      <Container>
        <h2 className="mb-4">Compétences Humaines et Informatiques</h2>

        <div className="competence-section soft-skills">
          <h5>Qualités personnelles</h5>
          <p>
            Mes différentes expériences m'ont permis de développer des qualités humaines fortes : le goût de la transmission, l’écoute active, l’envie d’aider les autres et un sens du leadership.
            Je suis une personne dynamique, proactive et rigoureuse, appréciant particulièrement la résolution de problèmes et la gestion de projets en équipe.
          </p>
        </div>

        <div className="competence-section languages">
          <h5>Langues parlées et écrites</h5>
          <ul>
            <li><strong>Français</strong> : langue maternelle</li>
            <li><strong>Anglais</strong> : bonne compréhension écrite et orale, à améliorer à l’oral</li>
            <li><strong>Espagnol</strong> : compréhension générale, expression orale à renforcer</li>
          </ul>
        </div>

        <div className="competence-section tech-skills">
          <h5>Compétences informatiques</h5>

          <h6>🧑‍💻 Logiciels & Systèmes</h6>
          <ul>
            <li>Systèmes d’exploitation : Linux, Windows</li>
            <li>Administration : Bash, PowerShell</li>
            <li>Bureautique : Pack Microsoft Office</li>
          </ul>

          <h6>🔧 Développement</h6>
          <ul>
            <li>Langages : Python, C, C++</li>
            <li>Web : HTML/CSS, JavaScript, PHP, React, Bootstrap, JSX</li>
          </ul>

          <h6>🌐 Réseaux & Base de données</h6>
          <ul>
            <li>Outils réseau : Cisco Packet Tracer, Wireshark</li>
            <li>Bases de données : MySQL, PostgreSQL, MAMP/WAMP</li>
          </ul>

          <h6>🔬 Projets & embarqué</h6>
          <ul>
            <li>IoT : Arduino et capteurs</li>
            <li>Conception UX/UI : bases en ergonomie, wireframes et algorithmique</li>
            <li>Maintenance : diagnostic et dépannage logiciel/matériel</li>
            <li>Outils projet : GitHub, GitLab, Codeberg, Vite</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Competence;