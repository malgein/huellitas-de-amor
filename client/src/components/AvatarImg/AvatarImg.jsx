import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import ModalLogSig from "../ModalLogSig/ModalLogSig";
import PathRoutes from "../../helpers/Routes.helper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AvatarImg() {
  const { user, logout } = useAuth();
  const imgProfile = user?.photoURL;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: imgProfile,
            }}
            className="transition-transform"
            description={user?.email}
            name={user?.displayName}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Hola 🐾</p>
            <p className="font-bold">{user?.displayName}</p>
          </DropdownItem>
          <DropdownItem key="analytics" to="/registro">
            <Link to={PathRoutes.HOME}>Inicio</Link>
          </DropdownItem>
          <DropdownItem key="dashboard">
            <Link to={PathRoutes.DASHBOARD}>Panel</Link>
          </DropdownItem>
          {/* <DropdownItem key="configurations">
            <Link to={PathRoutes.REGISTRO}>Registro</Link>
          </DropdownItem> */}
          {user ? (
            <DropdownItem key="logout" color="danger">
              <Link to="#" onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </DropdownItem>
          ) : (
            <DropdownItem>
              <ModalLogSig />
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
