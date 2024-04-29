<script lang="ts">
	import { onMount } from 'svelte';
	import type { message } from '../types/message';

	import { currentFirestoreUser } from '../firebase/firestore';
	import capitalizeFirstChar from '../utils/capitalizeFirstChar';

	export let message: message;
</script>

{#if $currentFirestoreUser !== null}
	<div class="flex flex-col items-start whitespace-break-spaces break-all">
		<div class="text-white {message.userid === $currentFirestoreUser.uid ? ' ml-auto' : ''}">
			{capitalizeFirstChar(message.userName.split('@')[0])}
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
