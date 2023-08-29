<<<<<<< HEAD
// import React, {useState, useEffect} from 'react'
// import {useSelector, useDispatch} from 'react-redux'
// import { getUsers, editUser, deleteUsers} from '../../redux/actions'
// import Sidebar from './Sidebar'
// import Dashboardview from './DashboardView'
// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
// import {EditIcon} from "./EditIcon";
// import { DeleteIcon } from './DeletIcon'
// import {EyeIcon} from "./EyeIcon";
// import Swal from 'sweetalert2'

// function Users() {

//   const usuarios = useSelector((state) => state.usuarios)

//   const dispatch = useDispatch()

//   const [userDeleted , setUserDeleted] = useState(true)

//   useEffect(() => {
//     // if (userDeleted) {
//       dispatch(getUsers());
//       // setUserDeleted(false); // Restablecer userDeleted después de obtener usuarios
//     // }
//   }, [userDeleted, dispatch]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Seguro que quieres eliminar al usuario?',
//       showDenyButton: true,
//       showCancelButton: true,
//       confirmButtonText: 'Si',
//       denyButtonText: `No`,
//     }).then((result) => {
//       /* Read more about isConfirmed, isDenied below */
//       if (result.isConfirmed) {
//         Swal.fire('Usuario borrado con exito', '', 'success')
//         setUserDeleted(!userDeleted)
//         dispatch(deleteUsers(id))
//         console.log(userDeleted)
//       } else if (result.isDenied) {
//         Swal.fire('El usuario no ha sido borrado', '', 'info')
//       }
//     })
//   }

//   return (

//     <div className='flex overflow-scroll'>
// 			<div className="flex overflow-scroll ">
//         <div className="basis-[12%] h-[100vh]">
//           {/* Necesario que para que se vea el sidebar en la gestion de los usuarios */}
// 					<Sidebar />
//         </div>
//         <div className="basis-[88%] border overflow-scroll h-[100vh]">
//            {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
// 						<Dashboardview />
// 					<div>
//           <div className="flex justify-center">
//       <div className="w-full px-4 py-2">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4">Nombre</th>
//               <th className="py-2 px-4">Apellido</th>
//               <th className="py-2 px-4">Nacionalidad</th>
//               <th className="py-2 px-4">Localización</th>
//               <th className="py-2 px-4">Dirección</th>
//               <th className="py-2 px-4">Teléfono</th>
//               <th className="py-2 px-4">Email</th>
//               <th className="py-2 px-4">Borrar Usuario</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usuarios?.map((item) => (
//               <tr key={item.id} className="border-b border-gray-200">
//                 <td className="py-2 px-4">{item.nombre}</td>
//                 <td className="py-2 px-4">{item.apellido}</td>
//                 <td className="py-2 px-4">{item.nacionalidad}</td>
//                 <td className="py-2 px-4">{item.localizacion}</td>
//                 <td className="py-2 px-4">{item.direccion}</td>
//                 <td className="py-2 px-4">{item.telefono}</td>
//                 <td className="py-2 px-4">{item.email}</td>
//                 <td className="py-2 px-4" onClick={() => handleDelete(item.id)}><DeleteIcon /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//           </div>
//         </div>
//       </div>
// 		</div>
//   )
// }

// export default Users

import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, editUser, deleteUsers } from "../../redux/actions";
import Sidebar from "./Sidebar";
import Dashboardview from "./DashboardView";

import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeletIcon";
import { EyeIcon } from "./EyeIcon";
import Swal from "sweetalert2";
=======
import React, {useState, useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUsers, editUser, deleteUsers, modCompleteUser} from '../../redux/actions'
import Sidebar from './Sidebar'
import Swal from 'sweetalert2'
>>>>>>> 1db4cc080286133954ff8ccfdd6154e589acc411
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
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
// import {columns, users, statusOptions} from "./data";
import { capitalize } from "./Accesory";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

// const columns = [
//   {name: "NOMBRE", uid: "nombre"},
//   {name: "NACIONALIDAD", uid: "nacionalidad"},
//   {name: "LOCALIZACION", uid: "localizacion"},
//   {name: "ACTIONS", uid: "actions"},
// ];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];
//!Esto muestra las columnas que se ven al inicio
const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "nombre",
  "apellido",
  "nacionalidad",
  "localizacion",
  "direccion",
  "telefono",
  "acerca",
  "actions",
];

