import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function registerUserFB(email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    throw { status: error?.status, message: error?.message };
  }
}
