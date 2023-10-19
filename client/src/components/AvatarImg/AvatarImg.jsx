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
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../Auth0Out/Auth0Out";
import {useAuth} from '../../context/authContext'

export default function AvatarImg() {
  // const { user, logout } = useAuth();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const {user, loading, isAuthenticated} = useAuth()
  // console.log(loading, isAuthenticated)
  const imgProfile = user?.imagenPerfil;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };
  if(loading) return  <div style={{backgroundImage : 'https://icons8.com/preloaders/preloaders/480/Running%20dog.gif'}}></div>
  return (
    <div className="flex items-center gap-4">
      {/* {console.log(user?.id)} */}
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
            name={user?.nombre}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          {user && (
            <DropdownItem key="profile" className="h-14 gap-2">
                <Link to={`/perfil/${user?.id}`}>
                  <p className="font-bold" onClick={() => console.log(user?.id)}>Hola {user?.nombre}🐾 </p>
                </Link>
              <p className="font-bold">{user?.displayName}</p>
            </DropdownItem>
          )}
          {!user && (
            <DropdownItem key="analytics" to="/registro">
              <Link to={PathRoutes.LOGIN}>Inicia sesion</Link>
            </DropdownItem>
          )}
          {user?.tipoDeUsuario === 'Administrador' ? (
            <DropdownItem key="dashboard">
              <Link to={PathRoutes.DASHBOARD_ADMIN}>Panel</Link>
            </DropdownItem>
          ) : null}

          {user?.tipoDeUsuario === 'Usuario' ? (
            <DropdownItem key="dashboard">
              <Link to={PathRoutes.DASHBOARD_USERS}>Panel</Link>
            </DropdownItem>
          ) : null}

          {user ? (
            <DropdownItem key="logout" color="danger">
              <Link>
                <LogoutButton />
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
