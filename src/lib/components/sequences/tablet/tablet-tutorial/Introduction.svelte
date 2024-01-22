<!--
 /src/lib/components/sequences/tablet/tablet-tutorial/Introduction.svelte
 Introduction.svelte
 cml-narrative
 
 Created by Ian Thompson on January 14th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { tourManager, type Tour } from '$lib/components/tour/TourManager';
	import { Assets } from '$lib/utils/Assets';
	import { onDestroy, onMount, createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher<{ event: string; id: string }>();

	// let tour: Tour = {
	// showTour: true,
	// message: "This is your SPOT tablet! You will use it for your mission to the future. It can do several different things.",
	// bindTo: "#profile-element-tablet-intro",
	// position: "top"
	// }

	onMount(() => {
		dispatch('applicationContainerEvent', {
			event: 'mount',
			id: `#profile-element-tablet-intro`
		});
	});

	onDestroy(() => {
		dispatch('applicationContainerEvent', {
			event: 'destroy',
			id: `#profile-element-tablet-intro`
		});
	});
</script>

<div class="flex h-full w-full items-center justify-around p-8 align-middle font-mokoto text-white">
	<div class="flex flex-col items-center justify-center space-y-7 text-2xl">
		<img src={Assets.Tablet.travelLog} alt="" class="h-96" />
		<p>Travel Log</p>
	</div>
	<div
		class="flex flex-col items-center justify-center space-y-7 text-2xl"
		id="profile-element-tablet-intro">
		<img src="/img/tablet/profile.png" alt="" class="h-96 object-contain" />
		<p>Profile</p>
	</div>
	<div class="flex flex-col items-center justify-center space-y-7 text-2xl">
		<img src={Assets.Tablet.badges} alt="" class="h-96" />
		<p>Badges</p>
	</div>
</div>
