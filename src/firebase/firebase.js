import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6SZkjNB9O4g6DO-fkWlWwcQQQc6cau1U",
    authDomain: "expensify-ac1d3.firebaseapp.com",
    databaseURL: "https://expensify-ac1d3.firebaseio.com",
    projectId: "expensify-ac1d3",
    storageBucket: "expensify-ac1d3.appspot.com",
    messagingSenderId: "538811921050",
    appId: "1:538811921050:web:d0302c04d6450189f4e523",
    measurementId: "G-Q7DW0SWZ58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.database();

export { firebase, db as default };
