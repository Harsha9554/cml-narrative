<script context="module" lang="ts">
	const players = new Set<HTMLAudioElement>();

	export function stopAll() {
		players.forEach((p) => p.pause());
	}

	export const play = (currentPlayer: HTMLAudioElement) => {
		players.forEach((p) => {
			if (p == currentPlayer) {
				p.play();
			} else {
				p.pause();
			}
		});
	};
</script>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let src: string;
	let hasPlayerMounted = false;

	const dispatch = createEventDispatcher();

	$: {
		if (hasPlayerMounted) {
			player.src = src;
			player.play();
		}
	}

	let player: HTMLAudioElement;

	onMount(() => {
		hasPlayerMounted = true;

		players.add(player);
		console.log('mounting plater');
		play(player);
		dispatch('playerMounted', player);
	});
</script>

<audio bind:this={player} {src}>
	<track kind="captions" />
</audio>
