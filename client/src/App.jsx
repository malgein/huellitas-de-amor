import "./App.css";
import { Routes, Route, useLocation, Navigate, Router } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
// import Perfil from "./components/PerfilUser/Perfiluser";
import Perfil from "./components/PerfilUser/Perfiluser";
import AgregarMascota from "./components/AgregarMascota/AgregarMascota";
import FilterMascotas from "./components/FilterButtons/FilterButtons";
import Detail from "./components/Detail/Detail";
import PathRoutes from "./helpers/Routes.helper";
import Footer from "./components/Footer/Footer";
import ModalLogSig from "./components/ModalLogSig/ModalLogSig";

import Registro from "./components/Registro/Registro";
import DashboardSuperAdmin from "./components/Dashboard/DashboardSuperAdmin/DashboardSuperAdmin";
// import Dashboard from "./components/Dashboard/Dashboard";
import DetailUser from "./components/Dashboard/DetailUser";
import DetailHouse from "./components/Dashboard/detailHouse";
import CasaDeAdopcion from "./components/CasaDeAdopcion/CasaDeAdopcion";
import { NuevoRegistro } from "./components/NewRegis/NewRegistro";
import NewLogin from "./components/NewRegis/NewLogin";

import PetsSuper from "./components/Dashboard/DashboardSuperAdmin/PetsSuper";
import UsersSuper from "./components/Dashboard/DashboardSuperAdmin/UsersSuper";
import AdoptionHousesSuper from "./components/Dashboard/DashboardSuperAdmin/AdoptionHousesSuper";
import DonationsSuper from "./components/Dashboard/DashboardSuperAdmin/DonationsSuper";
import Notificaciones from "./components/Notificaciones/Notificaciones";
import DashboardAdmin from "./components/Dashboard/DashboardAdmin/DashboardAdmin";
import AdoptionHousesAdmin from "./components/Dashboard/DashboardAdmin/AdoptionHousesAdmin";
import DonationsAdmin from "./components/Dashboard/DashboardAdmin/DonationsAdmin";
import PetsAdmin from "./components/Dashboard/DashboardAdmin/PetsAdmin";
import UsersAdmin from "./components/Dashboard/DashboardAdmin/UsersAdmin";
import DashboardHouses from "./components/Dashboard/DashboardHouses/DashboardHouses";
import DashboardUser from "./components/Dashboard/DashboardUser/DashboardUser";
import AdoptionHousesUser from "./components/Dashboard/DashboardUser/AdoptionHousesUser";
import DonationsUser from "./components/Dashboard/DashboardUser/DonationsUser";
import PetsUser from "./components/Dashboard/DashboardUser/PetsUser";
import UsersUser from "./components/Dashboard/DashboardUser/UsersUser";
import DonationsHouses from "./components/Dashboard/DashboardHouses/DonationsHouses";
import PetsHouses from "./components/Dashboard/DashboardHouses/PetsHouses";
import { AuthProvider } from "./context/authContext";
import { Auth0Provider } from "@auth0/auth0-react";
import Usuarios from "./components/usuarios/Usuarios";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthorizationAdmin from "./components/ProtectedRoutes/AuthorizationAdmin";
import Error404 from "./components/Error404/Error404";
import AuthorizationUser from "./components/ProtectedRoutes/AuthorizationUser";

