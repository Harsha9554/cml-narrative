<!--
 /src/routes/activities/harmful-or-helpful/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { goto } from '$app/navigation';
	import Tablet from '$lib/components/tablet/Tablet.svelte';
	import type { DragDropItem, DragStackItem } from '$lib/types/DragDropItem';
	import DataService from '$lib/utils/DataService';
	import { dragItemsStore, harmfulHelpfulStore } from '$lib/utils/stores/store';

	// import ConfirmationModal from "$lib/components/modals/activities/hurtful-harmful/ConfirmationModal.svelte";
	import { onMount } from 'svelte';

	let helpfulElement: HTMLParagraphElement;
	let harmfulElement: HTMLParagraphElement;

	// let currentDragObject: DragDropItem = {
	// 	id: 1,
	// 	itemId: 'iphone',
	// 	title: 'iPhone',
	// 	el: null,
	// 	img: '/img/icons/mobile-app.png'
	// };

	// let itemIndex = 0;

	// let items: DragDropItem[] = [
	// 	{
	// 		id: 1,
	// 		itemId: 'iphone',
	// 		title: 'iPhone',
	// 		el: null,
	// 		img: '/img/icons/mobile-app.png'
	// 	},
	// 	{
	// 		id: 2,
	// 		itemId: 'social-media',
	// 		title: 'Social Media',
	// 		el: null,
	// 		img: '/img/icons/social-media.png'
	// 	},
	// 	{
	// 		id: 3,
	// 		itemId: 'internet',
	// 		title: 'Internet',
	// 		el: null,
	// 		img: '/img/icons/wifi.png'
	// 	},
	// 	{
	// 		id: 4,
	// 		itemId: 'hospital',
	// 		title: 'Hospital',
	// 		el: null,
	// 		img: '/img/icons/hospital.png'
	// 	}
	// ];

	let currentDragObject: DragStackItem;

	let designatedContainer: null | string = null;

	let hurtful: DragDropItem[] = [];
	let helpful: DragDropItem[] = [];
	let bothHurtfulAndHelpful = [];

	const handleDrop = (e: { detail: any }) => {
		console.log('Drop', e.detail);
		console.log(currentDragObject);
		console.log(designatedContainer);

		let type: 'harmful' | 'helpful' | undefined;

		if (designatedContainer == 'harmful') {
			type = 'harmful';
		} else if (designatedContainer == 'helpful') {
			type = 'helpful';
		} else {
			type = undefined;
		}

		dragItemsStore.update((items) => {
			items[0].type = type;
			console.log('after drop: ', items);
			return items;
		});
	};

	onMount(() => {
		dragItemsStore.subscribe((value) => {
			currentDragObject = value[0];
		});
	});

	// const handleSubmit = async () => {
	// 	try {
	// 		// await DataService.Data.submitHelpfulOrHarmfulResponse({
	// 		// 	harmful: hurtful,
	// 		// 	helpful: helpful
	// 		// });
	// 		harmfulHelpfulStore.set({ harmful: hurtful, helpful: helpful, reasoning: [] });

	// 		goto('harmful-or-helpful-reasoning');
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const handleDrag = (event: any) => {
		// console.log(event);
		// console.log(event);
		// let drag: HTMLImageElement = currentDragObject.el
		// drag.classList.add("opacity-50")
	};

	const handleContainerDragover = (event: string | null) => {
		// console.log(event);
		designatedContainer = event;
	};
</script>

<Tablet>
	<div class="flex h-full w-full flex-col items-center justify-center text-white">
		<!-- {#if itemIndex >= items.length - 1}
			<h2 class="text-5xl">Thanks for your response!</h2>
			<button class="mt-8 rounded-lg bg-blue-500 px-4 py-2 text-4xl" on:click={handleSubmit}
				>Next</button> -->
		{#if currentDragObject == undefined}
			<h2 class="text-5xl">Loading...</h2>
		{:else}
			<div class="space-y-3 text-center">
				<h2 class="text-5xl">Is this technology helpful or harmful?</h2>
				<p class="text-3xl">Drag the technology into the appropriate box.</p>
			</div>
			<div class="mt-14 flex w-full items-center">
				<div
					id="helpful-bank"
					class="container flex h-full w-full   flex-col items-center justify-center rounded-sm p-2 text-center text-2xl text-white"
					on:drop={handleDrop}
					on:dragover={() => handleContainerDragover('helpful')}>
					<p class="mb-3 rounded-lg bg-teal-600 px-4 py-2 text-4xl" bind:this={helpfulElement}>
						Helpful
					</p>
					<div id="helpful-bank-container" class="flex items-start" />
				</div>
				<div id="yolo" class="container flex h-full w-1/2 flex-col items-center justify-center">
					<img
						src={currentDragObject.img}
						alt=""
						class="h-full"
						on:drag={handleDrag}
						id="draggable"
						on:dragend={handleDrop}
						bind:this={currentDragObject.el} />
				</div>
				<div
					id=""
					class="container flex h-full w-full  flex-col items-center justify-center rounded-sm p-2 text-center text-2xl text-white"
					on:dragover={() => handleContainerDragover('harmful')}
					on:drop={handleDrop}>
					<p class="mb-3 rounded-lg bg-teal-600 px-4 py-2 text-4xl" bind:this={harmfulElement}>
						Harmful
					</p>
				</div>
			</div>
		{/if}
	</div>
</Tablet>
