import React, {useEffect, useCallback, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import PathRoutes from "../../../helpers/Routes.helper";
import Sidebar from './Sidebar'
import { getAllHomes, modCompleteHouse, deleteHouses } from '../../../redux/actions'
import {useSelector , useDispatch} from 'react-redux'
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
import {PlusIcon} from "../PlusIcon";
import {VerticalDotsIcon} from "../VerticalDotsIcon";
import {SearchIcon} from "../SearchIcon";
import {ChevronDownIcon} from "../ChevronDownIcon";
// import {columns, users, statusOptions} from "./data";
import {capitalize} from "../Accesory";
import Swal from 'sweetalert2'

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};


const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];
//!Esto muestra las columnas que se ven al inicio
const INITIAL_VISIBLE_COLUMNS = ["nombreDeOng", "nombreDeContacto", "telefono", "actions", "email", "id"];

function AdoptionHouses() {

  const casasDeAdopcion = useSelector(state => state.casasDeAdopcion)

  const dispatch = useDispatch()

  const [houseModified , setHouseModified] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if(houseModified){
      dispatch(getAllHomes())
      setHouseModified(false)
    }
  },[houseModified, dispatch])

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Seguro que quieres eliminar esta casa de adopcion?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('casa de adopcion borrada con exito', '', 'success')
        setHouseModified(!houseModified)
        dispatch(deleteHouses(id))
        console.log(houseModified)
      } else if (result.isDenied) {
        Swal.fire('La casa de adopcion no ha sido borrada', '', 'info')
      }
    })
  }

  const handleNavigate = (id) => {
    navigate(PathRoutes.DETAILHOUSE.replace(":id", id))
  }

  //Funcion que modifica cualquier propiedad de casas de adopcion
  const handleEdit = async(id) => {
    console.log(id)
    const { value: formValues } = await Swal.fire({
      title: 'Introduce los nuevos datos de la casa de adopcion que deseas modificar',
      html:
      'Foto de la casa de adopcion </br>' +
      '<input id="swal-input1"  class="swal2-input" placeholder="Introduce el url de la imagen" required> </br> </br>' +
      'Nombre de la Organizacion </br>' +
      '<input id="swal-input2" class="swal2-input" placeholder="Introduce el nombre..."> </br> </br>' +
      'Nombre del contacto </br>' +
      '<input id="swal-input3" class="swal2-input" placeholder="Nombre de contacto...">  </br> </br>' +
      'Email del contacto </br>' +
      '<input id="swal-input4" class="swal2-input" placeholder="@mail.com"> </br> </br>' +
      'Telefono de la Organizacion</br> ' +
      '<input id="swal-input5" class="swal2-input" placeholder="Telefono de la organizacion"> </br> </br>' +
      'Ubicacion de la casa de adopcion </br >' +
      '<input id="swal-input6" class="swal2-input" placeholder="Ubicacion de la organizacion"> </br> ' ,
      focusConfirm: false,
      preConfirm: () => {

        // if(document.getElementById('swal-input1').value=== ''){
        //   return  Swal.fire(`No puedes dejar el primer campo en blanco`)
        // } else
         return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
          document.getElementById('swal-input5').value,
          document.getElementById('swal-input6').value
        ]
      }
    })
    
    if (formValues[0]!=='' && formValues[1]!=='' && formValues[2]!=='' && formValues[3]!=='' && formValues[4]!=='' && formValues[5]!=='') {
      const result = {
        foto : [`${formValues[0]}`],
        nombreDeOng: formValues[1],
        nombreDeContacto: formValues[2],
        email: formValues[3],
        telefono: formValues[4],
        ubicacion: formValues[5],
      }
      console.log(result)
      // const resultJson = JSON.stringify(result)
      dispatch(modCompleteHouse(id, result))
      setHouseModified(true)
      Swal.fire({
        icon: 'success',
        text:'Modificacion exitosa!'
        }
      )
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo modificar la casa de adopcion',
        text: 'No puedes dejar campos en blanco!',
      })
    }
  }

  const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NOMBRE", uid: "nombreDeOng", sortable: true},
    // {name: "AGE", uid: "age", sortable: true},
    {name: "CONTACTO", uid: "nombreDeContacto", sortable: true},
    {name: "TELEFONO", uid: "telefono", sortable: true},
    {name: "EMAIL", uid: "email"},
    // {name: "UBICACION", uid: "ubicacion", sortable: true},
    {name: "ACTIONS", uid: "actions"},
  ];  

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
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

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...casasDeAdopcion];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombreDeOng.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [casasDeAdopcion, filterValue, statusFilter]);

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
      case "nombreDeOng":
        return (
          <User
          //AQUI va la imagen del usuario o de la casa de adopcion
            avatarProps={{radius: "lg", src: user.foto}}
            description={user.ubicacion}
            name={cellValue}
          >
            {user.ubicacion}
          </User>
        );
      case "nombreDeContacto":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">{user.nombreDeContacto}</p>
          </div>
        );
      case "telefono":
        return (
          <Chip className="capitalize" color={statusColorMap[user.telefono]} size="sm" variant="flat">
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
                <DropdownItem onClick={() => handleNavigate(user.id)}>Detalle</DropdownItem>
                <DropdownItem onClick={() => handleEdit(user.id)}>Editar</DropdownItem>
                //!Aqui se borra y arriba se edita y se detalla
                <DropdownItem  color="danger" className="text-danger" onClick={() => handleDelete(user.id)}>Borrar</DropdownItem>
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

  const onClear = useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

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
              {/* <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
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
              </DropdownMenu> */}
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
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
            {/* <Button color="primary" endContent={<PlusIcon />}>
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {casasDeAdopcion.length} Casas de adopcion</span>
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
    casasDeAdopcion.length,
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
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Previo
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div >
       <div className='flex overflow-scroll '>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
					<div className='mt-10'>
            {/* Soy la gestion de casas de adopcion */}
            {/* {console.log(casasDeAdopcion)} */}
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
            {/* {column.name} */}
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Se encontraron casas de adopcion"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
          </div>
        </div>
      </div>
		</div>
    </div>
  )
}

export default AdoptionHouses