function Users() {
  const usuarios = useSelector((state) => state.usuarios);

  const dispatch = useDispatch();

  const [userModified, setUserModified] = useState(true);

  useEffect(() => {
    //if (userModified) {
      dispatch(getUsers());
      // setUserModified(false); // Restablecer userDeleted después de obtener usuarios
    //}
  }, [userModified, dispatch]);

<<<<<<< HEAD
  const handleEdit = async (id) => {
    console.log(id);
    const { value: formValues } = await Swal.fire({
      title: "Introduce la propiedad y el valor que deseas modificar",
=======
  //Esta funcion puede ser modificada para cambiar cada propiedad del usuario
  // const handleEdit = async(id) => {
  //   console.log(id)
  //   const { value: formValues } = await Swal.fire({
  //     title: 'Introduce la propiedad y el valor que deseas modificar',
  //     html:
  //       '<input id="swal-input1" class="swal2-input">' +
  //       '<input id="swal-input2" class="swal2-input">' ,
  //     focusConfirm: false,
  //     preConfirm: () => {
  //       return [
  //         document.getElementById('swal-input1').value,
  //         document.getElementById('swal-input2').value,
          
  //       ]
  //     }
  //   })
    
  //   if (formValues) {
  //     const result = {[formValues[0]] : formValues[1]}
  //     console.log(result)
  //     // const resultJson = JSON.stringify(result)
  //     dispatch(editUser(id, result))
  //     console.log(userModified)
  //     Swal.fire(`${formValues[0]} cambiado a ${formValues[1]}`)
  //     setUserModified(!userModified)
  //   }
  // }

  const handleEdit = async(id) => {
    console.log(id)
    const { value: formValues } = await Swal.fire({
      title: 'Introduce los nuevos datos del usuario que deseas modificar',
>>>>>>> 1db4cc080286133954ff8ccfdd6154e589acc411
      html:
        'Nombre del usuario ' +
        '<input id="swal-input1" class="swal2-input"> </br> ' +
        'Apellido del usuario' +
        '<input id="swal-input2" class="swal2-input"> </br> ' +
        'Nacionalidad del usuario ' +
        '<input id="swal-input3" class="swal2-input"> </br> ' +
        'Localizacion del usuario ' +
        '<input id="swal-input4" class="swal2-input"> </br> ' +
        'Direccion del usuario ' +
        '<input id="swal-input5" class="swal2-input"> </br> ' +
        'Telefono del usuario ' +
        '<input id="swal-input6" class="swal2-input"> </br> ' +
        'Detalles  del usuario ' +
        '<input id="swal-input7" class="swal2-input"> </br> ' +
        'Email del usuario ' +
        '<input id="swal-input8" class="swal2-input"> </br> ' +
        'Password del usuario ' +
        '<input type="password" id="swal-input9" class="swal2-input"> </br> ' 
        ,
      focusConfirm: false,
      preConfirm: () => {
        return [
<<<<<<< HEAD
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });

    if (formValues) {
      const result = { [formValues[0]]: formValues[1] };
      console.log(result);
      // const resultJson = JSON.stringify(result)
      dispatch(editUser(id, result));
      setUserModified(true);
      Swal.fire(`${formValues[0]} cambiado a ${formValues[1]}`);
=======
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
          document.getElementById('swal-input4').value,
          document.getElementById('swal-input5').value,
          document.getElementById('swal-input6').value,
          document.getElementById('swal-input7').value,
          document.getElementById('swal-input8').value,
          document.getElementById('swal-input9').value,
        ]
      }
    })
    
    if (formValues) {
      const result = {
        nombre: formValues[0],
        apellido: formValues[1],
        nacionalidad: formValues[2],
        localizacion: formValues[3],
        direccion: formValues[4],
        telefono: parseInt(formValues[5]),
        acerca: formValues[6],
        email: formValues[7] ,
        password : formValues[8]
      }
      console.log(result)
      dispatch(modCompleteUser(id, result))
      // dispatch(editUser(id, result))
      // console.log(userModified)
      Swal.fire(`Propiedades del usuario cambiadas exitosamente`)
      setUserModified(!userModified)
>>>>>>> 1db4cc080286133954ff8ccfdd6154e589acc411
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro que quieres eliminar al usuario?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
<<<<<<< HEAD
        Swal.fire("Usuario borrado con exito", "", "success");
        setUserModified(true);
        dispatch(deleteUsers(id));
        console.log(userModified);
=======
        Swal.fire('Usuario borrado con exito', '', 'success')
        dispatch(deleteUsers(id))
        setUserModified(true)
        console.log(userModified)
>>>>>>> 1db4cc080286133954ff8ccfdd6154e589acc411
      } else if (result.isDenied) {
        Swal.fire("El usuario no ha sido borrado", "", "info");
      }
    });
  };

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NOMBRE", uid: "nombre", sortable: true },
    { name: "APELLIDO", uid: "apellido", sortable: true },
    { name: "NACIONALIDAD", uid: "nacionalidad", sortable: true },
    { name: "LOCALIZACION", uid: "localizacion", sortable: true },
    { name: "DIRECCION", uid: "direccion", sortable: true },
    { name: "TELEFONO", uid: "telefono", sortable: true },
    // {name: "EMAIL", uid: "email", sortable: true},
    { name: "ACERCA", uid: "acerca", sortable: true },
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
    let filteredUsers = [...usuarios];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.nombre.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    //Para modificar el estado del usuario
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [usuarios, filterValue, statusFilter]);

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
            description={user.email}
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
          <div className="relative flex justify-end items-center h-screen w-screen ">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions">
                <DropdownItem>Detalle</DropdownItem>
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
      <div className="flex flex-col gap-4 h-screen w-screen">
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
            {/* <Button color="primary" endContent={<PlusIcon />}>
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {usuarios.length} Usuarios
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
    usuarios.length,
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
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previo
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
<<<<<<< HEAD
    <div>
      <div className="flex overflow-scroll ">
        <div className="flex overflow-scroll ">
          <div className="basis-[12%] h-[100vh]">
            {/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
            <Sidebar />
          </div>
          <div className="basis-[88%] border overflow-scroll h-[100vh]">
            {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
            <Dashboardview />
            <div>
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
                <TableBody
                  emptyContent={"No Se encontraron Usuarios"}
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
=======
    <div >
       <div className='flex overflow-scroll '>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las casas de adopcion */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
						
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
      <TableBody emptyContent={"No Se encontraron Usuarios"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
>>>>>>> 1db4cc080286133954ff8ccfdd6154e589acc411
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
