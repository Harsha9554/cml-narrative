<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import AudioPlayer from '../audio/AudioPlayer.svelte';

	/**  The background image of the scene */
	export let background = '';

	export let audio: string = '';

	export let darken: boolean = false;

	const dispatch = createEventDispatcher();
	let player;

	function handlePlayerMounted(event: any) {
		player = event.detail.player;
		dispatch('scenePlayerMounted', { player });
	}
</script>

<AudioPlayer on:playerMounted={handlePlayerMounted} src={audio} />

<div class="flex h-screen w-full items-center justify-center bg-gray-200 bg-cover">
	<div
		class={`relative z-50 h-full w-full  bg-cover ${darken ? 'brightness-40' : ''}`}
		style={`background-image: url('${background}');`}>
		<div class="z-60 h-full w-full ">
			<slot name="content" />
		</div>

		<!-- Conditionally display the Dialog slot, as there wont always be a dialog box present -->
		{#if $$slots.dialog}
			<div class="absolute inset-0 z-30 mt-auto flex h-fit w-full items-end  pb-2 brightness-100">
				<slot name="dialog" />
			</div>
		{/if}
	</div>
</div>
