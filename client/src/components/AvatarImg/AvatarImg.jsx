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
  const { user, logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const {usuario, house} = useAuth()
  // console.log(loading, isAuthenticated)
  const imgProfile = usuario?.imagenPerfil;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  // console.log(usuario, house)
  return (
    <div className="flex items-center gap-4">
      {/* {console.log(user?.id)} */}
      <Dropdown placement="bottom-start">
        {user ? (
            <DropdownTrigger>
            <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: user?.picture,
            }}
            className="transition-transform"
            description={user?.email}
            name={user?.given_name}/>
    
          </DropdownTrigger>
        ): house ? (
          <DropdownTrigger>
            <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: house?.foto,
            }}
            className="transition-transform"
            description={house?.email}
            name={house?.nombreDeOng}/>
          </DropdownTrigger>
        ) 
        : (
          <DropdownTrigger>
          <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: imgProfile,
          }}
          className="transition-transform"
          description={usuario?.email}
          name={usuario?.nombre} />
        </DropdownTrigger>
        )}
        <DropdownMenu aria-label="User Actions" variant="flat">
          {usuario && (
            <DropdownItem key="profile" className="h-14 gap-2">
                <Link to={`/perfil/${usuario?.id}`}>
                  <p className="font-bold" onClick={() => console.log(usuario?.id)}>Hola {usuario?.nombre}🐾 </p>
                </Link>
            </DropdownItem>
          )}
          {user && (
            <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold" >Hola {user?.name}🐾 </p>
            </DropdownItem>
          )}

          {house && (
            <DropdownItem key="profile-house" className="h-14 gap-2">
                <Link to={`/perfil-house/${house?.id}`}>
                  <p className="font-bold" onClick={() => console.log(usuario?.id)}>Hola {house?.nombreDeOng}🐾 </p>
                </Link>
            </DropdownItem>
          )}

          {(!usuario && !user && !house) ? (
              <DropdownItem key="analytics" to="/registro">
                <Link to={PathRoutes.LOGIN}>Inicia sesion</Link>
              </DropdownItem>
          ): null }

          {(!usuario && !user && !house) ? (
              <DropdownItem key="register" to="/registro-casa">
                <Link to={PathRoutes.REGISTRO_CASA}>Eres una casa de adopcion?</Link>
              </DropdownItem>
          ): null }

          {usuario?.tipoDeUsuario === 'Administrador' ? (
            <DropdownItem key="dashboard">
              <Link to={PathRoutes.DASHBOARD_ADMIN}>Panel</Link>
            </DropdownItem>
          ) : null}

          {house ? (
            <DropdownItem key="dashboard-house">
              <Link to={PathRoutes.DASHBOARD_HOUSES}>Panel</Link>
            </DropdownItem>
          ) : null}

          {usuario?.tipoDeUsuario === 'Usuario' ? (
            <DropdownItem key="dashboard">
              <Link to={PathRoutes.DASHBOARD_USERS}>Panel</Link>
            </DropdownItem>
          ) : null}

          {usuario || house ? (
            <DropdownItem key="logout" color="danger">
              <Link>
                <LogoutButton />
              </Link>
            </DropdownItem>
          ) : (
            <DropdownItem  >
              <ModalLogSig />
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
