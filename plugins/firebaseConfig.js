import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyCFqxZjpVuzxYmKbF0G4y2YweLOv2-_G6k",
        authDomain: "nuxtstore-5986d.firebaseapp.com",
        databaseURL: "https://nuxtstore-5986d.firebaseio.com",
        projectId: "nuxtstore-5986d",
        storageBucket: "nuxtstore-5986d.appspot.com",
        messagingSenderId: "427113128936",
        appId: "1:427113128936:web:d7a787c61f3f3944f27a5d",
        measurementId: "G-VY51WKXGDT"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()