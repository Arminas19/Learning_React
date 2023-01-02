import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByAPZaeYAHcDi403H01g-oYUUbIWqf7_A",
  authDomain: "react-course-84077.firebaseapp.com",
  projectId: "react-course-84077",
  storageBucket: "react-course-84077.appspot.com",
  messagingSenderId: "692331513972",
  appId: "1:692331513972:web:21e60d6664de7cff096921",
  measurementId: "G-TVGPH81E5G"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
