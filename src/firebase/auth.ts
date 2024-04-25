import {
	type User,
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	setPersistence,
	browserSessionPersistence
} from '@firebase/auth';
import { firebaseApp } from '.';
import { writable } from 'svelte/store';
import { userChanges } from './firestore';

export const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);

export const authState = writable<User | null>(null);

auth.onAuthStateChanged((user) => {
	authState.set(user);

	userChanges(user);
});

export const createUser = async (email: string, password: string) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		return userCredential;
	} catch (error) {
		console.error(error);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return userCredential;
	} catch (error) {
		console.error(error);
	}
};
