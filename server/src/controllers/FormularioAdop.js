const FormularioAdopt = require ('../models/FormularioAdop.js');


const formularioAdopt = async (req, res) => {
    try {
        const { nombre, apellido, DNI, email, direccion, localidad, estado, pais, telefono } = req.body;
     //Validacion de datos
     if (!(nombre && apellido && DNI && email && direccion && localidad && estado && pais && telefono)) {
        return res.status(400).json({ message: 'Por favor, complete todos los campos requeridos.' });
    };
    const newFormularioAdopt = await FormularioAdopt.create({
        nombre, apellido, DNI, email, direccion, localidad, estado, pais, telefono
    });

    res.status(201).json(newFormularioAdopt);


}
catch (error) {
    console.error(error);  // Para registrar el error en la consola
    res.status(error?.status || 500).json({ message: error?.message || 'Error interno del servidor' });
}

};

module.exports = {
    formularioAdopt
};
