require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  //!Para usar la base de datos Remota 01/09:
  "postgresql://postgres:XkyrYs7Ygf2FSyF5nQs3@containers-us-west-149.railway.app:6905/railway",

  //!Para usar la base de datos Remota:

  // `postgresql://postgres:devZjxigFLUOiHZBcQxh@containers-us-west-127.railway.app:6739/railway`,
  //!Para usar la base de datos local
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/huellitas`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  CasaDeAdopcion,
  Comentario,
  TipoDeUsuario,
  Usuario,
  Mascota,
  EstadoAdopcion,
  Donacion,
  Adopcion,
  Especie,
  Favorito,
} = sequelize.models;

//Usuarios --> Tipo de Usuarios
Usuario.belongsTo(TipoDeUsuario, {
  foreignKey: "tipoDeUsuarioId",
});
TipoDeUsuario.hasMany(Usuario, {
  foreignKey: "tipoDeUsuarioId",
});

//Donaciones --> Usuarios
Donacion.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});
Usuario.hasMany(Donacion, {
  foreignKey: "usuarioId",
});

//Comentarios --> Usuarios
Comentario.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});
Usuario.hasMany(Comentario, {
  foreignKey: "usuarioId",
});

//Adopciones --> Usuarios
Adopcion.belongsTo(Usuario, {
  foreignKey: "usuarioId",
});
Usuario.hasMany(Adopcion, {
  foreignKey: "usuarioId",
});
//Lo comenté porque si no, cuando haces post de casa de adopción te pide un comentario como dato en el json.
//Casa de Apciones --> Comentarios
CasaDeAdopcion.hasMany(Comentario, {
  foreignKey: "casaDeAdopcionId",
});
Comentario.belongsTo(CasaDeAdopcion, {
  foreignKey: "casaDeAdopcionId",
});

//Mascotas --> Casa de Adopciones
Mascota.belongsTo(CasaDeAdopcion, {
  foreignKey: "casaDeAdopcionId",
});
CasaDeAdopcion.hasMany(Mascota, {
  foreignKey: "casaDeAdopcionId",
});

//Mascotas --> Especies
Mascota.belongsTo(Especie, {
  foreignKey: "especieId",
});
Especie.hasMany(Mascota, {
  foreignKey: "especieId",
});

//Donaciones --> Casa de Adopciones
Donacion.belongsTo(CasaDeAdopcion, {
  foreignKey: "casaDeApocionId",
});
CasaDeAdopcion.hasMany(Donacion, {
  foreignKey: "casaDeAdpocionId",
});

//Usuarios -->  favoritos
Favorito.belongsTo(Usuario, {
  foreignKey: "favoritoId",
}); //Un usuario puede tener muchos favoritos (1 a N)

Usuario.hasMany(Favorito, { foreignKey: "usuarioId" }); //

//Mascotas --> Favoritos

Favorito.belongsTo(Mascota, {
  foreignKey: "favoritoId",
}); //Un usuario puede tener muchos favoritos (1 a N)

Mascota.hasMany(Favorito, { foreignKey: "mascotaId" }); //

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
