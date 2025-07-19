import React, { useState, useEffect } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [filter, setFilter] = useState("all");

  // Chargement des données depuis le backend
  useEffect(() => {
  fetch("http://localhost:5000/experiences")
    .then((res) => res.json())
    .then((data) => {
      setExperiences(data);
    })
    .catch((err) => console.error("Erreur de chargement :", err));
}, []);

  // Appliquer le filtre
  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.domain === filter);

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="mb-4">Expériences Professionnelles</h2>

        {/* Boutons de filtre */}
        <ButtonGroup className="legend mb-4 d-flex justify-content-center">
          <Button
            variant={filter === "informatique" ? "primary" : "outline-primary"}
            onClick={() => setFilter("informatique")}
          >
            Informatique
          </Button>
          <Button
            variant={filter === "autres" ? "primary" : "outline-secondary"}
            onClick={() => setFilter("autres")}
          >
            Autres domaines
          </Button>
          <Button
            variant={filter === "all" ? "dark" : "outline-dark"}
            onClick={() => setFilter("all")}
          >
            Toutes les expériences
          </Button>
        </ButtonGroup>

        {/* Affichage des expériences filtrées */}
        {filteredExperiences.map((exp) => (
          <div key={exp.id}>
            <h5 className={exp.domain === "informatique" ? "experience-it" : "experience"}>
              {exp.title}
            </h5>
            <p className={exp.domain === "informatique" ? "experience-it" : "experience"}>
              <em>{exp.date}</em>
              <br />
              {exp.description}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Experience;