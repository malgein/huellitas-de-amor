const { Usuario } = require("../db");
const { AuthenticationClient } = require("auth0");

const auth0 = new AuthenticationClient({
  domain: "dev-zmxdsgjn0buf7bnr.us.auth0.com",
  clientId: "r3sV01hm6BXdgakUyDXf1AT23FEXYqUF",
  clientSecret:
    "fJxLRRCL5LNkamwefVePhAJEnd2GBhMM9gzTSV-PuZnmcuT_s4T7B9wXRWTqzTZx",
});


const postCrearUsuario = async ({ nombre, apellido, email, password }) => {
  try {
    if (!nombre || !apellido || !email || !password) {
      return { status: 401, message: "Faltan datos" };
    }
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      password,
    });
    console.log(nuevoUsuario);

    // creacion de usuario en auth0
    const auth0User = await auth0.createUser({
      email,
      password,
      connection: "Username-Password-Authentication",
      user_metadata: {
        nombre,
        apellido,
      }
      

    });
    console.log("Nuevo usuario creado en Auth0:", auth0User);
      console.log("Nuevo usuario creado en la base de datos:", nuevoUsuario);
    return nuevoUsuario;
  } catch (error) {
    throw { error: error?.status, message: error?.message };
  }

  
};




// const postCrearUsuario = async ({ name, email }) => {
//   try {
//     if (!name || !email) {
//       return { status: 401, message: "Faltan datos" };
//     }

//     const nuevoUsuario = await Usuario.create({
//       nombre,
//       email,
//     });

//     const auth0User = await auth0.createUser({
//       email,
//       name: nombre,
//     });

//     console.log("Nuevo usuario creado en Auth0:", auth0User);
//     console.log("Nuevo usuario creado en la base de datos:", nuevoUsuario);

//     return nuevoUsuario;
//   } catch (error) {
//     throw { error: error?.status, message: error?.message };
//   }
// };

module.exports = postCrearUsuario;
