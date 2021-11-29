import firebase from 'firebase'
// require('@firebase/firestore')
// import "firebase/auth";

  var firebaseConfig = {

  apiKey: "AIzaSyBjZQVgiRuMyFA50dDdq0Z6iHkXtDNMTVs",
  authDomain: "p-73-20ab6.firebaseapp.com",
  projectId: "p-73-20ab6",
  storageBucket: "p-73-20ab6.appspot.com",
  messagingSenderId: "330695962014",
  appId: "1:330695962014:web:dabbc07cbeea98bed77a8f"
  
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

