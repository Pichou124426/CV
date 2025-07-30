const express = require("express");
const router = express.Router();
const experiencesController = require("../controllers/experiencesController");

// Route pour récupérer toutes les expériences
router.get("/", experiencesController.getAllExperiences);

// Route pour récupérer les expériences filtrées par domaine
router.get("/domaine/:nom", experiencesController.getByDomaine);

module.exports = router;
