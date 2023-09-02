import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./Rate.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";

const Rate = ({id, rating}) => {
	const basename = "https://huellitas-de-amor-production.up.railway.app";
	// const basename = "http://localhost:3001";
	// const { casaDeAdopcionId } = useParams();
	console.log(id)
	const endPoint = `${basename}/casaDeAdopcion/${id}`;
	console.log(endPoint)
	const handleRatingChange = async (newRating) => {
		try {
			await axios.post(`${endPoint}/ratings`, { rating: newRating });
		} catch (error) {
			console.error("Error al obtener la data", error);
		}
	};
console.log(rating)
	// 	const [ratingView, setRatingView] = useState(0);
	const ratingProp= useState(rating);
	


	return (
		<div
			className={styles.horizontalRating}
			style={{
				direction: "ltr",
				fontFamily: "sans-serif",
				touchAction: "none",
			}}>
			<Rating
				initialValue={ratingProp}
				// onChange={handleRatingChange}
				onClick={handleRatingChange}
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
