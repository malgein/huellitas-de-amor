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
		<div className={styles.formContainer}>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ isSubmitting, isValid }) => (
					<div className={styles.form}>
						<Form>
							<div className={styles.tittle}>
								{/* <svg
									xmlns='http://www.w3.org/2000/svg'
									width='287'
									height='70'
									viewBox='0 0 287 70'
									fill='none'>
									<g filter='url(#filter0_d_82_220)'>
										<path
											d='M4 10.1191C4 4.5963 8.47716 0.119144 14 0.119149L153 0.119267L273 0.11915C278.523 0.119145 283 4.5963 283 10.1192V51.9999C283 57.5227 278.523 61.9999 273 61.9999H14C8.47715 61.9999 4 57.5227 4 51.9999V10.1191Z'
											fill='#FFEE93'
										/>
									</g>
									<defs>
										<filter
											id='filter0_d_82_220'
											x='0'
											y='0.119141'
											width='287'
											height='69.8806'
											filterUnits='userSpaceOnUse'
											color-interpolation-filters='sRGB'>
											<feFlood flood-opacity='0' result='BackgroundImageFix' />
											<feColorMatrix
												in='SourceAlpha'
												type='matrix'
												values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
												result='hardAlpha'
											/>
											<feOffset dy='4' />
											<feGaussianBlur stdDeviation='2' />
											<feComposite in2='hardAlpha' operator='out' />
											<feColorMatrix
												type='matrix'
												values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
											/>
											<feBlend
												mode='normal'
												in2='BackgroundImageFix'
												result='effect1_dropShadow_82_220'
											/>
											<feBlend
												mode='normal'
												in='SourceGraphic'
												in2='effect1_dropShadow_82_220'
												result='shape'
											/>
										</filter>
									</defs>
								</svg> */}
								<h1>Agrega una nueva mascota</h1>
							</div>
							<div className={styles.Field}>
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
							<div className={styles.Field}>
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
							<div className={styles.Field}>
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

							<div className={styles.Field}>
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
							<div className={styles.FielTextarea}>
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
							<div className={styles.Field}>
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
							<div className={styles.Field}>
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
							<div className={styles.selectContainer}>
								<div className={styles.select}>
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
								<div className={styles.select}>
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
							<div className={styles.button}>
								<Button type='submit' disabled={isSubmitting} size='lg'>
									Enviar
								</Button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default AgregarMascota;
