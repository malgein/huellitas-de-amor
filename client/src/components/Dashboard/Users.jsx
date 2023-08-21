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


import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUsers, editUser, deleteUsers} from '../../redux/actions'
import Sidebar from './Sidebar'
import Dashboardview from './DashboardView'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import { DeleteIcon } from './DeletIcon'
import {EyeIcon} from "./EyeIcon";
import Swal from 'sweetalert2';


const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
}

const columns = [
  {name: "NOMBRE", uid: "nombre"},
  {name: "NACIONALIDAD", uid: "nacionalidad"},
  {name: "LOCALIZACION", uid: "localizacion"},
  {name: "ACTIONS", uid: "actions"},
];

function Users() {

  const users = useSelector((state) => state.usuarios)

  const dispatch = useDispatch()

  const [editingUsers, setEditingUsers] = useState({}); // Estado local para rastrear edición

  const [userDeleted , setUserDeleted] = useState(true)
  
  useEffect(() => {
    if (userDeleted) {
      dispatch(getUsers());
      setUserDeleted(false); // Restablecer userDeleted después de obtener usuarios
    }
  }, [userDeleted, dispatch]);


  const handleDelete = (id) => {
    Swal.fire({
      title: 'Seguro que quieres eliminar al usuario?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Usuario borrado con exito', '', 'success')
        setUserDeleted(true)
        dispatch(deleteUsers(id))
        console.log(userDeleted)
      } else if (result.isDenied) {
        Swal.fire('El usuario no ha sido borrado', '', 'info')
      }
    })
  }


  const toggleEdit = (userId) => {
    setEditingUsers((prevEditingUsers) => ({
      ...prevEditingUsers,
      [userId]: !prevEditingUsers[userId],
    }));
    console.log(editingUsers)
  };

  const handleSave = (user) => {
    // Lógica para enviar los datos actualizados a editUser
    // Llama a editUser y pasa el objeto `user` con los campos modificados
    dispatch(editUser(user));
    toggleEdit(user.id); // Desactiva el modo de edición después de guardar
    
  };

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "nombre":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "nacionalidad":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.telefono}</p>
          </div>
        );
      case "localizacion":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon  onClick={() =>handleDelete(user.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de los usuarios */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
           {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
						<Dashboardview />
					<div>
            <Table aria-label="Example table with custom cells">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={users}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) =>    <TableCell>
                    {editingUsers[item.id] ? (
                      <div>
                        <input
                          type="text"
                          value={item[columnKey]}
                          onChange={(e) => {
                            const updatedItem = { ...item, [columnKey]: e.target.value };
                            handleSave(updatedItem);
                          }}
                        />
                        <button onClick={() => handleSave(item)}>Guardar</button>
                      </div>
                    ) : (
                      renderCell(item, columnKey, toggleEdit)
                    )}
                  </TableCell>}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
		</div>
  )
}

export default Users