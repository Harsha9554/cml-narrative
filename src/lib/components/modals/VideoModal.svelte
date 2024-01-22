<script lang="ts">
	import { onDestroy, getContext } from 'svelte';
	import DataService from '$lib/utils/DataService';
	import type { DragStackItem, Reasoning } from '$lib/types/DragDropItem';
	import { dragItemsStore, harmfulHelpfulStore } from '$lib/utils/stores/store';
	// @ts-ignore
	const { close } = getContext('simple-modal');

	export let onFinish = () => {};
	// export let harmfulProp: HarmfulHelpfulItem;
	export let currentDragObject: DragStackItem;

	let mediaRecorder: MediaRecorder;
	let chunks: BlobPart[] = [];
	let url: string = '';
	let videoElement: HTMLVideoElement;
	let stream: MediaStream | null = null;

	const _onFinish = () => {
		// @ts-ignore
		onFinish();
		close();
	};

	onDestroy(() => {
		console.log('camera should be destroyed');
		videoElement.pause();
		stream?.getTracks()[0].stop();
	});

	const startRecording = async () => {
		stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
		mediaRecorder = new MediaRecorder(stream);
		videoElement.srcObject = stream;
		videoElement.muted = true;
		chunks = [];
		mediaRecorder.start();
		mediaRecorder.ondataavailable = (event) => {
			chunks.push(event.data);
		};
	};

	const stopRecording = () => {
		mediaRecorder.stop();
		mediaRecorder.onstop = () => {
			const blob = new Blob(chunks, { type: 'video/webm' });
			url = URL.createObjectURL(blob);

			// Stop all tracks and release the stream
			stream?.getTracks().forEach((track) => track.stop());
			videoElement.srcObject = null;
		};
	};

	const generateFileName = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		return `${year}-${month}-${day}-${hours}-${minutes}-${seconds}.webm`;
	};

	const uploadToS3 = async () => {
		try {
			console.log('videmodal hprop: ', currentDragObject);
			let res = 'somerandomaws.mp4';
			// let res = await DataService.Data.uploadVideoToS3(url, generateFileName());
			// harmfulHelpfulStore.update((value) => {
			// 	value.reasoning.push({
			// 		id: harmfulProp.id,
			// 		type: harmfulProp.type,
			// 		reasonText: '',
			// 		reasonVideo: res
			// 	});
			// 	return value;
			// });
			let data: Reasoning = { reasonText: '', reasonVideo: res };
			dragItemsStore.update((items) => {
				items[0].reasoning = data;
				console.log('uploadtos3 lo ', items);
				return items;
			});
			console.log('media uploaded to s3.');
			_onFinish();
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="space-y-6">
	<div class="flex h-full w-full flex-col items-center space-y-6">
		<!-- <video
			bind:this={video}
			src=""
			class="h-full w-full rounded-md"
			id="video"
			on:canplay={handleCanPlay}>Video stream not availible</video>
		<div class="flex space-x-3">
			{#if !recording}
				<button class="btn-primary btn" on:click={startRecording}>Record</button>
			{:else}
				<button class="btn-danger btn" on:click={stopRecording}>Stop</button>
			{/if}
			<button class="btn-success btn" on:click={_onFinish}>Done</button>
		</div> -->
		<video bind:this={videoElement} autoplay />
		<button on:click={startRecording}>Record</button>
		<button on:click={stopRecording}>Stop</button>
		<button on:click={uploadToS3}>Done</button>
	</div>

	<!-- <canvas bind:this={canvas} id="canvas" class="hidden" />

	<div class="output hidden">
		<img bind:this={photo} id="photo" alt="The screen capture will appear in this box." />
	</div> -->
</div>
