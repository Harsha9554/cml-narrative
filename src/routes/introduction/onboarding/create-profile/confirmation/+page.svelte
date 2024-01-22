<!--
 /src/routes/introduction/onboarding/create-profile/confirmation/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { tourManager } from '$lib/components/tour/TourManager';

	import { agentData, tabletPowerNavigation } from '$lib/utils/stores/store';
	import { onDestroy, onMount } from 'svelte';

	let tour = {
		showTour: true,
		message: 'Click on the power button to close your tablet',
		bindTo: '#tablet-power-button',
		position: 'top'
	};

	let agentName: string;

	agentData.subscribe((value) => {
		agentName = value.agentName;
	});

	onMount(() => {
		tourManager.add(tour);
		tabletPowerNavigation.set({ href: '/introduction/welcome?page=1' });
	});

	onDestroy(() => {
		tourManager.remove(tour);
		tabletPowerNavigation.set({});
	});
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-10">
	<img src="/img/icons/profile.png" alt="" class="h-1/5" />
	<h1 class="font-mokoto text-5xl text-white">Agent {agentName}</h1>
	<!-- <a href="/introduction/welcome?page=1" class="bg-lapiz-blue text-white text-3xl px-7 py-3 rounded-md shadow hover:shadow-lg">CONFIRM</a> -->
</div>
