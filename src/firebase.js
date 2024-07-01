import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "contacts-7682e.firebaseapp.com",
  projectId: "contacts-7682e",
  storageBucket: "contacts-7682e.appspot.com",
  messagingSenderId: "27657431938",
  appId: "1:27657431938:web:e678daf8014015624bfd9b",
  measurementId: "G-L2QXYDKSLV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
