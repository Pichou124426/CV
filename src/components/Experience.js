import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="mb-4">Expériences Professionnelles</h2>

        <h5>
          Responsable du secteur arbitrage – Handball Club Cournon d’Auvergne
          (club professionnel)
        </h5>
        <p>
          <em>Depuis septembre 2024</em>
          <br /> Chargé de la stratégie et du développement de l’image du club
          dans le domaine de l’arbitrage. Je supervise la formation des jeunes
          arbitres via des stages pratiques, des séances d’accompagnement sur
          les week-ends de matchs, et un suivi pédagogique personnalisé. Cette
          mission m’amène à travailler en étroite collaboration avec les
          instances sportives du club et à développer des compétences fortes en
          leadership, travail en équipe et transmission de savoir.
        </p>

        <h5>Co-fondateur – Micro-entreprise YTNS</h5>
        <p>
          <em>Février 2025</em>
          <br />
          Création d’une micro-entreprise avec deux collègues (profil
          informatique et école de commerce), en parallèle de nos études, dans
          le but de mettre en commun nos compétences sur des projets concrets.
          Nous nous concentrons actuellement sur la création de sites web à
          l’aide de templates et de React. Ce projet nous permet de nous
          familiariser avec des situations réelles d’entreprise, où la
          collaboration sur un même projet, le respect des règles, la qualité du
          travail, l’écoute, l’entraide et la répartition des tâches sont
          essentiels. Il nous apporte également des bases solides en gestion de
          projet et en management d’équipe.
        </p>

        <h5>Stage Dév. POC Jeux Vidéo – BEMS</h5>
        <p>
          <em>Août - Septembre 2025</em>
          <br />
          Réalisation d’un proof of concept (POC) pour un jeu vidéo rétro en 2D.
          Ce stage m’a permis de me familiariser avec le moteur de jeu Godot, de
          développer mes compétences en écoute active, en réalisation de tâches
          demandées et en suivi de cahier des charges.
        </p>

        <h5>Réalisation d'un jeu Simon (IoT) – Ecole Hexagone </h5>
        <p>
          <em>Juin - Juillet 2025</em>
          <br />
          Conception et développement d’un jeu de mémoire Simon dans le cadre
          d’un projet académique. Utilisation du langage Arduino et de
          composants électroniques tels que l’ESP32, des LEDs, boutons
          poussoirs, et un buzzer. Ce projet m’a permis de renforcer mes
          compétences en programmation embarquée, en gestion de composants
          électroniques, et en logique de jeu interactive. Souhaites-tu que
          j’intègre ce projet dans une version globale de ton CV ? Je peux aussi
          t’aider à le rédiger sous forme de portfolio de projets.
        </p>
      </Container>
    </section>
  );
}

export default Experience;
