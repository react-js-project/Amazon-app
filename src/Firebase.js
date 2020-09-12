import Firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwMe_ShRk4LgoJ6WDYOU0Q_ZiZ2zcXRjI",
    authDomain: "app-vaibhav.firebaseapp.com",
    databaseURL: "https://app-vaibhav.firebaseio.com",
    projectId: "app-vaibhav",
    storageBucket: "app-vaibhav.appspot.com",
    messagingSenderId: "411120217142",
    appId: "1:411120217142:web:98757c1cbf7abe7d18bc97",
    measurementId: "G-0DFFRHDKTE"
  };

  const firebaseApp=Firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebaseApp.auth();

  export {db,auth};