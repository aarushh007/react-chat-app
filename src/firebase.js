import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCmh3qDc0s7i6_mexeHB_ZeWWyGoTZiZu8",
    authDomain: "dash-chat-app.firebaseapp.com",
    projectId: "dash-chat-app",
    storageBucket: "dash-chat-app.appspot.com",
    messagingSenderId: "650017140601",
    appId: "1:650017140601:web:c17b3a8359cc289ff109a8",
    measurementId: "G-W3KB46XPYD"
});

const db = firebaseApp.firestore();

export default db;