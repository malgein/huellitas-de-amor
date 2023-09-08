import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PathRoutes from "../../../helpers/Routes.helper";
import Sidebar from './Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { getMascotas, deletePets, modCompletePet, editPets } from '../../../redux/actions'
import Swal from 'sweetalert2'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../VerticalDotsIcon";
import { SearchIcon } from "../SearchIcon";
import { ChevronDownIcon } from "../ChevronDownIcon";
// import {columns, users, statusOptions} from "./data";
import { capitalize } from "../Accesory";
import { PlusIcon } from "../PlusIcon";

const statusColorMap = {
  Macho: "success",
  Hembra: "danger",
  // vacation: "warning",
};
//esto es para darle color al fondo de los estados(Nacho)
const estadoColorMap = {
  Adoptado: "danger", // Rojo
  "En adopción": "success", // Verde
  "En Proceso": "warning", // Amarillo
};

//Aqui piuedo colocar la disponibilidad de la mascota adoptada, en busca de un hogar
const statusOptions = [
  { name: "Adoptado", uid: "Adoptado" },
  { name: "En adopción", uid: "En adopción" },
  { name: "En Proceso", uid: "En Proceso" },
];
//!Esto muestra las columnas que se ven al inicio
const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "nombre",
  "raza",
  "sexo",
  "edad",
  "tamano",
  "peso",
  "estado",
  "actions",
];

