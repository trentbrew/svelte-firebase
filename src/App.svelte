<script>
	import { fade, fly } from 'svelte/transition';

	export let name; //can be used in child components

	let rando; //scoped ONLY to this component

	$: result = (Math.round(rando * 100)); 

	function setRando() {
		rando = Math.random();
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<!--p class="num">Number: {rando}</p-->
	<hr>
	<p>{ result }</p> <!-- a boolen case -->
	<button class="button" on:click={setRando}>Randomize</button>
	
	<p>Your score is { result }</p>

	<!--conditionals!-->
	{#if result > 75}
		<p transition:fade>top 25%</p>
	{:else if result > 50}
		<p in:fly={{x: 60, duration: 500}} out:fly={{x: -60, duration: 500}}>top 50%</p>
	{:else}
		<p>do better:p</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #335499;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	.button {
		background: green;
		border:none;
		border-radius: 12px;
		color: white;
		cursor: pointer;
	}

	.button:hover {
		filter: brightness(0.6);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>