import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFGPSlRPUCvAFpNsme_QirIQwjoOfcNTo",
    authDomain: "todo-app-5ab94.firebaseapp.com",
    projectId: "todo-app-5ab94",
    storageBucket: "todo-app-5ab94.appspot.com",
    messagingSenderId: "273674897686",
    appId: "1:273674897686:web:c3d3c2418a7d052af02837"
};

firebase.initializeApp(firebaseConfig);

export default firebase;