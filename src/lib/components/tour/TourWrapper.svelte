<!--
 /src/lib/components/tour/TourWrapper.svelte
 TourWrapper.svelte
 cml-narrative
 
 Created by Ian Thompson on May 30th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Popover from './Popover.svelte';
	import { tourManager } from './TourManager';
</script>

<div class="">
	{#each $tourManager as popover}
		<div class="" id="temp-pop-container">
			<Popover popoverData={popover} />
		</div>
	{/each}
</div>

<slot />
