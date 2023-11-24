// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZXk8c8UHlOZHBqCT2-JzQXOPofyJs-Y0",
  authDomain: "virtualreads-8c8ad.firebaseapp.com",
  projectId: "virtualreads-8c8ad",
  storageBucket: "virtualreads-8c8ad.appspot.com",
  messagingSenderId: "425282848478",
  appId: "1:425282848478:web:b054636bbdc6a1ffa4a44f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
