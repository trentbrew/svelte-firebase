<script>
	import { fade, fly } from 'svelte/transition';
	import Login from "./Login.svelte";

	export let name; //can be used in child components

	let rando; //scoped ONLY to this component

	$: result = (Math.round(rando * 100)); 

	function setRando() {
		rando = Math.random();
	}
</script>

<svelte:head>
	<link rel="stylesheet" href=""><!--potential global styles-->
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
	<!--p class="num">Number: {rando}</p-->
	<hr>

	<Login />


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