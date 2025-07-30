require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const experiencesRoutes = require('./routes/experiences');

app.use(cors());
app.use(express.json());
app.use('/api/experiences', experiencesRoutes);

app.listen(3001, () => {
  console.log('Backend lancé sur le port 3001');
});
