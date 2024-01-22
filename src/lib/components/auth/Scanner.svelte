<!--
 /src/lib/components/auth/Scanner.svelte
 Scanner.svelte
 cml-narrative
 
 Created by Ian Thompson on May 25th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// const { close } = getContext('simple-modal');

	import {
		MultiFormatReader,
		BarcodeFormat,
		BrowserMultiFormatReader,
		NotFoundException
	} from '@zxing/library';

	const codeReader = new BrowserMultiFormatReader();

	export let onDetect = (e) => {};
	export let onCancel = () => {};
	export let continuousScanning = false;

	let shouldAnimateLoader = true;

	// const _close = () => {
	//     onCancel()
	//     close()
	// }

	const action = (e) => {
		onDetect(e);

		console.log('helo', JSON.parse(e.text));

		dispatch('idProcessed', {
			...JSON.parse(e.text)
		});

		if (!continuousScanning) close();
	};

	const loadReader = async () => {
		try {
			let selectedDeviceId;

			let videoInputDevices = await codeReader.listVideoInputDevices();
			shouldAnimateLoader = false;

			const sourceSelect = document.getElementById('sourceSelect');
			selectedDeviceId = videoInputDevices[0].deviceId;

			if (videoInputDevices.length >= 1) {
				videoInputDevices.forEach((element) => {
					const sourceOption = document.createElement('option');
					sourceOption.text = element.label;
					sourceOption.value = element.deviceId;
					sourceSelect.appendChild(sourceOption);
				});

				sourceSelect.onchange = () => {
					selectedDeviceId = soruceSelect.value;
				};

				const sourceSelectPanel = document.getElementById('sourceSelectPanel');
				sourceSelectPanel.style.display = 'block';
			}

			codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
				if (result) {
					console.log(result);
					action(result);
				}

				if (err && !(err instanceof NotFoundException)) {
					console.log(err);
				}
			});
		} catch (error) {
			console.log(error);

			close();
		}
	};

	onDestroy(() => {
		codeReader.reset();
	});

	onMount(async () => {
		loadReader();
	});
</script>

<div class="wrapper h-full w-full" style="">
	<section
		class="container mt-auto flex h-full flex-col items-center justify-center"
		id="demo-content"
		style={`visibility: ${shouldAnimateLoader ? 'hidden' : 'visible'};`}>
		<!-- <section class="container" id="demo-content"> -->
		<div class="h-full">
			<video
				class="h-full w-full -scale-x-100 rounded rounded-md border-4 border-gray-300 bg-gray-400 shadow-xl"
				id="video">
				<track kind="captions" />
			</video>
		</div>

		<div class="options hidden">
			<div id="sourceSelectPanel" style="display:none">
				<label for="sourceSelect">Change video source:</label>
				<select id="sourceSelect" style="max-width:400px" />
			</div>

			<div class="switch">
				<!-- <label for="">Continuous Scanning</label> -->
				<!-- <Switch on:click={changeStore} bind:checked={$continuouslyScan}></Switch> -->
			</div>
		</div>
		<pre><code id="result" /></pre>
	</section>
</div>
