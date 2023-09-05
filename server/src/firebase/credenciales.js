import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpbTVwL9uwVA852BPcYzzF4mRjIVkRao0",
  authDomain: "huellitas-de-amor.firebaseapp.com",
  projectId: "huellitas-de-amor",
  storageBucket: "huellitas-de-amor.appspot.com",
  messagingSenderId: "102127630663",
  appId: "1:102127630663:web:2045b773931540d85bf462",
  measurementId: "G-DMGHGVR5EZ",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
