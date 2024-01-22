<!--
 /src/lib/components/sequences/tablet/create-profile/AgentName.svelte
 AgentName.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { tourManager } from '$lib/components/tour/TourManager';

	import type { UserData } from '$lib/types/UserData';

	export let profileData: UserData = {};

	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	let tour = {
		showTour: true,
		message: 'S.P.O.T agents usually choose a name about what inspires them. What inspires you?',
		bindTo: '#submit-button',
		position: 'bottom'
	};

	onMount(() => {
		tourManager.add(tour);
	});

	onDestroy(() => {
		tourManager.remove(tour);
	});

	const handleSubmit = () => {
		dispatch('submitClicked');
	};
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-10 font-mono">
	<h1 class="text-5xl text-white">Choose an Agent name</h1>
	<div class="flex w-full justify-center space-x-7">
		<div class="form-control h-24 w-full max-w-2xl">
			<input
				id="agent-name-input"
				type="text"
				placeholder="Pineapple"
				class="input-bordered input h-full w-full font-mono text-4xl"
				bind:value={profileData.agentName} />
		</div>
	</div>
	<button
		id="submit-button"
		class="bg-lapiz-blue rounded-md px-7 py-3 text-3xl text-white shadow hover:shadow-lg"
		on:click={handleSubmit}>SUBMIT</button>
</div>
