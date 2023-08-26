
import * as Yup from "yup";

const agregarMascotaSchema = Yup.object().shape({
	nombre: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	especie: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	edad: Yup.number("La edad debe ser un número positivo")
		.min(0, "La edad debe ser mayor o igual a 0")
		.required("Campo requerido")
		.positive()
		.integer("La edad debe ser un número positivo"),
	tamano: Yup.string().required("Campo requerido"),
	peso: Yup.number()
		.min(1, "El peso debe ser mayor o igual a 0")
		.required("Campo requerido"),
	descripcion: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")

		.required("Campo requerido"),
	raza: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	sexo: Yup.string().required("Campo requerido"),
	// foto: Yup.ArraySchema()
});

export default agregarMascotaSchema;
