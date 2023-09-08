import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//iconos de react
import {
  FaTachometerAlt,
  FaChevronRight,
  FaChevronLeft,
  FaMoneyCheckAlt,
  FaBars,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdPets } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { BiSolidHomeHeart } from "react-icons/bi";

const Sidebar = () => {
  //Estdado que participa en el abre/cierra del sidebar
  const [sidebar, setSidebar] = useState(false);

  //funcion que dispara la apertura/cierre del sidebar
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="bg-[#4E73DF] px-[35px]  h-screen">
        <div className="px-[35px] py-[55px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
          <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
            Admin Panel
          </h1>
        </div>
        <div className="flex items-center justify-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer hover:bg-[#3954A2] hover:text-white">
          {/* Link que te lleva al dashboard como tal */}
          <Link to="/dashboard-admin">
            <div className="flex justify-center">
              <FaTachometerAlt color="white" />
            </div>
            <p className="text-[14px] leading-[20px] font-bold text-white">
              Dashboard
            </p>
          </Link>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white">
            <Link to="/dashboard-admin/mascotas">
              <div className="flex items-center gap-[10px]">
                <MdPets color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  MASCOTAS
                </p>
              </div>
            </Link>
            <FaChevronRight color="white" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white">
            <Link to="/dashboard-admin/usuarios">
              <div className="flex items-center gap-[10px]">
                <PiUsersThree color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  USUARIOS
                </p>
              </div>
            </Link>
            <FaChevronRight color="white" />
          </div>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white">
            {/* Link que te lleva a la gestion de casas de adopcion */}
            <Link to="/dashboard-admin/casas-de-adopcion">
              <div className="flex items-center gap-[10px]">
                <AiFillHome color="white" size="24%" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  CASAS DE ADOPCION
                </p>
              </div>
            </Link>
            <FaChevronRight color="white" size="30%" />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer hover:bg-[#3954A2] hover:text-white">
            <Link to="/dashboard-admin/donaciones">
              <div className="flex items-center gap-[10px]">
                <FaMoneyCheckAlt color="white" />{" "}
                <p className="text-[14px] leading-[20px] font-normal text-white">
                  DONACIONES
                </p>
              </div>
            </Link>
            <FaChevronRight color="white" />
          </div>
        </div>
        {/* <div className='pt-[15px]'> */}
        {/* <div className='flex items-center justify-center'> */}
        {/* <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>         
                    </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
