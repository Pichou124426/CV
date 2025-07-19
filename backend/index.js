const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/experiences", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM experiences ORDER BY id");
    res.json(result.rows); 
  } catch (err) {
    console.error("Erreur serveur :", err.message);

   
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
    console.log(` Serveur lancé sur http://localhost:${PORT}`);
});

