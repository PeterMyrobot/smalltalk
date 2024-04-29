<script>
	import '../app.css';
</script>

<svelte:head>
	<style>
		Body,
		html {
			margin: 0;
			overflow: hidden;
			height: 100dvh;
			width: 100vw;
			position: relative;
			font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
				'Courier New', monospace;
			background-repeat: no-repeat;
			background-size: 100% auto;
		}
		input {
			outline: none;
		}
	</style>
</svelte:head>

<div
	class="flex flex-col h-full w-full bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] min-w-80"
>
	<div class="border-b-4 mx-4 w-[300px] border-white">
		<h1 class=" pb-2 pt-4 text-2xl text-white">Small Talk</h1>
	</div>
	<slot></slot>
	<div class="absolute top-0 right-0 text-vintageNavy text-xs px-2">power by WTY</div>
</div>
