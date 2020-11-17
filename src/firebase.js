import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkyTFxR6AD2A26Y93zwaM1DPXPahI-O3E",
  authDomain: "messenger-demo-1348c.firebaseapp.com",
  databaseURL: "https://messenger-demo-1348c.firebaseio.com",
  projectId: "messenger-demo-1348c",
  storageBucket: "messenger-demo-1348c.appspot.com",
  messagingSenderId: "340597231783",
  appId: "1:340597231783:web:9c39b80948a2875b0bcb82"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
