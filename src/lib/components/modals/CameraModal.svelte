<!--
 /src/lib/components/modals/CameraModel.svelte
 CameraModel.svelte
 cml-narrative
 
 Created by Ian Thompson on July 19th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { getContext } from 'svelte';
	const { close } = getContext('simple-modal');

	export let onFinish = () => {};

	const width = 224;
	let height = 224;

	let streaming = false;

	let video: HTMLVideoElement = null;
	let canvas: HTMLCanvasElement = null;
	let photo: HTMLImageElement | null = null;
	let button = null;
	let stream: MediaStream | null = null;
	let images: HTMLImageElement[] = [];

	const _onFinish = () => {
		onFinish(images);
		close();
	};

	onMount(async () => {
		try {
			stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

			video.srcObject = stream;
			video.play();
			clearPhoto();
		} catch (error) {
			console.error(error);
		}
	});

	onDestroy(() => {
		console.log('camera should be destroyed');
		video.pause();
		stream?.getTracks()[0].stop();
	});
	const takePicture = () => {
		const context = canvas.getContext('2d');
		if (width & height) {
			canvas.width = width;
			canvas.height = height;
			context?.drawImage(video, 0, 0, width, height);

			let image: HTMLImageElement = new Image();
			canvas.toBlob((blob) => {
				if (blob) {
					const imageUrl = URL.createObjectURL(blob);
					photo?.setAttribute('src', image.src);
					image.src = imageUrl;
				}
			}, 'image/png');

			images = [image, ...images];
		}
	};

	const handleCanPlay = () => {
		if (!streaming) {
			// height = (video.videoHeight / video.videoWidth) * width;
			video.setAttribute('width', width);
			video.setAttribute('height', height);
			canvas.setAttribute('width', width);
			canvas.setAttribute('height', height);
			streaming = true;
		} else {
			clearPhoto();
		}
	};

	const clearPhoto = () => {
		const context = canvas.getContext('2d');
		context.fillStyle = '#AAA';
		context.fillRect(0, 0, canvas.width, canvas.height);

		const data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	};
</script>

<div class="space-y-6">
	<div class="flex h-full w-full flex-col items-center space-y-6">
		<video
			bind:this={video}
			src=""
			class="h-full w-full rounded-md"
			id="video"
			on:canplay={handleCanPlay}>Video stream not availible</video>
		<div class="flex space-x-3">
			<button class="btn-secondary btn" on:click={takePicture}>Capture</button>
			<button class="btn-success btn" on:click={_onFinish}>Done</button>
		</div>
	</div>

	<canvas bind:this={canvas} id="canvas" class="hidden" />

	<div class="output hidden">
		<img bind:this={photo} id="photo" alt="The screen capture will appear in this box." />
	</div>
	<p class="text-right">Images: {images.length}</p>

	<div class="flex space-x-1 overflow-scroll">
		{#each images as image}
			<img src={image.src} alt="" class="h-24 rounded-md" />
		{/each}
	</div>
</div>
