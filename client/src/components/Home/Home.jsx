const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
};

return (
  <div className="flex h-screen flex-col ">
    {/* Renderizado de los filtros */}
    <FilterMascotas />
    {/* Renderizado de los ordenamientos */}
    <Sorts />
    {/* {console.log(currentPet)} */}
    <header className="m-0 h-[10%] w-screen bg-white p-0">
      {/* <NavBar /> */}
    </header>
    <div className="m-0 h-full w-screen  flex  bg-white p-0">
      {/* <section className="m-0 h-[100%] w-[20%] bg-gray-300 p-0">
          Ordenamiento
        </section> */}
      <section className="m-0 h-[100%]  w-screen bg-white p-0 flex flex-grow items-center justify-center">
        {/* Cards */}
        {/* {pets.map((pet) => ( */}
        <div className="bg-white w-[90%] h-[90%] ">
          <div className="flex flex-col">
            <Paginated
              petsPerPage={petsPerPage}
              mascotas={mascotas.length}
              paginado={paginado}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-20">
              {currentPet.length === 0 && <h1>No se encontraron resultados</h1>}
              {currentPet.map((mascota) => {
                return (
                  <div key={crypto.randomUUID()}>
                    <PetCard
                      key={mascota.id}
                      id={mascota.id}
                      nombre={mascota.nombre}
                      edad={mascota.edad}
                      sexo={mascota.sexo}
                      descripcion={mascota.descripcion}
                      foto={mascota.foto}
                      peso={mascota.peso}
                    />
                  </div>
                );
              })}
            </div>
            <div className="pt-[20px] flex justify-center">
              {/* <Pagination total={10} initialPage={1} /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
