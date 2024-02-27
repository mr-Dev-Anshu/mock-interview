import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth" ; 
import {getFirestore} from "firebase/firestore" 
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCx4JJXlV-Sv9yE-oWN1e-BmzcUTmMGohQ",
  authDomain: "mock-interview-f6ffc.firebaseapp.com",
  projectId: "mock-interview-f6ffc",
  storageBucket: "mock-interview-f6ffc.appspot.com",
  messagingSenderId: "956521351511",
  appId: "1:956521351511:web:d5b20feb7b28db0f9c9612",
  measurementId: "G-91B0BTGQG4",
};

const app = initializeApp(firebaseConfig);
export const auth  = getAuth() ; 
export const db = getFirestore(app) ; 
export const storage = getStorage(app)  ;