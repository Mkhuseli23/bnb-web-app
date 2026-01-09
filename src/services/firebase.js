import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config here
  apiKey: "AIzaSyCULJc2zDVoag1DfoqizvE5bXDTq-VeQUo",
  authDomain: "jobelabnb.firebaseapp.com",
  projectId: "jobelabnb",
  storageBucket: "jobelabnb.firebasestorage.app",
  messagingSenderId: "343560061848",
  appId: "1:343560061848:web:4a1ad1975278e9c18b61ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
