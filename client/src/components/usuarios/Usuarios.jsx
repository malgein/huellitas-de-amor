import React, { useEffect, useState } from "react";
import axios from "axios";
import {basename} from '../../redux/actions'
export default function Usuarios() {
	const [usuarios, setUsuarios] = useState([]);

	useEffect(() => {
		// Make an API call when the component mounts
		axios
			.get(`${basename}/usuarios`)
			.then((response) => {
				// Assuming your API returns an array of usuarios
				setUsuarios(response.data);
			})
			.catch((error) => {
				console.error("Error fetching usuarios:", error);
			});
	}, []); // Empty dependency array to run the effect once when the component mounts

	return (
		<div>
			{usuarios.map((usuario) => (
				<h1 key={usuario.id}>{usuario.nombre}</h1>
			))}
		</div>
	);
}
