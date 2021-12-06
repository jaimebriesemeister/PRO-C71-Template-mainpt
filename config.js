import firebase from "firebase";
require("@firebase/firestore");

//Cole sua Configuração do Firebase aqui





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