function PetsAdmin() {
  const mascotas = useSelector((state) => state.mascotas);

  const dispatch = useDispatch();

  const [petModified, setPetModified] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (petModified) {
      dispatch(getMascotas());
      setPetModified(false);
    }
  }, [dispatch, petModified]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro que quieres eliminar a la mascota?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("mascota borrada con exito", "", "success");
        setPetModified(!petModified);
        dispatch(deletePets(id));
        console.log(petModified);
      } else if (result.isDenied) {
        Swal.fire("La mascota no ha sido borrada", "", "info");
      }
    });
  };

  // const handleEdit = async(id) => {
  //   console.log(id)
  //   const { value: formValues } = await Swal.fire({
  //     title: 'Introduce la propiedad y el valor que deseas modificar',
  //     html:
  //       '<input id="swal-input1" class="swal2-input">' +
  //       '<input id="swal-input2" class="swal2-input">',
  //     focusConfirm: false,
  //     preConfirm: () => {
  //       return [
  //         document.getElementById('swal-input1').value,
  //         document.getElementById('swal-input2').value
  //       ]
  //     }
  //   })

  //   if (formValues) {
  //     const result = {[formValues[0]] : formValues[1]}
  //     console.log(result)
  //     // const resultJson = JSON.stringify(result)
  //     dispatch(editPets(id, result))
  //     setPetModified(true)
  //     Swal.fire(`${formValues[0]} cambiado a ${formValues[1]}`)
  //   }
  // }

  const handleNavigate = (id) => {
    navigate(PathRoutes.DETAIL.replace(":id", id));
  };

  const handleEdit = async (id) => {
    console.log(id);
    const { value: formValues } = await Swal.fire({
      title: "Introduce los nuevos datos de la mascota que deseas modificar",
      html:
        "Nombre de la mascota" +
        '<input id="swal-input1" class="swal2-input"> </br> ' +
        "Edad de la mascota" +
        '<input id="swal-input2" class="swal2-input"> </br> ' +
        "Sexo de la mascota </br>" +
        "</br>" +
        '<input type="radio" id="swal-input3" value="Macho"  name="sexo"> ' +
        "Macho " +
        '<input type="radio" id="swal-input4" value="Hembra" name="sexo">  ' +
        "Hembra </br>" +
        "</br>" +
        "Descripcion de la mascota " +
        '<input id="swal-input5" class="swal2-input"> </br> ' +
        "Url de la foto de la mascota " +
        '<input id="swal-input6" class="swal2-input"> </br> ' +
        "Tamaño de la mascota </br>" +
        "</br>" +
        '<input type="radio" id="swal-input7" value="Pequeño" name="tamano"> ' +
        "Pequeño " +
        '<input type="radio" id="swal-input8" value="Mediano" name="tamano"> ' +
        "Mediano " +
        '<input type="radio" id="swal-input9" value="Grande" name="tamano">  ' +
        "Grande </br>" +
        "</br>" +
        "Raza de la mascota " +
        '<input id="swal-input10" class="swal2-input"> </br> ' +
        "Peso de la mascota " +
        '<input id="swal-input11" class="swal2-input"> </br> ',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3"),
          document.getElementById("swal-input4"),
          document.getElementById("swal-input5").value,
          document.getElementById("swal-input6").value,
          document.getElementById("swal-input7"),
          document.getElementById("swal-input8"),
          document.getElementById("swal-input9"),
          document.getElementById("swal-input10").value,
          document.getElementById("swal-input11").value,
        ];
      },
    });

    const result = {
      nombre: formValues[0],
      edad: parseInt(formValues[1]),
      sexo: formValues[2].checked ? formValues[2].value : formValues[3].value,
      descripcion: formValues[4],
      foto: [`${formValues[5]}`],
      tamano: formValues[6].checked
        ? formValues[6].value
        : formValues[7].checked
        ? formValues[7].value
        : formValues[8].checked && formValues[8].value,
      raza: formValues[9],
      peso: parseFloat(formValues[10]),
    };

    if (
      formValues[0] === "" ||
      formValues[1] === "" ||
      formValues[2] === "" ||
      formValues[3] === "" ||
      formValues[4] === "" ||
      formValues[5] === "" ||
      formValues[6] === "" ||
      formValues[7] === "" ||
      formValues[8] === "" ||
      formValues[9] === "" ||
      formValues[10] === ""
    ) {
      // console.log(formValues[3].value)
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar la mascota",
        text: "No puedes dejar campos en blanco!",
      });
    } else if (isNaN(result.edad)) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar la mascota",
        text: "La edad de la mascota debe ser expresada en numeros enteros",
      });
    } else if (isNaN(result.peso)) {
      Swal.fire({
        icon: "error",
        title: "No se pudo modificar la mascota",
        text: "El peso de la mascota debe ser expresada en numeros enteros",
      });
    } else {
      console.log(result);
      dispatch(modCompletePet(id, result));

      // console.log(userModified)
      Swal.fire({
        icon: "success",
        text: "Modificacion exitosa!",
      });
      setPetModified(!petModified);
    }
  };
  //Funcion para el cambio de estado de la mascota
  const cambioDeEstado = (id, currentStatus) => {
    const newStatus = currentStatus === "Adoptado" ? "En adopción" : "Adoptado";
    dispatch(editPets(id, { estado: newStatus }));
    setPetModified(true);
    Swal.fire(
      "Estado actualizado",
      `La mascota ha sido ${newStatus}`,
      "success"
    );
  };

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NOMBRE", uid: "nombre", sortable: true },
    { name: "RAZA", uid: "raza", sortable: true },
    { name: "SEXO", uid: "sexo", sortable: true },
    { name: "EDAD", uid: "edad", sortable: true },
    { name: "PESO", uid: "peso", sortable: true },
    // {name: "STATUS", uid: "status", sortable: true},
    { name: "ESTADO", uid: "estado", sorteable: true }, //hice esta linea para que se vea en la tabla (nacho)
    { name: "TAMANO", uid: "tamano", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ];

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...mascotas];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    //Para modificar el estado de la mascota
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.estado)
      );
    }

    return filteredUsers;
  }, [mascotas, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "nombre":
        return (
          <User
            //aqui va la foto de la mascota
            avatarProps={{ radius: "lg", src: user.foto }}
            description={user.nombre}
            name={cellValue}
          >
            {user.id}
          </User>
        );
      case "raza":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.raza}
            </p>
          </div>
        );
      //esto lo puse para darle el Estilo al estado (Nacho)
      case "estado":
        return (
          <div className="flex items-center gap-2">
            <Chip
              className="capitalize"
              color={estadoColorMap[cellValue]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
            <Button
              size="mini"
              onClick={() => cambioDeEstado(user.id, cellValue)}
            >
              {cellValue === "Adoptado" ? "En adopción" : "Adoptado"}
            </Button>
          </div>
        );

      case "sexo":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.sexo]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2 ">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem onClick={() => handleNavigate(user.id)}>
                  Detalle
                </DropdownItem>
                <DropdownItem onClick={() => handleEdit(user.id)}>
                  Editar
                </DropdownItem>
                //!Aqui se borra y arriba se edita y se detalla
                <DropdownItem
                  color="danger"
                  className="text-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Borrar
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Busca por nombre..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                    {/* {console.log(column)} */}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Link to="/agregar">
              <Button color="primary" endContent={<PlusIcon />}>
                Agregar nueva mascota
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {mascotas.length} Mascotas
          </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    mascotas.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} de ${filteredItems.length} seleccionado`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div>
      <div className="flex  ">
        <div className="flex  ">
          <div className="basis-[12%] h-[100vh]">
            {/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
            <Sidebar />
          </div>
          <div className="basis-[88%] border  h-[100vh]">
            {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
            <div className="mt-10">
              <div className="flex">
                {/* {mascotas.map((mascota) => (
                  <div
                    key={mascota.id}
                    className={`p-4 rounded-lg shadow-md mb-4 ${
                      // Aplicar colores de fondo según el estado de la mascota
                      mascota.estado === "en Adopción"
                        ? "bg-blue-200"
                        : mascota.estado === "en proceso"
                        ? "bg-yellow-200"
                        : mascota.estado === "adoptado"
                        ? "bg-green-200"
                        : "bg-gray-200" // Color predeterminado si el estado no coincide
                    }`}>
                          </div>
    ))} */}
              </div>
            </div>

            <Table
              aria-label="Example table with custom cells, pagination and sorting"
              isHeaderSticky
              bottomContent={bottomContent}
              bottomContentPlacement="outside"
              classNames={{
                wrapper: "max-h-[382px]",
              }}
              selectedKeys={selectedKeys}
              selectionMode="multiple"
              sortDescriptor={sortDescriptor}
              topContent={topContent}
              topContentPlacement="outside"
              onSelectionChange={setSelectedKeys}
              onSortChange={setSortDescriptor}
            >
              <TableHeader columns={headerColumns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                    allowsSorting={column.sortable}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody
                className="pt-56"
                emptyContent={"No se encontraron Mascotas"}
                items={sortedItems}
              >
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetsAdmin;
