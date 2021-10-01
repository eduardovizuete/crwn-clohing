import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDpVgjuQOGU_S2jel2ZTRxTdtlFM5CB3TY",
    authDomain: "crwn-db-a7c76.firebaseapp.com",
    projectId: "crwn-db-a7c76",
    storageBucket: "crwn-db-a7c76.appspot.com",
    messagingSenderId: "411057883323",
    appId: "1:411057883323:web:2030dc209696a4216ec19e",
    measurementId: "G-1K4DF99WXL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;