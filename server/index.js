require("dotenv").config();
const server = require("./src/app.js");
const fillDonations = require("./src/controllers/fillDonations.js");
const { conn } = require("./src/db.js");
const fillHomes = require("./src/utils/fillHomes.js");
const fillPets = require("./src/utils/fillPets.js");
const llenarUsuario = require("./src/utils/llenarUsuario.js");
// const crearAdopcion = require("./src/utils/crearAdopcion.js");

const PORT = 3001;

// Syncing all the models at once.

conn
  .sync({
    force: false,
  })
  .then(() => {
    server.listen(PORT, () => {
      fillPets();
      fillHomes();
      llenarUsuario();
      fillDonations();
      console.log(`Correte a la POKEVERGA en el:  ${PORT}`); // eslint-disable-line no-console
    });
  });
