import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKswRDDXF0S2vp24TiAVaF9EhN2N0Ht-I",
  authDomain: "b-safe-system.firebaseapp.com",
  projectId: "b-safe-system",
  storageBucket: "b-safe-system.appspot.com",
  messagingSenderId: "838808803990",
  appId: "1:838808803990:web:d2b4d439a7bd12223580b7",
  measurementId: "G-DRJ8FRKV0X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
