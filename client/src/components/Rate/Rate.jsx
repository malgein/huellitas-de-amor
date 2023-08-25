import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Rating} from 'react-simple-star-rating'
import styles from './Rate.module.css'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Rate = () => {
  
  const [averageRating, setAverageRating] = useState(0);
  const endPoint = "http://localhost:3001/rate/";
  const { casaDeAdopcionId }= useParams();
		const handleRatingChange = async (newRating) => {
			try {
				await axios.post(endPoint, { rating: newRating });
				updateAverageRating();
			} catch (error) {
				console.error("Error al obtener la data", error);
			}
		};

		const updateAverageRating = async () => {
			try {
				const response = await axios.get(endPoint).data.average.toFixed(2);
				setAverageRating(response);
			} catch (error) {
				console.error("Error al obtener la data", error);
			}
		};

		useEffect(() => {
			updateAverageRating();
		}, [casaDeAdopcionId]);
	return (
		<div
			className={styles.horizontalRating} /* Use the correct CSS module class */
			style={{
				direction: "ltr",
				fontFamily: "sans-serif",
				touchAction: "none",
			}}>
			<Rating
				value={averageRating}
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
}

export default Rate;
