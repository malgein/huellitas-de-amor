import padinated from "../Paginated/Paginated";

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1);

  //Guardame el estado guardame cuantas Mascotas guardo por pagina, en este caso 8.
  const [petsPerPage, setPetsPerPage] = useState(8);   
  //El índice de la ultima Mascota por página.
  const indexOfLastPet  = currentPage * petsPerPage;
  //El índice de la primera Mascota por página
  const indexOfFirstPet = indexOfLastPet - petsPerPagePerPage;
  //Se va guardando las mascotas por pagina
 const currentPet = Array.isArray(allPets) 
 ? allPets.slice(indexOfFirstPets, indexOfLastPets) 
 :[allPets];

  return (
    <div>
      <section>
        <h1>Hola este es mi HOME</h1>
      </section>
    </div>
  );
}
