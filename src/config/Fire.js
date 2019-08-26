import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
// import "@firebase/firestore"; // 👈 Don't forget this!

const DB_CONFIG = {
    apiKey: "AIzaSyCE66vF8RaE4LVfbBn-AVbgz6rATvjw1F0",
    authDomain: "retreatonnichols.firebaseapp.com",
    databaseURL: "https://retreatonnichols.firebaseio.com",
    projectId: "retreatonnichols",
    storageBucket: "retreatonnichols.appspot.com",
    messagingSenderId: "511342940593",
    appId: "1:511342940593:web:3b1649b41579fdba"
  };
  
  const fire = firebase.initializeApp(DB_CONFIG);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, fire, firestore as default };