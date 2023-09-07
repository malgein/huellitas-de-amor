import React from "react";
import { Pagination } from "@nextui-org/react";

export default function Paginated({ petsPerPage, mascotas, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(mascotas / petsPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
      <Pagination
        total={pageNumbers?.length}
        onChange={paginado}
        initialPage={1}
        color={"warning"}
      />
    </div>
  );
}
