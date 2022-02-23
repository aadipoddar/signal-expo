import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7Dsx7Aak4nggVtu-i-BOFUVPhIdOIWUI",
    authDomain: "signal-expo-5b9a2.firebaseapp.com",
    projectId: "signal-expo-5b9a2",
    storageBucket: "signal-expo-5b9a2.appspot.com",
    messagingSenderId: "63169600362",
    appId: "1:63169600362:web:d9fee6a001e49dd78ee313"
}

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }