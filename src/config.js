import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIQmLRHx97URyHjQJmf8tYk4UNklkOZdg",
    authDomain: "authorbook-app.firebaseapp.com",
    databaseURL: "https://authorbook-app.firebaseio.com",
    projectId: "authorbook-app",
    storageBucket: "authorbook-app.appspot.com",
    messagingSenderId: "683685829035",
    appId: "1:683685829035:web:71a13c89cc48baf98fdaee",
    measurementId: "G-LBCWFN3JYV"
  };

//const app = firebase.initializeApp(firebaseConfig);
//export const db = app.database();

firebase.initializeApp(firebaseConfig);
export default firebase;