const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const fillHomes = require("./src/utils/fillHomes.js");
const fillPets = require("./src/utils/fillPets.js");

// Syncing all the models at once.
conn.sync({
  force: false}).then(() => {
  server.listen(3001, () => {
    // fillPets();
    // fillHomes()
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
