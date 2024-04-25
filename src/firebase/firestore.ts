import type { FirestoreUser } from '../types/firestore_user';
import type { message } from '../types/message';
import { get, writable } from 'svelte/store';
import { firebaseApp } from '.';
import {
	CollectionReference,
	Timestamp,
	collection,
	doc,
	getDoc,
	getFirestore
} from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { v4 } from 'uuid';

import { getDatabase, ref, push, onValue } from 'firebase/database';

export const firestore = getFirestore(firebaseApp);

export const currentFirestoreUser = writable<FirestoreUser | null>(null);

const userCollection = collection(firestore, 'users') as CollectionReference<FirestoreUser>;

export async function userChanges(user: User | null) {
	if (user === null) {
		currentFirestoreUser.set(null);
		return;
	}

	const userData: FirestoreUser = {
		email: user.email || 'Unknown',
		uid: user.uid
	};

	currentFirestoreUser.set(userData);
}

const messageDatabase = getDatabase(firebaseApp);

export async function sendMessage(content: string) {
	let userid = get(currentFirestoreUser)?.uid;
	let userName = get(currentFirestoreUser)?.email;

	if (userid === null) {
		return;
	}

	const docId = v4();
	push(ref(messageDatabase, 'messages/'), {
		content,
		date: Timestamp.now(),
		uid: docId,
		userName,
		userid
	});
}

export const messagesState = writable<message[]>([], (setState) => {
	const messageRef = ref(messageDatabase, 'messages/');
	onValue(messageRef, (snapshot) => {
		const messages = snapshot.val();

		console.log(messages);

		setState(Object.values(messages).reverse() as message[]);
	});
});

export async function getUserData(userid: string) {
	const userDoc = doc(userCollection, userid);
	return (await getDoc(userDoc)).data();
}
