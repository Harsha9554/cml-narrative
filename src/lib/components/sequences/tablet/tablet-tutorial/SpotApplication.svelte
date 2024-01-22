<!--
 /src/lib/components/sequences/tablet/tablet-tutorial/TravelLog.svelte
 TravelLog.svelte
 cml-narrative
 
 Created by Ian Thompson on January 14th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	export let img: string;
	export let title: string;

	let dispatch = createEventDispatcher<{ event: string; id: string }>();

	onMount(() => {
		console.log('mountng');

		dispatch('applicationContainerEvent', {
			event: 'mount',
			id: `#tablet-app-container-${title.toLowerCase()}`
		});
	});

	onDestroy(() => {
		console.log('destroying');

		dispatch('applicationContainerEvent', {
			event: 'destroy',
			id: `#tablet-app-container-${title.toLowerCase()}`
		});
	});
</script>

<div
	class="flex h-full w-full flex-col items-center justify-center space-y-7 font-mokoto text-2xl text-white">
	<img src={img} alt="" class="h-72" id={`tablet-app-container-${title.toLowerCase()}`} />
	<p class="text-3xl">{title}</p>
</div>
