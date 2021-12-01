import { initializeApp } from "firebase/app";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzWhn9IEoVsvv96b171ltjNqUJN95ifng",
  authDomain: "uberexpe.firebaseapp.com",
  projectId: "uberexpe",
  storageBucket: "uberexpe.appspot.com",
  messagingSenderId: "1002581181839",
  appId: "1:1002581181839:web:c69c12d5958548c74677fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const storage = getStorage();
const auth = getAuth();
const db = getFirestore();

function createUser(name, fatherName, mobileNumber, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(email);
      console.log(password);
      console.log("User Signed in");
      setDoc(doc(db, "users", user.uid), {
        name,
        fatherName,
        mobileNumber,
        email,
        password,
      })
        .then(() => {
          console.log("Data saved-->")

        })
        .catch((e) => {
          console.log("data not saved-->", e);
        });

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);

      // ..
    });
}

function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    });
}

export { auth, storage, db, createUser, signInUser };
