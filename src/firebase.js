import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAStBChEKaGzwaBhJSY6dsMYBXFgRPWl2o",
    authDomain: "svelte-starter-ccff2.firebaseapp.com",
    databaseURL: "https://svelte-starter-ccff2.firebaseio.com",
    projectId: "svelte-starter-ccff2",
    storageBucket: "svelte-starter-ccff2.appspot.com",
    messagingSenderId: "365885259161",
    appId: "1:365885259161:web:718657e35b6ed11b7fe708",
    measurementId: "G-D14ZWVEE5E"
}

console.log(firebase);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();