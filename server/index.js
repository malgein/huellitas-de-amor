const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const fillPets = require('./src/utils/fillPets.js')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    fillPets();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
