import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_FIREBASE_API_KEY"],
  authDomain: "samer-gooogle.firebaseapp.com",
  projectId: "samer-gooogle",
  storageBucket: "samer-gooogle.appspot.com",
  messagingSenderId: "1043802319565",
  appId: "1:1043802319565:web:b04819ba0c4ef1b3935784",
  measurementId: "G-W0QPKMFCKR",
};

initializeApp(config);

const db = getFirestore();
