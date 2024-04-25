// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDVmky0ufR3BagE9T_AfhhEUY2SAsekG-U',
	authDomain: 'svelte-small-talk.firebaseapp.com',
	projectId: 'svelte-small-talk',
	storageBucket: 'svelte-small-talk.appspot.com',
	messagingSenderId: '103160807017',
	appId: '1:103160807017:web:5cbd5d348b703b8c24acf8',
	databaseURL: 'https://svelte-small-talk-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);