function App() {
  const location = useLocation();
  return (
    <>
      <Auth0Provider
        domain="dev-286qgggtxif53ktk.us.auth0.com"
        clientId="6dCIkPHfrA3UNKr7kLlTE96E4dc5j8CW"
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <AuthProvider>
          {location.pathname !== "/home" && <Nav />}
          <Routes>
            {/* <Route path={PathRoutes.LANDINGPAGE} element={<Landing />} /> */}
            <Route path={PathRoutes.HOME} element={<Home />} />
            <Route path={PathRoutes.FILTER} element={<FilterMascotas />} />
            

            <Route path={PathRoutes.DETAIL} element={<Detail />} />
            
            <Route path={PathRoutes.REGISTRO} element={<NuevoRegistro />}></Route>
            <Route path={PathRoutes.LOGIN} element={<NewLogin />}></Route>

            <Route
              path={PathRoutes.CASADETAIL}
              element={<CasaDeAdopcion />}
            ></Route>
            {/* Componente dashboard  */}
            {/* <Route path={PathRoutes.DASHBOARD_SUPER_ADMIN} element={<DashboardSuperAdmin />} /> */}
            <Route
              path={PathRoutes.DASHBOARD_SUPER_ADMIN}
              element={<DashboardSuperAdmin />}
            />
            {/* Subruta de dashboard que gestiona las mascotas para ek admin */}
            <Route
              path={PathRoutes.DASHBOARD_SUPER_ADMIN_MASCOTAS}
              element={<PetsSuper />}
            />
            {/* Subruta de dashboard que gestiona los usuarios para el admin */}
            <Route
              path={PathRoutes.DASHBOARD_SUPER_ADMIN_USUARIOS}
              element={<UsersSuper />}
            />
            {/* Subruta de dashboard que gestiona las casas de adopcion para el admin */}
            <Route
              path={PathRoutes.DASHBOARD_SUPER_ADMIN_CASAS_DE_ADOPCION}
              element={<AdoptionHousesSuper />}
            />
            {/* Subruta de dashboard que gestiona las donaciones para el admin */}
            <Route
              path={PathRoutes.DASHBOARD_SUPER_ADMIN_DONACIONES}
              element={<DonationsSuper />}
            />
            <Route element={<ProtectedRoutes />}>
              <Route path={PathRoutes.PERFIL} element={<Perfil />} />
            </Route>
            <Route element={<AuthorizationAdmin />}>
              <Route
                path={PathRoutes.DASHBOARD_ADMIN}
                element={<DashboardAdmin />}
              />
              <Route
              path={PathRoutes.DASHBOARD_ADMIN_USUARIOS}
              element={<UsersAdmin />}
              />
              <Route
              path={PathRoutes.DASHBOARD_ADMIN_MASCOTAS}
              element={<PetsAdmin />}
              />
              <Route
              path={PathRoutes.DASHBOARD_ADMIN_CASAS_DE_ADOPCION}
              element={<AdoptionHousesAdmin />}
              />
               <Route
              path={PathRoutes.DASHBOARD_ADMIN_DONACIONES}
              element={<DonationsAdmin />}
              />
              <Route path={PathRoutes.AGREGAR} element={<AgregarMascota />} />
            </Route>
            <Route element={<AuthorizationUser/>}>
              <Route path={PathRoutes.DASHBOARD_USERS} element={<DashboardUser />}/>
              <Route path={PathRoutes.DASHBOARD_USERS_ADOPTION_HOUSES} element={<AdoptionHousesUser />}/>
              <Route path={PathRoutes.DASHBOARD_USERS_DONATIONS} element={<DonationsUser />}/>
              <Route path={PathRoutes.DASHBOARD_USERS_USERS} element={<UsersUser />}/>
              <Route path={PathRoutes.DASHBOARD_USERS_MASCOTAS} element={<PetsUser />}/>
            </Route>
          
           

            <Route
              path={PathRoutes.DASHBOARD_HOUSES}
              element={<DashboardHouses />}
            />
            <Route
              path={PathRoutes.DASHBOARD_HOUSES_DONACIONES}
              element={<DonationsHouses />}
            />
            <Route
              path={PathRoutes.DASHBOARD_HOUSES_MASCOTAS}
              element={<PetsHouses />}
            />
            <Route path={PathRoutes.DETAILUSER} element={<DetailUser />} />
            <Route path={PathRoutes.DETAILHOUSE} element={<DetailHouse />} />
            <Route path='*' element={<Error404 />}/>
          </Routes>
          {/* <div>{location.pathname !== "/home" && <Footer />}</div> */}
          <Footer />
        </AuthProvider>
      </Auth0Provider>
    </>
  );
}

export default App;
