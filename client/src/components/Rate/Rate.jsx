import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from 'react-router-dom';
import styles from "./Rate.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { basename } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPaw
} from "@fortawesome/free-solid-svg-icons";

const Rate = ({ id, rating }) => {
	const endPointRatings = `${basename}/casaDeAdopcion/${id}/ratings`;
	const endPointComments = `${basename}/casaDeAdopcion/${id}/comments`;
	const [commentsData, setCommentsData] = useState([]);
	const [newComment, setNewComment] = useState("");
	const { casaDeAdopcionId } = useParams();
	const [rate,setRate]= useState(0)
	
	useEffect(() => {
		fetchComments();
		
	}, [commentsData || rating]);

	// useEffect(() => {
	// 	setRate(rating.rating)
	// }, [])

	
const fetchComments = async () => {
	try {
		const response = await axios.get(endPointComments);
		setCommentsData(response.data || []);
	} catch (error) {
		console.error("Error al obtener comentarios:", error);
	}
};


	const handleRatingSubmit = async (newRating) => {
		try {
			await axios.post(`${endPointRatings}`, { rating: newRating });
			setRate(rating)
		} catch (error) {
			console.error("Error al obtener la data", error);
		}
	};
	const handleCommentDelete = async (commentId) => {
		console.log(commentId)
			try {
				await axios.delete(`${endPointComments}/${commentId}`);

				// After successful deletion, update the commentsData state to trigger a re-render
				setCommentsData((prevCommentsData) =>
					prevCommentsData.filter((comment) => comment.id !== commentId)
				);
			} catch (error) {
				console.error("Error deleting comment:", error);
				// Handle any errors, such as displaying an error message to the user
			}
		};
	const handleCommentSubmit = async () => {
		if (newComment.trim() === "") {
			return;
		}

		await axios
			.post(endPointComments, newComment)
			.then(() => {
				setNewComment("");
			})
			.catch((error) => {
				console.error("Error al enviar comentario:", error);
			});
	};

  const handleCommentChange = (e) => setNewComment(e.target.value);

	return (
		<div
			className={styles.horizontalRating}
			style={{
				direction: "ltr",
				fontFamily: "sans-serif",
				touchAction: "none",
			}}>
			<h2>Rating: {!rating ? 0 : rate}/5</h2>
			<Rating
				initialValue={!rate ? 0 : rate}
				onClick={handleRatingSubmit}
				transition
				allowFraction={true}
				fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
				emptyIcon={
					<FontAwesomeIcon
						icon={faPaw}
						className={styles.horizontalStars}
						size={35}
					/>
				}
				fillIcon={
					<FontAwesomeIcon
						icon={faPaw}
						className={styles.horizontalStars}
						size={35}
					/>
				}
			/>
			<div>
				<h3>Comentarios:</h3>
				<ul>
					{commentsData &&
						commentsData
							.filter((comment) => comment)
							.map((comment) => (
								<li key={comment.id}>
									<span>
										{console.log(comment)}
										<span>
											{comment.usuario && comment.usuario.nombre
												? comment.usuario.nombre
												: "ANONIMO"}
										</span>
									</span>
									<div className={styles.comentario}>
										<h3>{comment.texto}</h3>
									</div>
									<button key={comment.id} onClick={()=>handleCommentDelete(comment.id)}>
										Eliminar
									</button>
								</li>
							))}
				</ul>
				<div>
					<textarea
						placeholder='Escribe un comentario...'
						value={newComment}
						onChange={handleCommentChange}
					/>

					<button onClick={handleCommentSubmit}>Enviar Comentario</button>
				</div>
			</div>
		</div>
	);
};

export default Rate;
