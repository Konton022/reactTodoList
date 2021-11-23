// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {} from "firebase/database";
import {} from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdvqMlRu2FDjhmekP8T0Q-4tVNFE4u3I",
  authDomain: "reacttodolist-d9b95.firebaseapp.com",
  databaseURL: "https://reacttodolist-d9b95-default-rtdb.firebaseio.com",
  projectId: "reacttodolist-d9b95",
  storageBucket: "reacttodolist-d9b95.appspot.com",
  messagingSenderId: "897290124129",
  appId: "1:897290124129:web:a48b57f045e88c92076320",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
