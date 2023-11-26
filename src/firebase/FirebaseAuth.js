import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';

export const firebaseConfig = {
    apiKey: "AIzaSyAMaNfDlIpzWU_6lC2ZVzbf8viROFhBepQ",
    authDomain: "medpro-4bf99.firebaseapp.com",
    projectId: "medpro-4bf99",
    storageBucket: "medpro-4bf99.appspot.com",
    messagingSenderId: "1026915450114",
    appId: "1:1026915450114:web:015102a43ef758e7c8161b",
    measurementId: "G-TF06L37TZH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signIn = async (email, password, navigation) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        /* Alert.alert('Đăng nhập thành công!'); */
        navigation.navigate('MainApp', {
            'emailLogin': email
        })
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        /* Alert.alert('Đăng nhập thành công!'); */
        alert('Tài khoản không tồn tại !');
    }
};

export const signUp = async (email, password, navigation) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        /* Alert.alert('Đăng ký thành công'); */
        alert('Đăng ký thành công');
        navigation.navigate('ScreenLogin', {
            'emailSignUp': email
        })
    } catch (error) {
        console.error('Lỗi đăng ký', error);
    }
};