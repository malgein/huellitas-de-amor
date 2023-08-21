import React from 'react'
import Rating from 'react-simple-star-rating'

const Calificacion = () => {
  
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    // Aquí podrías enviar el rating a tu servidor o realizar otras acciones.
  };
  return (
    <div>
        <Rating
        count={5}
        size={24}
        activeColor="#ffd700"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  )
}

export default Calificacion;
