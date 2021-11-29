// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {} from "firebase/database";
import {} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdvqMlRu2FDjhmekP8T0Q-4tVNFE4u3I",
  authDomain: "reacttodolist-d9b95.firebaseapp.com",
  databaseURL: "https://reacttodolist-d9b95-default-rtdb.firebaseio.com",
  projectId: "reacttodolist-d9b95",
  storageBucket: "reacttodolist-d9b95.appspot.com",
  messagingSenderId: "897290124129",
  appId: "1:897290124129:web:a48b57f045e88c92076320"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const auth = app.auth();
// const database = app.database();

// export { auth, database };

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  signUpUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("fire signUpUser", user);
        localStorage.setItem("tokenId", user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  signInUser(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("fire signInUser ", user);
        if (localStorage.getItem("tokenId" !== user.uid)) {
          localStorage.removeItem("tokenId");
          localStorage.setItem("tokenId", user.uid);
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

const FirebaseClass = new Firebase();
export default FirebaseClass;
