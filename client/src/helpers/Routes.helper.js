const PathRoutes = {
  // LANDINGPAGE: "/",
  HOME: "/",
  FILTER: "/mascotas",
  PERFIL: "/perfil/:id",
  DETAIL: "/detail/:id",
  AGREGAR: "/agregar",
  REGISTRO: "/registro",
  LOGIN: "/login",
  CASADETAIL: "/casaDeAdopcion/:id",
  NOTIFICACION: "/notificaciones",
  DASHBOARD: "/dashboard",

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

  DASHBOARD_USERS: "/dashboard-usuarios/",

  DASHBOARD_USERS_MASCOTAS: "/dashboard-admin/mascotas",

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
};

export default PathRoutes;
