import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDHMoE8tqm5dNqbbywWqpADegOdzD2NBZY",
    authDomain: "login-5563c.firebaseapp.com",
    databaseURL: "https://login-5563c.firebaseio.com",
    projectId: "login-5563c",
    storageBucket: "login-5563c.appspot.com",
    messagingSenderId: "312592271944",
    appId: "1:312592271944:web:8586111500945007e7e67d"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;