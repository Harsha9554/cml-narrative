<!--
 /src/lib/components/sequences/tablet/Interest.svelte
 Interest.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import type { UserData } from '$lib/types/UserData';
	import { onMount } from 'svelte';

	export let profileData: UserData = {};
	export let prompt: string;
	export let index: number;

	let randomPlaceholder = '';
	const getRandomInterest = () => {
		let interests: string = ['play basketball', 'play football', 'dance', 'go outside', 'draw'];

		const random = Math.floor(Math.random() * interests.length);

		return interests[random];
	};
	onMount(() => {
		randomPlaceholder = getRandomInterest();
	});
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-10">
	<h1 class="text-6xl text-white">{prompt}</h1>
	<div class="flex w-full justify-center space-x-7">
		<div class="form-control h-24 w-full max-w-2xl">
			<input
				type="text"
				placeholder={`I like to ${randomPlaceholder}!`}
				class="input-bordered input h-full  w-full font-mono text-4xl"
				bind:value={profileData.interests[index]} />
		</div>
	</div>
</div>
