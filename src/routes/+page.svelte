<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import Message from '../components/message.svelte';
	import MarkedButton from '../components/markedButton.svelte';

	import { authState } from '../firebase/auth';
	import Icon from '@iconify/svelte';

	export let data;
	let currentFirestoreUser = data.firestore.currentFirestoreUser;
	let messages = data.firestore.messagesState;
	let markedMessages = data.firestore.markedMessageState;

	let logginIn = false;

	let email = '';
	let password = '';

	let workInProgress = false;

	function parseScroll() {
		// console.log(scrollView?.scrollTop);
		if (scrollView?.scrollTop === 0) {
			// console.log($messages);
			// getMessagesByLastKey($messages[0].uid, 10);
		}
	}

	async function handleCreate() {
		await data.auth.createUser(email, password);
	}

	async function handleSignIn() {
		if (email == 'test') {
			workInProgress = true;
			return;
		}
		await data.auth.signIn(email, password);
	}

	let currentInput = '';

	function handleSubmit() {
		if (currentInput === '') {
			return;
		}

		data.firestore.sendMessage(currentInput);
		currentInput = '';
	}

	let scrollView: HTMLElement | null;

	$: if ($messages && scrollView != null) {
		scrollView.scroll({
			top: scrollView.scrollHeight,
			behavior: 'smooth'
		});
	}

	afterUpdate(() => {
		if (scrollView != null) {
			scrollView.scroll({
				top: scrollView.scrollHeight,
				behavior: 'smooth'
			});
		}
	});
</script>

{#if workInProgress}
	<main class="flex justify-center items-center h-full w-full">
		<div
			class="flex h-1/3 min-w-80 animate-bounce bg-vintageNavy text-vintageBeige justify-center items-center"
		>
			Work in progress
		</div>
	</main>
{:else if $authState == null}
	<main class="flex justify-center items-center h-full w-full">
		<div class="flex flex-col p-4 backdrop-blur-lg w-1/3 h-1/3 min-w-80 justify-between shadow-lg">
			<div class="flex flex-col space-y-4">
				<input
					class="px-2 box-border rounded-md h-8 border-2 border-vintageBeige border-solid"
					type="email"
					placeholder="Email"
					bind:value={email}
				/>
				<input
					class="px-2 box-border rounded-md h-8 border-2 border-vintageBeige border-solid"
					type="password"
					placeholder="Password"
					bind:value={password}
				/>
			</div>
			<div class="flex space-x-4 justify-end">
				<!-- <button class="p-2 rounded-md hover:text-vintageBeige active:opacity-80 text-white" on:click={handleCreate}>Sign Up</button> -->
				<button
					class="p-2 rounded-md hover:text-vintageBeige active:opacity-80 text-white"
					on:click={handleSignIn}
					disabled={logginIn}>LogIn</button
				>
			</div>
		</div>
	</main>
{:else if $currentFirestoreUser === null}
	<main class="center">
		<span>Loading User Data...</span>
	</main>
{:else}
	<main class="flex flex-1 flex-col overflow-scroll">
		<div class="flex-auto overflow-scroll" on:scroll={parseScroll} bind:this={scrollView}>
			{#each $messages.reverse() as message}
				<div class="px-4">
					<Message {message} />
				</div>
			{/each}
		</div>

		<form on:submit|preventDefault={handleSubmit} class="bg-vintageNavy p-3 flex">
			<textarea bind:value={currentInput} class="flex-1 resize-none mr-4" />
			<MarkedButton {markedMessages} />
			<button type="submit" class="ml-4 rounded-md p-3">
				<Icon icon="iconamoon:send" class="h-8 w-8 " color="#DFD0B8" />
			</button>
		</form>
	</main>
{/if}
