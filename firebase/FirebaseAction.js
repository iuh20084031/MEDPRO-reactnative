import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firebaseApp } from "./FirebaseConfig";


const firebaseApp = firebaseApp;
const auth = getAuth();
export const handleSignUp = ({email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
export const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

export const onAuthentication = () => {
    
}