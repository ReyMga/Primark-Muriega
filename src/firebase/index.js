import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAsNj4ziZWzEPPJcivdDZirWGH2Nu0otFE",
    authDomain: "react-coderhouse-primark.firebaseapp.com",
    projectId: "react-coderhouse-primark",
    storageBucket: "react-coderhouse-primark.appspot.com",
    messagingSenderId: "860485924845",
    appId: "1:860485924845:web:61a35ab91155c056a7d9e4",
    measurementId: "G-5G08T9S56L"
});


export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}