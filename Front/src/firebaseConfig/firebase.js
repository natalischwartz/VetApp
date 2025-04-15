import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";



//permisos
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializo Firebase
const app = initializeApp(firebaseConfig);
// Inicializo Firebase Authentication
export const auth = getAuth(app);
//Inicializo Firebase Firestore
export const db = getFirestore(app);
