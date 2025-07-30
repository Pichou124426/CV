const pool = require("../db.js"); // Assure-toi que ton pool est bien importé

// 🔍 Toutes les expériences
exports.getAllExperiences = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM experiences");
    res.json(result.rows); // renvoie un tableau, même vide
  } catch (error) {
    console.error("Erreur dans getAllExperiences :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// 🧠 Expériences filtrées par domaine
exports.getByDomaine = async (req, res) => {
  const { nom } = req.params;
  console.log("Domaine reçu :", nom);

  try {
    const result = await pool.query(
      "SELECT * FROM experiences WHERE LOWER(domaine) = LOWER($1)",
      [nom]
    );

    res.json(Array.isArray(result.rows) ? result.rows : []);
  } catch (error) {
    console.error("Erreur SQL getByDomaine :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
