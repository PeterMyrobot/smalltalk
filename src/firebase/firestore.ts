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

import {
	getDatabase,
	ref,
	push,
	onValue,
	orderByKey,
	query,
	limitToLast,
	update,
	orderByChild,
	equalTo,
	endBefore
} from 'firebase/database';

export const firestore = getFirestore(firebaseApp);
export const messages = writable<message[]>([]);
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

	const messageRef = ref(messageDatabase, 'messages/');
	onValue(messageRef, (snapshot) => {
		const messages = snapshot.val();

		messagesState.set(
			Object.entries(messages)
				.map(([k, v]) => {
					return { uid: k, ...v };
				})
				.reverse() as message[]
		);
	});
}
const messageDatabase = getDatabase(firebaseApp);

export async function sendMessage(content: string) {
	let userid = get(currentFirestoreUser)?.uid;
	let userName = get(currentFirestoreUser)?.email;

	if (userid === null) {
		return;
	}

	push(ref(messageDatabase, 'messages/'), {
		content,
		date: Timestamp.now(),
		userName,
		userid
	});
}

export const messagesState = writable<message[]>([]);
export const markedMessageState = writable<message[]>([]);

export async function getUserData(userid: string) {
	const userDoc = doc(userCollection, userid);
	return (await getDoc(userDoc)).data();
}

export async function getMarkedMessages() {
	const markMessagesRef = await query(
		ref(messageDatabase, 'messages'),
		orderByChild('isMark'),
		equalTo(true)
	);
	onValue(
		markMessagesRef,
		(snapshot) => {
			const messages = snapshot.val();
			markedMessageState.set(
				Object.entries(messages)
					.map(([k, v]) => {
						return { uid: k, ...v };
					})
					.reverse() as message[]
			);
		},
		{ onlyOnce: true }
	);
}

export async function getMessagesByLastKey(lastKey: string, amount: number) {
	console.log(lastKey, amount);

	const lastMessageRef = await query(
		ref(messageDatabase, 'messages'),
		orderByKey(),
		endBefore(lastKey),
		limitToLast(amount)
	);
	onValue(
		lastMessageRef,
		(snapshot) => {
			const messages = snapshot.val();

			const newMessage = Object.entries(messages)
				.map(([k, v]) => {
					return { uid: k, ...v };
				})
				.reverse() as message[];

			messagesState.update((cur) => [...newMessage, ...cur]);
		},
		{ onlyOnce: true }
	);
}

export async function updateMessage(message: message) {
	return update(ref(messageDatabase), { ['messages/' + message.uid]: message });
}
