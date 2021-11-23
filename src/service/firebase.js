// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
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
  appId: "1:897290124129:web:a48b57f045e88c92076320"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }
  postTask = (key, task) => {
    this.database.ref(`tasks/${key}`).update(task);
  };
}

const FirebaseClass = new Firebase();

export default FirebaseClass;
