import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Textarea,Button } from "@nextui-org/react";
import styles from "./AgregarMascota.module.css";
import { useDispatch } from "react-redux";
import { addMascota } from "../../redux/actions";

const validationSchema = Yup.object().shape({
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
		.min(0, "El peso debe ser mayor o igual a 0")
		.required("Campo requerido"),
	descripcion: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(250, "Debe poseer máximo 250 caracteres")
		.required("Campo requerido"),
	foto: Yup.string()
		.max(250, "Debe poseer máximo 250 caracteres")
		.url("Debe ser una URL válida")
		.required("Campo requerido"),
	raza: Yup.string()
		.min(3, "Debe poseer mínimo 3 caracteres ")
		.max(50, "Debe poseer máximo 50 caracteres")
		.required("Campo requerido"),
	sexo: Yup.string().required("Campo requerido"),
});
const AgregarMascota = () => {
	const mascota ={
		nombre: "",
		especie: "",
		edad: 0,
		tamano: "",
		peso: 0,
		descripcion: "",
		foto: "",
		raza: "",
		sexo: "",
	}
	const initialValues = mascota
	
	const dispatch=useDispatch()
	const handleSubmit = (mascota) => {
		console.log(mascota);
		dispatch(addMascota(mascota));

	};
	const tamañoOptions = ["Pequeño", "Mediano", "Grande"];

	return (
		<div>
			<h1>Agrega una nueva mascota</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ isSubmitting, isValid }) => (
					<Form>
						<div>
							<Field
								as={Input}
								label='Nombre'
								variant='bordered'
								placeholder='Nombre de la mascota...'
								type='text'
								id='nombre'
								name='nombre'
								errorMessage={<ErrorMessage name='nombre' component='div' />}
								validationState={validationSchema}
								// color={
								// 	isValid ? "danger" : "success"
								// }
							/>
							{/* <ErrorMessage name='nombre' component='span' /> */}
							{/* {console.log(validationSchema.isValidSync("nombre"))} */}
						</div>
						<div>
							<Field
								as={Input}
								label='Especie'
								variant='bordered'
								placeholder='Agrega la especie de tu mascota...'
								type='text'
								id='especie'
								name='especie'
								errorMessage={<ErrorMessage name='especie' component='div' />}
								validationState={validationSchema}
								// color={
								// 	!validationSchema.isValidSync("especie")
								// 		? "danger"
								// 		: "success"
								// }
							/>
							{/* <ErrorMessage name='especie' component='div' /> */}
						</div>
						<div>
							<Field
								as={Input}
								label='Edad'
								variant='bordered'
								placeholder='Agrega la edad de tu mascota...'
								type='text'
								id='edad'
								name='edad'
								errorMessage={<ErrorMessage name='edad' component='div' />}
								validationState={validationSchema}
								// color={
								// 	!validationSchema.isValidSync("edad") ? "danger" : "success"
								// }
							/>
						</div>

						<div>
							<Field
								as={Input}
								label='Peso'
								placeholder='Agrega la peso de tu mascota...'
								variant='bordered'
								type='text'
								id='peso'
								name='peso'
								errorMessage={<ErrorMessage name='peso' component='div' />}
								validationState={validationSchema}
								// color={
								// 	!validationSchema.isValidSync("peso") ? "danger" : "success"
								// }
							/>
						</div>
						<div>
							<Field
								as={Textarea}
								variant='bordered'
								label='Descripción'
								placeholder='Agrega la descripcion de tu mascota...'
								id='descripcion'
								name='descripcion'
								errorMessage={
									<ErrorMessage name='descripcion' component='div' />
								}
								validationState={validationSchema}
								// color={
								// 	!validationSchema.isValidSync("descripcion")
								// 		? "danger"
								// 		: "success"
								// }
							/>
						</div>
						<div>
							<Field
								as={Input}
								variant='bordered'
								label='Foto (URL)'
								placeholder='Agrega la foto de tu mascota...'
								id='foto'
								name='foto'
								errorMessage={<ErrorMessage name='foto' component='div' />}
								validationState={isValid}
								// color={
								// 	!validationSchema.isValidSync("foto") ? "danger" : "success"
								// }
							/>
						</div>
						<div>
							<Field
								as={Input}
								variant='bordered'
								label='Raza'
								placeholder='Agrega la raza de tu mascota...'
								id='raza'
								name='raza'
								errorMessage={<ErrorMessage name='raza' component='div' />}
								validationState={validationSchema}
								// color={
								// 	!validationSchema.isValidSync("raza") ? "danger" : "success"
								// }
							/>
						</div>
						<div className={styles.select}>
							<div>
								<div class='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled'>
									<label
										class='block font-medium  dark:text-danger-500 text-tiny will-change-auto origin-top-left transition-all !duration-200 !ease-[cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none
							w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small'
										htmlFor='tamano'>
										Tamaño:
									</label>
									<Field
										as='select'
										label='Tamaño'
										variant='bordered'
										id='tamano'
										name='tamano'
										placeholder='Tamaño'
										errorMessage={
											<ErrorMessage name='tamano' component='div' />
										}
										validationState={validationSchema}>
										<option value=''>Tamaño</option>
										{tamañoOptions.map((option) => (
											<option
												class='w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small'
												key={option}
												value={option}>
												{option}
											</option>
										))}
									</Field>
								</div>
								<ErrorMessage
									class='text-tiny text-danger'
									name='tamano'
									component='div'
								/>
							</div>
							<div>
								<div class='relative w-full inline-flex shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 transition-background !duration-150 group-data-[focus=true]:border-danger transition-colors motion-reduce:transition-none h-14 py-2 is-filled'>
									<label
										class='block font-medium 
										
										 dark:text-danger-500 text-tiny will-change-auto origin-top-left transition-all !duration-200 !ease-[cubic-bezier(0,0,0.2,1)] motion-reduce:transition-none'
										htmlFor='tamano'>
										Sexo:
									</label>
									<Field label='Sexo' as='select' id='sexo' name='sexo'>
										<option value=''>Sexo</option>
										<option value='Macho'>Macho</option>
										<option value='Hembra'>Hembra</option>
									</Field>
								</div>
								<ErrorMessage
									class='text-tiny text-danger'
									name='sexo'
									component='div'
								/>
							</div>
						</div>
						<div className={styles.button} >
							<Button type='submit' disabled={isSubmitting} size='lg'>
								Enviar
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AgregarMascota;
