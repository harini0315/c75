import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDc7XkRwNPZA0QHFVlNHKlJaznEeP3QzNE",
  authDomain: "elibrary-f62e3.firebaseapp.com",
  projectId: "elibrary-f62e3",
  storageBucket: "elibrary-f62e3.appspot.com",
  messagingSenderId: "142074055662",
  appId: "1:142074055662:web:0c3c42d722ab4c5456dcff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
