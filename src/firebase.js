import firebase from 'firebase'
// import rxFirebase from 'rx-firebase';
// import { Observable } from 'rxjs';

firebase.initializeApp({
  apiKey: 'AIzaSyDL18gNNjc2GkjiWEb5Fy5uGuNZUzMOjbY',
  authDomain: 'observable-demo.firebaseapp.com',
  databaseURL: 'https://observable-demo.firebaseio.com',
  storageBucket: 'observable-demo.appspot.com',
  messagingSenderId: '965919522600'
})
// console.log(rxFirebase, firebase);
// Add observables to firebase
// rxFirebase.extend(firebase, Observable)

export default firebase
