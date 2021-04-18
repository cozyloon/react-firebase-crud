import firebase from 'firebase';
var firebaseConfig = {
	apiKey: 'AYqLPrMWCnxwDxHyCapmgYTypH3f54XqkLYfxhZ',
	authDomain: 'react-crud-cf7d6.firebaseapp.com',
	databaseURL: 'https://react-crud-cf7d6-default-rtdb.firebaseio.com',
	projectId: 'react-crud-cf7d6',
	storageBucket: 'react-crud-cf7d6.appspot.com',
	messagingSenderId: '1005103048472',
	appId: '1:1005103048472:web:737fce0b355f5179e3e06d',
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
