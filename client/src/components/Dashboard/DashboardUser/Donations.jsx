import React, {useEffect} from 'react'
import Sidebar from './Sidebar'
import {useSelector, useDispatch} from 'react-redux'
import { getDonations } from '../../../redux/actions'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {donaciones} from "./data";


function Donations() {

  const donaciones = useSelector(state => state.donaciones)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDonations())
  }, [dispatch])

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 12;

  const pages = Math.ceil(donaciones.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return donaciones.slice(start, end);
  }, [page, donaciones]);

  return (
    <div>
          <div className='flex overflow-scroll'>
			<div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          {/* Necesario que para que se vea el sidebar en la gestion de las donaciones */}
					<Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
           {/* Muestra un searchbar, mensajes, nombre y perfil del admin */}
					<div>
            
            {/* {console.log(donaciones)} */}
            <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader >
       

        <TableColumn key="estadoDonacion"  >ESTADO DE DONACION</TableColumn>
        <TableColumn key="fechaDonacion"  >FECHA DE DONACION</TableColumn>
        <TableColumn key="monto" >MONTO</TableColumn>
      
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell className='mt-200'>{getKeyValue(item, columnKey)}</TableCell>}
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

export default Donations