// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDS-pnGx9OlLL0P9S6Jb1fbG3HoTUscZfc",
    authDomain: "clg-slack-1764f.firebaseapp.com",
    projectId: "clg-slack-1764f",
    storageBucket: "clg-slack-1764f.appspot.com",
    messagingSenderId: "657905690873",
    appId: "1:657905690873:web:9cdbc042e47ecdaa321a28",
    measurementId: "G-LQDFP7NN9X"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider  =new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};