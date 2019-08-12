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

db.collection("posts").get().then((snapshop) => {
 console.log(snapshop);
 
});
export default db;