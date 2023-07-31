import {getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBnZQrAhxajTlt0Pnj4IhsosdoKDZ9GyU",
  authDomain: "booking-project-48e5a.firebaseapp.com",
  projectId: "booking-project-48e5a",
  storageBucket: "booking-project-48e5a.appspot.com",
  messagingSenderId: "966413748056",
  appId: "1:966413748056:web:b940d4ee3c0fb9bc41072d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth, db};