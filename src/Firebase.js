import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyARHcwFG8eTsS6agFYz2Fjn_2EJR-swEtE",
    authDomain: "tinder-4ae7f.firebaseapp.com",
    projectId: "tinder-4ae7f",
    storageBucket: "tinder-4ae7f.appspot.com",
    messagingSenderId: "297570354989",
    appId: "1:297570354989:web:d6bf18e01feb9d074635a4",
    measurementId: "G-HN9T89KGN1"
  };


  const firebaseapp=firebase.initializeApp(firebaseConfig);

  const db=firebaseapp.firestore();


  export default db;