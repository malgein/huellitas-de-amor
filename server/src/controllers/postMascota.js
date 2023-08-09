const { Mascotas} = require('../db');


const postMascota = async (req, res) => {
	try {
		const { name, specie, raze, age, weight, height,priority, image, comments} = req.body;
		
	

		if (!name || !specie || !raze || !age || !weight ||!height ||!priority ||!image) {
			res.status(404).json({msg:"Completa todos los campos."});
		
		} else {		
			const newMascota = await Mascotas.create({
				name,
				specie,
				raze,
				age,
				weight,
				height,
				priority,
				image,
				comments,
			});

			res.status(200).json(newMascota);
		}

	} catch (error) {
		res.status(404).send(error.msg);
	}
};

module.exports = postMascota;