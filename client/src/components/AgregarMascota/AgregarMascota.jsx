import React, { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FormTextarea from "../FormTextarea/FormTextarea";
import { Button } from "@nextui-org/button";
import { Formik, Form } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditarPerfil = () => {
	const { userId } = useParams(); // Asegúrate de tener el userId desde React Router

	const initialValues = {
		nombre: "",
		apellido: "",
		email: "",
		password: "",
		nacionalidad: "",
		ubicacion: "",
		direccion: "",
		telefono: "",
		acerca: "",
	};

	const [userData, setUserData] = useState(initialValues);

	useEffect(() => {
		// Obtener los datos del usuario del backend y establecerlos en el estado
		if (userId) {
			axios
				.get(`http://localhost:3001/perfil/${userId}`)
				.then((response) => {
					setUserData(response.data || initialValues); // Usar initialValues si no hay datos disponibles
				})
				.catch((error) => {
					console.error("Error al obtener los datos del usuario:", error);
				});
		}
	}, []);

	console.log("aqui user data", userData);

	const onSubmit = (values) => {
		// Clonar los datos para evitar referencias circulares
		// const clonedData = JSON.parse(JSON.stringify(values));

		axios
			.put(`http://localhost:3001/usuario/${userId}`, values)
			.then((response) => {
				Swal.fire(
					"Éxito",
					"Los cambios se guardaron correctamente.",
					"success"
				);
			})
			.catch((error) => {
				console.error("Error al actualizar los datos del usuario:", error);
				Swal.fire("Error", "No se pudieron guardar los cambios.", "error");
				console.log(error);
			});
	};

	return (
		<div className='flex flex-col items-center'>
			<Formik
				initialValues={userData} // Rellenar el formulario con los datos del usuario
				onSubmit={onSubmit}>
				{({ isSubmitting, values }) => (
					<Form onSubmit={onSubmit}>
						<div>
							<FormInput label='Nombre' name='nombre' placeholder='Nombre' />
						</div>
						<div>
							<FormInput
								label='Apellido'
								name='apellido'
								placeholder='Apellido'
							/>
						</div>
						<div>
							<FormInput
								label='Nacionalidad'
								name='nacionalidad'
								placeholder='Nacionalidad'
							/>
						</div>
						<div>
							<FormInput
								label='Ubicación'
								name='ubicacion'
								placeholder='Ubicación'
							/>
						</div>
						<div>
							<FormInput
								label='Direccion'
								name='direccion'
								placeholder='Direccion'
							/>
						</div>
						<div>
							<FormInput
								label='Telefono'
								name='telefono'
								placeholder='Telefono'
							/>
						</div>
						<div>
							<FormTextarea
								placeholder='Realiza una descripción...'
								label='Acerca De:'
								name='acerca'
							/>
						</div>
						<div>
							<FormInput placeholder='Email' label='Email' name='email' />
						</div>
						<div>
							<FormInput
								placeholder='Contraseña'
								label='Contraseña'
								name='password'
							/>
						</div>
						<Button
							type='submit'
							disabled={isSubmitting}
							className='border border-black text-black hover:bg-slate-100 mt-8 bg-inherit mb-4'
							size='lg'>
							Guardar Cambios
						</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default EditarPerfil;
