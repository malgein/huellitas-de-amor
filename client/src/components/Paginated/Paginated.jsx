// import React from "react";

// //Hago destructuring de las variables que necesito
// export default function Paginated ({petsPerPage, mascotas, paginado}){
//     //Inicializo esta variable con un arreglo vacio
//     const pageNumbers = [];

//     //Redondeo hacia arriba el resultado de todos los polemones sobre los pokemones
//     //por página para recorrerlos
//     for (let i =0; i<Math.ceil(mascotas/petsPerPage); i++){
//         //Genero el arreglo de numeros
//         pageNumbers.push(i+1);
//     }

//     return(
//         <div >
//             {
//                 pageNumbers &&
//                 pageNumbers.map(number =>(
//                     <ul key={number}>
//                         <button onClick={() => paginado(number)}>{number}</button>
//                     </ul>
//                     )
//                 )
//             }
//         </div>
//     )

// }

import React from "react";
<<<<<<< HEAD

import {Pagination} from "@nextui-org/react";
=======

import {Pagination} from "@nextui-org/react";


>>>>>>> 6d369e2692971856603e11f2fd18a2f1e8da3451

export default function Paginated({ petsPerPage, mascotas, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(mascotas / petsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
      <Pagination
        total={pageNumbers.length}
        onChange={paginado}
        initialPage={1}
      />
      {/* <div>
        {pageNumbers.map((number) => (
          <ul key={number}>
            <button onClick={() => paginado(number)}>{number}</button>
          </ul>
        ))}
      </div> */}
    </div>
  );
}
