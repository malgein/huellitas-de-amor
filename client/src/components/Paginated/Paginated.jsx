import React from "react";

//Hago destructuring de las variables que necesito
export default function Padinated ({pokePerPage, allPokemons, paginado}){
    //Inicializo esta variable con un arreglo vacio
    const pageNumbers = [];

    //Redondeo hacia arriba el resultado de todos los polemones sobre los pokemones
    //por página para recorrerlos
    for (let i =0; i<Math.ceil(allPokemons/pokePerPage); i++){
        //Genero el arreglo de numeros
        pageNumbers.push(i+1);
    }

    return(
        <div >
            {
                pageNumbers &&
                pageNumbers.map(number =>(
                    <ul key={number}>
                        <button  className={style.btn} onClick={() => paginado(number)}>{number}</button>
                    </ul>
                    )
                )
            }
        </div>
    )
    

}