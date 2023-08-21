const {Donacion} = require('../db')

//Ruta para obtener todos los usuarios, necesario para listarlos todos y renderizarlos en el administrador admin
const getAllDonations = async () => {
	//trae todos los usuarios de la base de datos y los guarda en users en forma de json para luego retornarlos
	try{
		const donations = await Donacion.findAll()
		
		if(!donations) return {status: 404, message: "No existen casas de adopcion"}
		return donations
	}catch(error){
		return error
	}
}

module.exports= getAllDonations