<script lang="ts">
	import { onMount } from 'svelte';
	import type { message } from '../types/message';

	import { currentFirestoreUser, getUserData } from '../firebase/firestore';

	export let message: message;
</script>

{#if $currentFirestoreUser !== null}
	<div class="flex flex-col items-start whitespace-break-spaces break-all">
		<div class="text-white {message.userid === $currentFirestoreUser.uid ? ' ml-auto' : ''}">
			{message.userName}
		</div>
		<div
			class=" max-w-md px-4 py-2 rounded-2xl my-2 {message.userid === $currentFirestoreUser.uid
				? 'bg-vintageBeige ml-auto'
				: 'bg-white'}"
		>
			{message.content}
		</div>
	</div>
{/if}
