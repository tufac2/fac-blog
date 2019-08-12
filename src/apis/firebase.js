import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5wwhMZQxEyRlrv_NAxp-LCFeuHSQkopc",
  authDomain: "fac-blog.firebaseapp.com",
  databaseURL: "https://fac-blog.firebaseio.com",
  projectId: "fac-blog",
  storageBucket: "fac-blog.appspot.com",
  messagingSenderId: "836935652632",
  appId: "1:836935652632:web:a5811d1588cf84e9"
});

const db = firebaseApp.firestore();


export default db;