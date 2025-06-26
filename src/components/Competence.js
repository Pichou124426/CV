import React from "react";
import { Container } from "react-bootstrap";

function Competence() {
  return (
    <section id="competence" className="py-5">
      <Container>
        <h2 className="mb-4">Compétences Humaines et Informatique </h2>

        <h5>Qualités Personnelles</h5>
        <p>
          Mes différentes expériences m'ont permis de développer des qualités
          humaines fortes : le goût de la transmission, l’écoute active, l’envie
          d’aider les autres et un sens du leadership. Je sais assumer des
          décisions, les justifier de manière cohérente, et les communiquer
          clairement. Je suis une personne dynamique, proactive, avec un fort
          esprit d’initiative, appréciant particulièrement la résolution de
          problèmes et la gestion de projets. Sérieux, ponctuel et orienté vers
          le travail en équipe, je valorise autant les compétences techniques
          que les relations humaines.
        </p>
        <p>
          <em>Langues parlées et écrites :</em>
          <br></br>
          Français : langue maternelle <br></br>
          Anglais : bonne compréhension écrite et orale, à améliorer à l’oral{" "}
          <br></br>
          Espagnol : compréhension générale, expression orale à renforcer
        </p>

        <h5>Competences Informatiques</h5>
        <p>
          <em>Logiciels et Plateforme</em>
          <br />
          <ul>
            <li>Systèmes d’exploitation : maîtrise de Linux et Windows</li>
            <li> Administration système : scripting en Bash et PowerShell</li>
            <li> Bureautique : maîtrise complète du pack Microsoft Office</li>
            <li>
              {" "}
              Développement :{" "}
              <p>
                Langages : Python,C, C++ <br></br>
                Web : HTML/CSS, JavaScript, PHP, React, Bootstrap, JSX{" "}
              </p>
            </li>
            <li> Réseaux: utilisation de Cisco Packet Tracer, Wireshark </li>
            <li> Bases de données : MySQL, PostgreSQL, Postman </li>
            <li> IoT & systèmes embarqués : projets réalisés avec Arduino </li>
            <li>
              {" "}
              Conception & UX/UI : bonnes connaissances des fondamentaux UX/UI
              et de l’algorithmique{" "}
            </li>
            <li>
              Maintenance informatique : compétences en diagnostic, entretien et
              dépannage matériel et logiciel
            </li>
            <li>
              Outils de gestion de projet : Codeberg, GitHub, GitLab, Vite
            </li>
          </ul>
        </p>
      </Container>
    </section>
  );
}

export default Competence;
