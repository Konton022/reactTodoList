// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {} from "firebase/database";
import {} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAdvqMlRu2FDjhmekP8T0Q-4tVNFE4u3I",
  authDomain: "reacttodolist-d9b95.firebaseapp.com",
  databaseURL: "https://reacttodolist-d9b95-default-rtdb.firebaseio.com",
  projectId: "reacttodolist-d9b95",
  storageBucket: "reacttodolist-d9b95.appspot.com",
  messagingSenderId: "897290124129",
  appId: "1:897290124129:web:a48b57f045e88c92076320",
};

const app = initializeApp(firebaseConfig);

// function signUpUser(email, password) {
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(({ user }) => {
//       // Signed in
//       console.log("signUP", user);
//       return user;

//       // ...
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// }
// function signInUser(email, password) {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then(
//       ({ user }) => {
//         console.log("Login", user);
//         return user;
//       }

//       // ...
//     )
//     .catch((error) => {
//       console.log("error", error);
//     });
// }

// export { signUpUser, signInUser };
