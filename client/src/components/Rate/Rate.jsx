import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import styles from "./Rate.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import axios from "axios";
import { basename } from "../../redux/actions";

const Rate = ({ id, rating, commentsBD }) => {
  const endPoint = `${basename}/casaDeAdopcion/${id}`;
  const endPointComments = `${basename}/casaDeAdopcion/${id}/comments`;

  const comments = useState(commentsBD);
  const [newComment, setNewComment] = useState("");

  const handleRatingChange = async (newRating) => {
    try {
      await axios.post(`${endPoint}/ratings`, { rating: newRating });
    } catch (error) {
      console.error("Error al obtener la data", error);
    }
  };

  console.log(newComment);
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

  console.log(commentsBD);
  return (
    <div
      className={styles.horizontalRating}
      style={{
        direction: "ltr",
        fontFamily: "sans-serif",
        touchAction: "none",
      }}
    >
      <h2>Rating: {rating}/5</h2>
      <Rating
        initialValue={rating}
        onClick={handleRatingChange}
        transition
        allowFraction={true}
        fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
        emptyIcon={
          <MdFavoriteBorder className={styles.horizontalStars} size={25} />
        }
        fillIcon={<MdFavorite className={styles.horizontalStars} size={25} />}
      />
      <div>
        <h3>Comentarios:</h3>
        <ul>
          {comments
            .filter((comment) => comment)
            .map((comment) => (
              <li key={comment.id}>
                <span>{comment.usuario ? comment.usuario : "ANONIMO"}</span>
                <div className={styles.comentario}>{comment.text}</div>
              </li>
            ))}
        </ul>
        <div>
          <textarea
            placeholder="Escribe un comentario..."
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
