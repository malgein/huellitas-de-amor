import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
function PetCard({ id, nombre, edad, sexo, descripcion, foto }) {
  //Esto es de favoritos
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favorites);
  const [isFav, setIsFav] = useState(false);

  const handleAddFavorites = () => {
    dispatch(addToFavs(id));
    setIsFav(true);
  };

  const handleRemoveFavorites = () => {
    if (isFav) {
      dispatch(removeFromFavs(id));
      setIsFav(false);
    }
  };

  useEffect(() => {
    setIsFav(favs?.some((fav) => fav.id === id));
  }, [favs, id]);

  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{nombre}</p>
        <small className="text-default-500">{edad} año</small>
        <h4 className="font-bold text-large">{sexo}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={foto}
          width={270}
        />
      </CardBody>

      {/* ESTO ES DE FAVORITOS */}
      <div className={styles.cardfav}>
        {isFav ? (
          <button className={styles.card_btn} onClick={handleRemoveFavorites}>
            ❤️
          </button>
        ) : (
          <button onClick={handleAddFavorites}>💛</button>
        )}
      </div>
    </Card>
  );
}
export default PetCard;
