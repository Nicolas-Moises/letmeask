import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAepwfLOzWSccql_99X3eulUvn-UVnQq1s",
    authDomain: "letmeask-90385.firebaseapp.com",
    databaseURL: "https://letmeask-90385-default-rtdb.firebaseio.com" ,
    projectId:"letmeask-90385" ,
    storageBucket:"letmeask-90385.appspot.com",
    messagingSenderId:"363008395053" ,
    appId: "1:363008395053:web:ac6b7d592ea4d7601ff5a4"
  };

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const database = firebase.database()