import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import ModalLogSig from "../ModalLogSig/ModalLogSig";
import { useAuth } from "../../context/authContext";
import PathRoutes from "../../helpers/Routes.helper";
import { Link } from "react-router-dom";

export default function AvatarImg() {
  const { user } = useAuth();
  const imgProfile = user?.photoURL;

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
            <Link to={PathRoutes.HOME}>Home</Link>
          </DropdownItem>
          <DropdownItem key="dashboard">
            <Link to={PathRoutes.DASHBOARD}>Dasboard</Link>
          </DropdownItem>
          <DropdownItem key="configurations">
            <Link to={PathRoutes.REGISTRO}>Registro</Link>
          </DropdownItem>
          <DropdownItem>
            <ModalLogSig />
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
