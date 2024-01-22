<!--
 /src/lib/components/tour/Popover.svelte
 Popover.svelte
 cml-narrative
 
 Created by Ian Thompson on May 31st 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { createPopper } from '@popperjs/core';
	import { fade } from 'svelte/transition';
	import type { Tour } from './TourManager';

	/**
	 * Data defining how the popover should be displayed and what should be displayed
	 */
	export let popoverData: Tour;

	/**
	 * Reference to the popover itself so we can perform manipulations on later
	 */
	let popoverReference: HTMLElement;

	/**
	 * This is the HTML element that we will "bind" or attach our popover to
	 */
	let bindReference: HTMLElement | null;

	$: {
		/**
		 * Here, we are telling Svelte that the popover's data is probably going to change and we need it to react
		 * when it does change. Inside of this block, every time the popover's data changes, we are going to check to
		 * see if the showTour attribute has turned to false.
		 *
		 * If it has become false, then we are going to remove it from the DOM.
		 *
		 * As mentioned in TourManager.ts, this is a little hacky and probably needs a FIXME:
		 *
		 * I encountered a few issues when trying to remove popovers. My guess is this:
		 */
		if (popoverData.showTour == false) {
			popoverReference.remove();
		}
	}

	onMount(() => {
		// Create the bind reference by finding it on the DOM.
		bindReference = document.querySelector(popoverData.bindTo);

		console.log('Initializing Popover with data: ', popoverData);

		/**
		 * First, we will check to ensure that the bind reference is not null. It may be null if the popover component
		 * has mounted before the intended bind element or if the popover is being created at an inappropriate time.
		 *
		 * Once we have determined that bindReference is not null, then we will utilize the PopperJS library to create
		 * our popover with the proper modifiers as defined in PopperJS documentation which can be found at
		 * https://popper.js.org/docs/v2/.
		 */
		if (bindReference != null) {
			createPopper(bindReference, popoverReference, {
				placement: popoverData.position,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [10, 20]
						}
					}
				]
			});
		} else {
			console.error('Could not find element to bind popover to!');
		}
	});

	onDestroy(() => {
		/**
		 * Popover has now been destroyed.
		 *
		 * TODO: Since we have "hacked" the store, as mentioned previously, we should probably actually remove the
		 * tour from the tourManager now. We can do this later...
		 */
		// console.log("DESTROYING Popover with data: ", popoverData);
	});
</script>

<div id="popover" bind:this={popoverReference} class={popoverData.showTour ? 'block' : 'hidden'}>
	<div data-popper-arrow id="arrow" />
	<div
		class="hud-red-blue-border z-50 mr-3 max-w-xs break-words  rounded-lg border-2 border-blue-700 bg-teal-900 bg-opacity-70 px-2 py-3 text-left font-mono text-lg leading-normal text-white no-underline bg-blend-darken"
		in:fade
		out:fade>
		{popoverData.message}
	</div>
</div>
