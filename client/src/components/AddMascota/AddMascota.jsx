import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addActivity, changePage, getAllCountries } from "../../redux/actions";
import styles from "./AddMascota.module.css";
// import Buttons from "../Buttons/Buttons";
// import { useNavigate } from "react-router-dom";
import {useFormik} from 'formik'

const AddMascota = () => {
	const validation = (input) => {
		let errors = {};

		if (input.nombre.length === 0) errors.nombre = "Required field";
		if (input.especie.length === 0) errors.especie = "Required field";
		if (input.edad.length === 0) errors.edad = "Required field";
		if (input.peso.length === 0) errors.peso = [];
		// if (input.tamano< 1 || input.difficulty > 5)
		// 	errors.difficulty = "The difficulty must be between 1 and 5";
		// if (input.duration < 1 || input.duration > 24)
		// 	errors.duration = "The duration must be between 1hr and 24hr";

		return errors;
	};
	// const navigate = useNavigate();
	// const dispatch = useDispatch();
	// const allCountries = useSelector((state) => state.allCountries);

	const [Mascota, setMascota] = useState({
		nombre: "",
		especie: "",
		edad: 0,
		tamano: 0,
		peso: 0,
		descripción: "",
		foto: "",
		raza: "",
		sexo: "",
	});
	const [errors, setErrors] = useState({});
	console.log(Mascota);

	// useEffect(() => {
	// 	dispatch(getAllCountries());
	// }, [dispatch]);

	const handleInputChange = (e) => {
		setErrors(
			validation({
				...Mascota,
				[e.target.name]: e.target.value,
			})
		);

		setMascota({
			...Mascota,
			[e.target.name]: e.target.value,
		});
	};

	const handleSelectChange = (e) => {
		setMascota({
			...Mascota,
			[e.target.name]: e.target.value,
		});
	};

	


	const handleSubmit = (e) => {
		if (
			!Mascota.nombre ||
			!Mascota.especie ||
			!Mascota.edad ||
			!Mascota.peso ||
			!Mascota.tamano ||
			!Mascota.descripción ||
			!Mascota.foto,
			!Mascota.sexo
		) {
			return alert("Completa todos los campos");
		}
		dispatch(addNewMascota(Mascota));
		dispatch(changePage(1));
		// navigate("/Home");
	};

	return (
		<div className={styles.addMascotaContainer}>
			<div className={styles.addMascotaContent}>
				<h2 className={styles.addMascotaTittle}>
					Agrega una nueva mascota para adoptar
				</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.addNombre}>
						<label className={styles.addMascotaLabel}>Nombre: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='nombre'
							value={Mascota.nombre}
							onChange={handleInputChange}
							placeholder='Agrega el nombre de la mascota'></input>
						<br />
						{errors.nombre && (
							<p className={styles.addMascotaErrors}>{errors.nombre}</p>
						)}
					</div>
					<div className={styles.addEspecie}>
						<label className={styles.addMascotaLabel}>Especie: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='especie'
							value={Mascota.especie}
							onChange={handleInputChange}
							placeholder='Agrega la especie de la mascota'></input>
						<br />
						{errors.especie && (
							<p className={styles.addMascotaErrors}>{errors.especie}</p>
						)}
					</div>
					<div className={styles.addRaza}>
						<label className={styles.addMascotaLabel}>Raza: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='raza'
							value={Mascota.raza}
							onChange={handleInputChange}
							placeholder='Agrega la raza de la mascota'></input>
						<br />
						{errors.raza && (
							<p className={styles.addMascotaErrors}>{errors.raza}</p>
						)}
					</div>
					<div className={styles.addPeso}>
						<label className={styles.addMascotaLabel}>Peso: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='peso'
							value={Mascota.peso}
							onChange={handleInputChange}
							placeholder='Agrega la peso de la mascota'></input>
						<br />
						{errors.peso && (
							<p className={styles.addMascotaErrors}>{errors.peso}</p>
						)}
					</div>
					<div className={styles.addTamano}>
						<label className={styles.addMascotaLabel}>Tamano: </label>
						<select
							onChange={handleSelectChange}
							name='tamano'
							className={styles.addMascotaSelect}>
							<option value=''>Selecciona tamano</option>
							<option value='Pequeño'>Pequeño</option>
							<option value='Mediano'>Mediano</option>
							<option value='Grande'>Grande</option>
						</select>
						<br />
						{errors.tamano && (
							<p className={styles.addMascotaErrors}>{errors.tamano}</p>
						)}
					</div>
					<div className={styles.addGenero}>
						<label className={styles.addMascotaLabel}>Genero: </label>
						<select
							onChange={handleSelectChange}
							name='sexo'
							className={styles.addMascotaSelect}>
							<option value=''>Selecciona sexo</option>
							<option value='Macho'>Macho</option>
							<option value='Hembra'>Hembra</option>
						</select>
						<br />
						{errors.sexo && (
							<p className={styles.addMascotaErrors}>{errors.edad}</p>
						)}
					</div>
					<div className={styles.addEdad}>
						<label className={styles.addMascotaLabel}>Edad: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='edad'
							value={Mascota.edad}
							onChange={handleInputChange}
							placeholder='Agrega la edad de la mascota'></input>
						<br />
						{errors.edad && (
							<p className={styles.addMascotaErrors}>{errors.edad}</p>
						)}
					</div>
					<div className={styles.addimagen}>
						<label className={styles.addMascotaLabel}>Foto: </label>
						<input
							className={styles.addMascotaInput}
							type='text'
							name='foto'
							value={Mascota.foto}
							onChange={handleInputChange}
							placeholder='Agrega la URL de la imagen de la mascota'></input>
						<br />
						{errors.foto && (
							<p className={styles.addMascotaErrors}>{errors.foto}</p>
						)}
					</div>
					<div className={styles.addComentarios}>
						<label className={styles.addMascotaLabel}>Descripción: </label>
						<textarea
							className={styles.addMascotaInput}
							type='text'
							name='descripción'
							value={Mascota.descripción}
							onChange={handleInputChange}
							placeholder='Agrega una breve descripción de la mascota'></textarea>
						<br />
						{errors.descripción && (
							<p className={styles.addMascotaErrors}>{errors.descripción}</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddMascota;
