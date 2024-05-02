<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { message } from '../types/message';

	import { currentFirestoreUser, updateMessage } from '../firebase/firestore';
	import capitalizeFirstChar from '../utils/capitalizeFirstChar';

	export let message: message;
</script>

{#if $currentFirestoreUser !== null}
	<div class="flex flex-col items-start whitespace-break-spaces break-all">
		<div class="text-white {message.userid === $currentFirestoreUser.uid ? ' ml-auto' : ''}">
			{capitalizeFirstChar(message.userName.split('@')[0])}
		</div>
		<div
			class="relative flex max-w-md px-4 py-2 rounded-xl my-2 {message.userid ===
			$currentFirestoreUser.uid
				? 'bg-vintageBeige ml-auto'
				: 'bg-white'}"
		>
			<button
				class="absolute flex items-end bottom-[-3px] {message.userid === $currentFirestoreUser.uid
					? 'left-[-20px]'
					: 'right-[-23px]'} "
			>
				{#if message.isMark}
					<button
						on:click={() => {
							updateMessage({ ...message, isMark: false });
						}}
					>
						<Icon icon="material-symbols-light:bookmark" class="w-4 h-4" color="#06a2e5" />
					</button>
				{:else}
					<button
						on:click={() => {
							updateMessage({ ...message, isMark: true });
						}}
					>
						<Icon
							icon="material-symbols-light:bookmark-outline"
							class="w-4 h-4"
							color="black#06a2e5"
						/>
					</button>
				{/if}
			</button>
			{message.content}
		</div>
	</div>
{/if}
