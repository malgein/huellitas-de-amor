import auth from "../firebase/credenciales";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default async function loginGoogleFB() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
