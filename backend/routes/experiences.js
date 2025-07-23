const express = require("express");
const router = express.Router();
const pool = require("../db"); // ← connexion à ta BDD

// GET toutes les expériences
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM experiences ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error("Erreur dans /experiences :", err.message);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
