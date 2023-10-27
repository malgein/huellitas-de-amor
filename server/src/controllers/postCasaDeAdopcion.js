const { CasaDeAdopcion } = require("../db");
const bcrypt = require('bcryptjs')
const createAccessToken = require('../libs/jwt')
//Para no mover el id del modelo (no tiene autoincrement), voy a pedir el id por ahora
const postCasaDeAdopcion = async (req, res) => {

  const {
    nombreDeOng,
    nombreDeContacto,
    email,
    password,
    telefono,
    foto,
    ubicacion,
  } = req.body

  try {
    if (
      !nombreDeOng ||
      !nombreDeContacto ||
      !password ||
      !email ||
      !telefono ||
      !ubicacion
    ) {
      return  res.status(401).json("Faltan datos");
    }

    const houseFound = await CasaDeAdopcion.findOne({ where: { email } });

    if(houseFound) return res.status(400).json({message:'email already exists'})

    const passwordHash = await bcrypt.hash(password, 10)

    const nuevaCasaDeAdopcion = await CasaDeAdopcion.create({
      nombreDeOng,
      telefono,
      email,
      password: passwordHash,
      nombreDeContacto,
      foto,
      ubicacion,
    });

    const token = await createAccessToken({id: nuevaCasaDeAdopcion.id})
    console.log(nuevaCasaDeAdopcion)
    res.cookie('token', token)
    // console.log(nuevaCasaDeAdopcion);
    return res.status(201).json({
      id: nuevaCasaDeAdopcion.id,
      nombreDeOng: nuevaCasaDeAdopcion.nombreDeOng,
      nombreDeContacto: nuevaCasaDeAdopcion.nombreDeContacto,
      telefono: nuevaCasaDeAdopcion.telefono,
      ubicacion: nuevaCasaDeAdopcion.ubicacion,
      email: nuevaCasaDeAdopcion.email,
      foto: nuevaCasaDeAdopcion.foto
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postCasaDeAdopcion;
