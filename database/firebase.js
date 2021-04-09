import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGM5VKOk2jYK71D820efkkpxuGxqKHLPY",
  authDomain: "b-safe-4fa5f.firebaseapp.com",
  projectId: "b-safe-4fa5f",
  storageBucket: "b-safe-4fa5f.appspot.com",
  messagingSenderId: "756051532845",
  appId: "1:756051532845:web:04e3cbd5fb0f882561eca4",
  measurementId: "G-EJK32EF4M5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
