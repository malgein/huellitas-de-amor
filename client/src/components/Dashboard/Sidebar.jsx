import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
//iconos de react
import { FaTachometerAlt, FaChevronRight, FaChevronLeft, FaMoneyCheckAlt, FaBars} from "react-icons/fa"
import {MdPets} from 'react-icons/md' 
import {PiUsersThree} from 'react-icons/pi'
import {BiSolidHomeHeart} from 'react-icons/bi'


const Sidebar = () => {
	//Estdado que participa en el abre/cierra del sidebar
	const [sidebar, setSidebar] = useState(false);

	//funcion que dispara la apertura/cierre del sidebar
	const showSidebar = () => setSidebar(!sidebar);

    return (
			<div>
				<FaBars onClick={showSidebar}/>
        <div className={sidebar ? 'bg-[#4E73DF] px-[25px]  h-screen':' left-0 transition duration-350' }>
            <div className='px-[15px] py-[50px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer hover:bg-[#3954A2] hover:text-white'>
							{/* Link que te lleva al dashboard como tal */}
							<Link to='/dashboard'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
							</Link>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white'>
                    <div className='flex items-center gap-[10px]' >
											{/* Link que te lleva  a la gestion de mascotas */}
											<Link to='/dashboard/mascotas'>
                        <MdPets color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>MASCOTAS</p>
											</Link>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white'>
									{/* Link que te lleva a la gestion de usuarios */}
									<Link to='/dashboard/usuarios'>
                    <div className='flex items-center gap-[10px]'>
                        <PiUsersThree color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>USUARIOS</p>
                    </div>
									</Link>
                    <FaChevronRight color='white' />
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white'>
									{/* Link que te lleva a la gestion de casas de adopcion */}
									<Link to='/dashboard/casas-de-adopcion'>
                    <div className='flex items-center gap-[10px]'>
                        <BiSolidHomeHeart color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>CASAS DE ADOPCION</p>
                    </div>
									</Link>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer hover:bg-[#3954A2] hover:text-white'>
								{/* Link que te lleva a la gestion de las donaciones */}
									<Link to='/dashboard/donaciones'>
                    <FaMoneyCheckAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>DONACIONES</p>
									</Link>
                </div>
								<FaChevronRight color='white' />
            </div>
            <div className='pt-[15px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
											{/* Cursor que cierra/abre el sidebar */}
                        <FaChevronLeft color='white' onClick={showSidebar}/>
                    </div>
                </div>
            </div>
        </div>
				<Outlet />
			</div>
    )
}

export default Sidebar