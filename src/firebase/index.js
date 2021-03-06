import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDA3eW_foYwZyf8FT-kKgkAr-S0ln8S-ks",
    authDomain: "chatkitty-example-42246.firebaseapp.com",
    databaseURL: "https://chatkitty-example-42246-default-rtdb.firebaseio.com",
    projectId: "chatkitty-example-42246",
    storageBucket: "chatkitty-example-42246.appspot.com",
    messagingSenderId: "24927181714",
    appId: "1:24927181714:web:4df813fc1e5d0d3b09ff4b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };