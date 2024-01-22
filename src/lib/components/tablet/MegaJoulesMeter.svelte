<!--
 /src/lib/components/tablet/MegaJoulesMeter.svelte
 MegaJoulesMeter.svelte
 cml-narrative
 
 Created by Ian Thompson on January 14th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let amount: number = 0;

	let dispatch = createEventDispatcher();

	onMount(() => {
		console.log('mountng');

		dispatch('applicationContainerEvent', {
			event: 'mount',
			id: `#megajoules-meter`
		});
	});

	onDestroy(() => {
		console.log('destroying');

		dispatch('applicationContainerEvent', {
			event: 'destroy',
			id: `#megajoules-meter`
		});
	});
</script>

<div class="w-full" id="megajoules-meter">
	<img src={`/img/tablet/meter/meter-${amount}.svg`} alt="" />
</div>

<!-- <div class="loader-bar">
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />
	<div class="block-border" />

	{#each Array(amount) as _, i}
		<div class="block-meter" />
	{/each}
</div> -->

<!-- <style>
	.loader-bar {
		width: 60vw;
		height: 12vw;
		display: grid;
		grid-template-columns: repeat(3, 2vw) repeat(10, 3vw 2vw) repeat(2, 2vw);
		grid-template-rows: repeat(6, 2vw);
	}

	.block-border {
		background-color: rgb(50, 50, 50);
	}

	.block-meter {
		background-color: rgb(100, 200, 100);
	}

	.block-border:nth-of-type(1) {
		grid-row: 1;
		grid-column: 3/-3;
	}

	.block-border:nth-of-type(2) {
		grid-row: -2;
		grid-column: 3/-3;
	}

	.block-border:nth-of-type(3) {
		grid-row: 3/5;
		grid-column: 1;
	}

	.block-border:nth-of-type(4) {
		grid-row: 3/5;
		grid-column: -2;
	}

	.block-border:nth-of-type(5) {
		grid-row: 2;
		grid-column: 2;
	}

	.block-border:nth-of-type(6) {
		grid-row: 2;
		grid-column: -3;
	}

	.block-border:nth-of-type(7) {
		grid-row: 5;
		grid-column: 2;
	}

	.block-border:nth-of-type(8) {
		grid-row: 5;
		grid-column: -3;
	}

	.block-meter:nth-of-type(9) {
		grid-row: 3/5;
		grid-column: 4;
	}

	.block-meter:nth-of-type(10) {
		grid-row: 3/5;
		grid-column: 6;
	}

	.block-meter:nth-of-type(11) {
		grid-row: 3/5;
		grid-column: 8;
	}

	.block-meter:nth-of-type(12) {
		grid-row: 3/5;
		grid-column: 10;
	}

	.block-meter:nth-of-type(13) {
		grid-row: 3/5;
		grid-column: 12;
		opacity: 0;
		animation: blinky1 2s linear forwards;
	}

	.block-meter:nth-of-type(14) {
		grid-row: 3/5;
		grid-column: 14;
		opacity: 0;
		animation: blinky1 2s 4s linear forwards;
	}

	.block-meter:nth-of-type(15) {
		grid-row: 3/5;
		grid-column: 16;
		opacity: 0;
		animation: blinky1 2s 8s linear forwards;
	}

	.block-meter:nth-of-type(16) {
		grid-row: 3/5;
		grid-column: 18;
		opacity: 0;
		animation: blinky2 3s 14s linear infinite;
	}

	@keyframes blinky1 {
		99% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes blinky2 {
		49% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
	}
</style> -->
