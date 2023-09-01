import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getCasaById } from "../../redux/actions";
import Rate from "../Rate/Rate"

export default function CasaDeAdopcion(){
    const {id} = useParams();
    const dispatch =  useDispatch();

    useEffect(() => {
        dispatch(getCasaById(id))
    }, [dispatch, id])

    const casa = useSelector((state) => state.casasDeAdopcion)
    return (
        <div>
            {console.log(casa)}
            <h1>{casa.nombreDeOng}</h1>
            <p>Contáctanos: </p>
            <p>{casa.email}</p>
            <p>{casa.telefono}</p>
            <div><Rate rating={casa.rating} id={id} /></div>
        </div>
    )
}