// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpbTVwL9uwVA852BPcYzzF4mRjIVkRao0",
  authDomain: "huellitas-de-amor.firebaseapp.com",
  projectId: "huellitas-de-amor",
  storageBucket: "huellitas-de-amor.appspot.com",
  messagingSenderId: "102127630663",
  appId: "1:102127630663:web:2045b773931540d85bf462",
  measurementId: "G-DMGHGVR5EZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
