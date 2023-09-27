// * viejo que si anda
const { Usuario} = require("../db");
const bcrypt = require('bcryptjs')
//para verificar los tokens
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require('../config')

const postCrearUsuario = async ({
  nombre,
  apellido,
  email,
  // imagenPerfil,
  password,
  nacionalidad,
  ubicacion,
  direccion,
  telefono,
  acerca
}) => {
  try {
    if (!nombre || !apellido || !email || !password || !nacionalidad || !ubicacion || !direccion || !acerca || !telefono ) {
      return { status: 401, message: "Faltan datos" };
    }

    //averiguamos si el correo que el usuario esta apunto de agregar existe
    const existingUser = await Usuario.findOne({ where: { email } });

    //si el correo existe en la bd enviamos un mensaje de error y el usuario no podra registrarse con el mismo correo
    if (existingUser) {
      return {status:400, error: 'El correo electrónico ya está en uso.' };
    }

    //encripta el password
		const passwordHash = await bcrypt.hash(password, 10)

    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      nacionalidad,
      // imagenPerfil,
      password: passwordHash,
      ubicacion,
      direccion,
      telefono,
      acerca
    });

    // Crea una entrada en el modelo tipoDeUsuario y relaciona el usuario con el tipo "Usuario"

    // // Establece la relación
    // nuevoUsuario.setTipoDeUsuario(userType);

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

//!Nuevo pero no anda
// const { Usuario } = require("../db");

// const postCrearUsuario = async (req, res) => {
//   try {
//     const { body } = req;
//     const user = await Usuario.findOne({ email: body.email });
//     if (user) {
//       // Verifica que 'user' esté definido antes de acceder a sus propiedades
//       if (user.status !== undefined) {
//         if (user.status === false) {
//           await Usuario.findByIdAndUpdate(
//             user._id,
//             { isActive: true },
//             { new: true }
//           );
//           res.status(200).json({ message: "Usuario actualizado", data: user });
//         } else {
//           res.status(200).json({ message: "El usuario ya existe" });
//         }
//       } else {
//         res
//           .status(200)
//           .json({ message: "El estado del usuario no está definido" });
//       }
//     } else {
//       // Si 'user' es undefined, puedes manejarlo de acuerdo a tu lógica
//       res.status(200).json({ message: "El usuario no existe" });
//     }
//   } catch (error) {
//     res.status(400).json({
//       message: `Error al crear un usuario ${req.body.firstName}`,
//       error,
//     });
//   }
// };

// module.exports = postCrearUsuario;

// todo ----------- Prueba del nuevo.

// const { Usuario } = require("../db");

// // Función para crear o actualizar un usuario
// const postCrearUsuario = async (req, res) => {
//   try {
//     const { body } = req;
//     const user = await Usuario.findOne({ email: body.email });
//     console.log(user);

//     if (!user) {
//       // Si el usuario no existe, crear uno nuevo
//       const nuevoUsuario = await Usuario.create({
//         nombre: body.nombre,
//         apellido: body.apellido,
//         email: body.email,
//         imagenPerfil: body.imagenPerfil,
//         password: body.password,
//         // status: true, // Asegúrate de establecer el estado al crear un nuevo usuario
//       });
//       res.status(201).json(nuevoUsuario);
//     } else {
//       // Si el usuario existe, verificar su estado y actualizar si es necesario
//       if (user.status !== undefined) {
//         if (user.status === false) {
//           // Actualizar el estado a activo si está inactivo
//           await Usuario.findByIdAndUpdate(
//             user._id,
//             { status: true }, // Actualiza el estado a activo
//             { new: true }
//           );
//           res?.status(200).json({ message: "Usuario actualizado", data: user });
//         } else {
//           res?.status(200).json({ message: "El usuario ya existe" });
//         }
//       } else {
//         res
//           ?.status(200)
//           .json({ message: "El estado del usuario no está definido" });
//       }
//     }
//   } catch (error) {
//     res.status(400).json({
//       message: `Error al crear o actualizar un usuario ${req.body.nombre}`,
//       error,
//     });
//   }
// };

// module.exports = postCrearUsuario;
