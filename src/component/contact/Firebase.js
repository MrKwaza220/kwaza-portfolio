import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBWnIZgCLkL1j886muLTdK0rl5BLWAEwsM",
        authDomain: "my-contact-form-3e988.firebaseapp.com",
        projectId: "my-contact-form-3e988",
        storageBucket: "my-contact-form-3e988.appspot.com",
        messagingSenderId: "947073747087",
        appId: "1:947073747087:web:f1353d33f9c552717508fa"

})

var db = firebaseApp.firestore();

export { db }