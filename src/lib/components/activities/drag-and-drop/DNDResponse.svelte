<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import DNDTextResponse from './DNDTextResponse.svelte';
	import type { DragStackItem } from '$lib/types/DragDropItem';
	import VideoModal from '$lib/components/modals/VideoModal.svelte';
	// @ts-ignore
	const { open } = getContext('simple-modal');

	enum ResponseType {
		undefined,
		write,
		video
	}

	export let currentDragObject: DragStackItem;

	let dispatch = createEventDispatcher();
	let responseTypeState: ResponseType = ResponseType.undefined;
	let response: string = '';

	const handleNext = () => {
		dispatch('nextItem');
	};

	const textSubmit = () => {
		responseTypeState = ResponseType.undefined;
		handleNext();
	};

	const onFinish = async () => {
		dispatch('videosSubmitted');
	};

	const openCamera = () => {
		open(VideoModal, {
			onFinish,
			currentDragObject
		});
	};
</script>

{#if responseTypeState == ResponseType.undefined}
	{#if currentDragObject == undefined}
		<h2 class="text-5xl">Loading...</h2>
	{:else}
		<div class="flex h-full w-full flex-col items-center justify-center text-white">
			<h3 class="text-4xl">
				Write or explain how a {currentDragObject.title} is {currentDragObject.type} according to you?
			</h3>
			<p class="mt-2 text-2xl">(You can record yourself explaining too)</p>
			<div class="mt-7 flex space-x-4">
				<button class="btn-primary btn" on:click={() => (responseTypeState = ResponseType.write)}
					>Write</button>
				<button class="btn-secondary btn" on:click={openCamera}>Record</button>
			</div>
			<button class="btn btn-accent mt-4" on:click={handleNext}>Next</button>
		</div>
	{/if}
{:else if responseTypeState == ResponseType.write}
	{#if currentDragObject == undefined}
		<h2 class="text-5xl">Loading...</h2>
	{:else}
		<div class="mt-auto h-full w-full  items-center justify-center">
			<DNDTextResponse {currentDragObject} on:textDone={textSubmit} bind:response />
		</div>
	{/if}
{/if}
