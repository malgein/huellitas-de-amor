const PathRoutes = {
  // LANDINGPAGE: "/",
  HOME: "/",
  FILTER: "/mascotas",
  //Perfil de usuario
  PERFIL: "/perfil/:id",
  //Perfil de casa de adopcion
  PERFIL_HOUSE: 'perfil-house/:id',
  DETAIL: "/detail/:id",
  //Agregar mascotas siendo admin
  AGREGAR: "/agregar",
  AGREGAR_MASCOTA_HOUSE: "/mascota-house",
  REGISTRO: "/registro",
  LOGIN: "/login",
  CASADETAIL: "/casaDeAdopcion/:id",
  NOTIFICACION: "/notificaciones",
  DASHBOARD: "/dashboard",
  //Ruta para registro/login de las casas de adopcion
  REGISTRO_CASA: "/registro-casa",


  DASHBOARD_SUPER_ADMIN: "dashboard-super-admin",
  //Sub ruta para el dashboard de mascotas
  DASHBOARD_SUPER_ADMIN_MASCOTAS: "/dashboard-super-admin/mascotas",
  //Sub ruta para el dashboard de usuarios
  DASHBOARD_SUPER_ADMIN_USUARIOS: "/dashboard-super-admin/usuarios",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_SUPER_ADMIN_CASAS_DE_ADOPCION:
    "/dashboard-super-admin/casas-de-adopcion",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_SUPER_ADMIN_DONACIONES: "/dashboard-super-admin/donaciones",
USUARIOS:"/usuarios",
  DASHBOARD_USERS: "/dashboard-usuarios/",
  DASHBOARD_USERS_ADOPTION_HOUSES: "/dashboard-usuarios/casas-de-adopcion",
  DASHBOARD_USERS_USERS: "/dashboard-usuarios/usuarios",
  DASHBOARD_USERS_DONATIONS: "/dashboard-usuarios/donaciones",
  DASHBOARD_USERS_MASCOTAS: "/dashboard-usuarios/mascotas",

  DASHBOARD_HOUSES: "/dashboard-casas-de-adopcion/",
  DASHBOARD_HOUSES_MASCOTAS: "/dashboard-casas-de-adopcion/mascotas",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_HOUSES_DONACIONES: "/dashboard-casas-de-adopcion/donaciones",

  DASHBOARD_ADMIN: "/dashboard-admin/",
  DASHBOARD_ADMIN_MASCOTAS: "/dashboard-admin/mascotas",
  //Sub ruta para el dashboard de usuarios
  DASHBOARD_ADMIN_USUARIOS: "/dashboard-admin/usuarios",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_ADMIN_CASAS_DE_ADOPCION: "/dashboard-admin/casas-de-adopcion",
  //subruta para el dashboard de casas de adopcion
  DASHBOARD_ADMIN_DONACIONES: "/dashboard-admin/donaciones",

  DETAILUSER: "/detail-user/:id",
  DETAILHOUSE: "/detail-house-of-adoption/:id",
  ERROR404: '/error'
};

export default PathRoutes;
