import React from "react";
import { Container } from "react-bootstrap";

function Experience() {
  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="mb-4">Expériences Professionnelles</h2>
        <div className="legend mb-4">
          <span className="experience-it">Informatique</span>
          <span className="experience">Autres domaines</span>
        </div>

        <h5 className="experience">
          Responsable du secteur arbitrage – Handball Club Cournon d’Auvergne
          (club professionnel)
        </h5>
        <p className="experience">
          <em>Depuis septembre 2024</em>
          <br /> Chargé de la stratégie et du développement de l’image du club
          dans le domaine de l’arbitrage. Je supervise la formation des jeunes
          arbitres via des stages pratiques, des séances d’accompagnement sur
          les week-ends de matchs, et un suivi pédagogique personnalisé. Cette
          mission m’amène à travailler en étroite collaboration avec les
          instances sportives du club et à développer des compétences fortes en
          leadership, travail en équipe et transmission de savoir.
        </p>

        <h5 className="experience-it">Co-fondateur – Micro-entreprise YTNS</h5>
        <p className="experience-it">
          <em> Depuis février 2025</em>
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
        <h5 className="experience">
          Secrétaire dans un centre d'ophtalmologie – Pard'Yeux{" "}
        </h5>
        <p className="experience">
          <em>Septembre - 2024</em>
          <br />
          Secrétaire médicale au centre d’ophtalmologie de Pardieu, je suis en
          charge de l’accueil des patients, de la gestion des rendez-vous, de la
          coordination avec les médecins et orthoptistes, de la préparation des
          dossiers médicaux, de la saisie des comptes rendus, de la facturation
          et de la télétransmission, tout en assurant un accompagnement humain
          et bienveillant des patients tout au long de leur parcours de soins.
        </p>

        <h5 className="experience-it">
          Réalisation d'un jeu Simon (IoT) – Ecole Hexagone{" "}
        </h5>
        <p className="experience-it">
          <em>Juin - Juillet 2025</em>
          <br />
          Conception et développement d’un jeu de mémoire Simon dans le cadre
          d’un projet académique. Utilisation du langage Arduino et de
          composants électroniques tels que l’ESP32, des LEDs, boutons
          poussoirs, et un buzzer. Ce projet m’a permis de renforcer mes
          compétences en programmation embarquée, en gestion de composants
          électroniques, et en logique de jeu interactive.
        </p>

        <h5 className="experience-it">
          Stage associatif – Club de Handball de Cournon d’Auvergne{" "}
        </h5>
        <p className="experience-it">
          <em> Refonte partielle du site web – WordPress | Printemps 2025</em>
          <br />
          Restauration de plusieurs pages du site web du club (sections
          "Arbitrage" et "Projets Talents") à l’aide de WordPress, dans un délai
          restreint d’une semaine. Ce projet m’a permis d’acquérir une maîtrise
          fonctionnelle de l’outil, d’apprendre à structurer du contenu web de
          manière cohérente et à respecter un cahier des charges précis, le tout
          dans un contexte de pression temporelle stimulant.
        </p>

         <h5 className="experience">
          Secrétaire dans un centre d'ophtalmologie – OphtaJaude{" "}
        </h5>
        <p className="experience">
          <em>Juillet + Septembre - 2025</em>
          <br />
          Secrétaire médicale au centre d’ophtalmologie d'OphtaJaude, je suis en
          charge de l’accueil des patients, de la gestion des rendez-vous, de la
          coordination avec les médecins et orthoptistes, de la préparation des
          dossiers médicaux, de la saisie des comptes rendus, de la facturation
          et de la télétransmission, tout en assurant un accompagnement humain
          et bienveillant des patients tout au long de leur parcours de soins.
        </p>

        <h5 className="experience">
          Hôte d’accueil et Caster attraction – Parc Vulcania{" "}
        </h5>
        <p className="experience">
          <em>Août - 2025</em>
          <br />
          Accueil et orientation des visiteurs au sein du parc à thème
          scientifique Vulcania. Présentation et lancement des animations (en
          tant que « caster ») sur certaines attractions technologiques et
          interactives. Cette expérience m’a permis de développer mes
          compétences en communication orale, gestion de flux de public,
          pédagogie et travail en équipe dans un environnement dynamique et
          touristique
        </p>

        <h5 className="experience-it">Stage Dév. POC Jeux Vidéo – BEMS</h5>
        <p className="experience-it">
          <em>Août - Septembre 2025</em>
          <br />
          Réalisation d’un proof of concept (POC) pour un jeu vidéo rétro en 2D.
          Ce stage m’a permis de me familiariser avec le moteur de jeu Godot, de
          développer mes compétences en écoute active, en réalisation de tâches
          demandées et en suivi de cahier des charges.
        </p>
      </Container>
    </section>
  );
}

export default Experience;
