import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyDGM6BCTxewEXQ8gqo3nD2maq4P8Uybaw4",
  authDomain: "bd-crud-vue.firebaseapp.com",
  databaseURL: "https://bd-crud-vue.firebaseio.com",
  projectId: "bd-crud-vue",
  storageBucket: "bd-crud-vue.appspot.com",
  messagingSenderId: "556300220094",
  appId: "1:556300220094:web:cc7be9e37797a2f23590ef"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {
  db
};