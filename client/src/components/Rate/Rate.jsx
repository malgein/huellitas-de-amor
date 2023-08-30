import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./Rate.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";

const Rate = () => {
	// const basename = "https://huellitas-de-amor-production.up.railway.app";
	const basename = "http://localhost:3001";
	const { casaDeAdopcionId } = useParams();
	
	const endPoint = `${basename}/casaDeAdopcion/${casaDeAdopcionId}`;
	
	const handleRatingChange = async (newRating) => {
		try {
			await axios.post(`${endPoint}/ratings`, { rating: newRating });
		} catch (error) {
			console.error("Error al obtener la data", error);
		}
	};

	const [ratingView, setRatingView] = useState(null);

	useEffect(async () => {
		try {
			const response = await axios.get(endPoint).data.rating;
			setRatingView(response);
		} catch (error) {
			console.error("Error al obtener la data", error);
		}
	}, [casaDeAdopcionId]);
	return (
		<div
			className={styles.horizontalRating} 
			style={{
				direction: "ltr",
				fontFamily: "sans-serif",
				touchAction: "none",
			}}>
			<Rating
				value={ratingView}
				onChange={handleRatingChange}
				transition
				fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
				emptyIcon={
					<MdFavoriteBorder className={styles.horizontalStars} size={25} />
				}
				fillIcon={<MdFavorite className={styles.horizontalStars} size={25} />}
			/>
		</div>
	);
};

export default Rate;
