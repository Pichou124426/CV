import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [filtre, setFiltre] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = filtre
        ? `http://localhost:3001/api/experiences/domaine/${filtre}`
        : `http://localhost:3001/api/experiences`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        console.log("Données reçues :", data);

        if (Array.isArray(data)) {
          setExperiences(data);
        } else {
          console.warn("Format inattendu reçu du backend");
          setExperiences([]);
        }
      } catch (error) {
        console.error("Erreur de chargement :", error);
        setExperiences([]);
      }
    };

    fetchData();
  }, [filtre]);

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="mb-4">Expériences Professionnelles</h2>

        <div className="legend mb-4">
          <button
            className="experience-it-button"
            onClick={() => setFiltre("informatique")}
          >
            Informatique
          </button>
          <button
            className="experience-button"
            onClick={() => setFiltre("autres")}
          >
            Autres domaines
          </button>
          <button
            className="experience-tous"
            onClick={() => setFiltre(null)}
          >
            Tous
          </button>
        </div>

        {Array.isArray(experiences) && experiences.length > 0 ? (
          experiences.map((exp) => {
            const classeBloc =
              exp.domaine === "informatique" ? "experience-it" : "experience";

            return (
              <div key={exp.id} className={classeBloc}>
                <h5>{exp.titre} – {exp.entreprise}</h5>
                <p>
                  <em>
                    {exp.date_debut} {exp.date_fin ? `– ${exp.date_fin}` : ""}
                  </em>
                  <br />
                  {exp.description}
                </p>
              </div>
            );
          })
        ) : (
          <p className="text-muted">
            Aucune expérience trouvée pour ce domaine !!
          </p>
        )}
      </Container>
    </section>
  );
}

export default Experience;