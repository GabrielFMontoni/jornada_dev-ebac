// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCucnvQWBv3OLJjSxRmQrKtvOEBkLwlC1w",
  authDomain: "tiktokjornada-c4d35.firebaseapp.com",
  projectId: "tiktokjornada-c4d35",
  storageBucket: "tiktokjornada-c4d35.appspot.com",
  messagingSenderId: "179083065",
  appId: "1:179083065:web:708a5f50d27e6fac797ae8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
