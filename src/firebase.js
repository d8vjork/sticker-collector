import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7083cEo-UN4HGEahaj6Fq6LXVonPxcLM",
  authDomain: "tgstickercollector.firebaseapp.com",
  databaseURL: "https://tgstickercollector.firebaseio.com",
  projectId: "tgstickercollector",
  storageBucket: "tgstickercollector.appspot.com",
  messagingSenderId: "1061131254788"
};

firebase.initializeApp(config);

export default firebase;
