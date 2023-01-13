import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAB4yWo2O7k8Ns0K7nLoF5ZSMVLRTqiBgY",
    authDomain: "cursoreactudemy-3bb8c.firebaseapp.com",
    projectId: "cursoreactudemy-3bb8c",
    storageBucket: "cursoreactudemy-3bb8c.appspot.com",
    messagingSenderId: "807090493212",
    appId: "1:807090493212:web:5145af760d1e50f8838cd9",
    measurementId: "G-3KBH2DDQV1"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)

  export {db}