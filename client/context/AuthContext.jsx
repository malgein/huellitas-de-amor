import { auth } from "../../server/src/firebase/credenciales";
import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  FacebookAuthProvider,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No esta dentro del provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualUser, setActualUser] = useState([])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  const createNewUser = async(user) =>{
    // console.log(user)
    if(user){
      const newUser= {
        id: user.uid,
        nombre: user.displayName?.split(" ")[0],
        apellido: user.displayName?.split(" ")[1],
        email: user.email,
        password: crypto.randomUUID()
      }
      // console.log(newUser)
  
      // const response = await fetch('http://localhost:3001/usuario/firebase', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(newUser),
      // });
      // setUser(response)
      // console.log(response)

      const dataToModify = { "usuarioId": user.id,
      "tipoDeUsuarioId": 3
    }

      axios.post('http://localhost:3001/usuario/firebase', newUser)
      .then((response) => {
        // Cuando la solicitud es exitosa, guarda la respuesta en la variable newUser
        // setUser([response.data]);
        setActualUser(response.data)
        // console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al crear el usuario:', error);
      });
    }
  }


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
    //  console.log( currentUser );
     createNewUser(currentUser)
      setUser(currentUser);
      // console.log(user)
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);



  return (
    <authContext.Provider
      value={{
        signup,
        login,
        actualUser,
        setActualUser,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        loginWithFacebook,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
