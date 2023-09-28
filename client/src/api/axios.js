import axios from "axios";
//Archivo de configuracion de axios crea una configuracion de axios en forma de una instancia de este para que maneje cookies y para tener un endpoint predeterminado

const instance = axios.create({
  baseURL: 'http://localhost:3001',
	//Permite que axios maneje cookies
  withCredentials: true,
});

export default instance;