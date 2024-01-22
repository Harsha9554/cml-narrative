<script lang="ts">
	import { goto } from '$app/navigation';
	import type { StudentAuthData } from '$lib/types/StudentData';
	import DataService from '$lib/utils/DataService';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<div class="flex h-full w-full flex-col  items-center justify-center">
	<button
		out:fade
		on:click={() => {
			dispatch('back');
		}}>
		<img src="/img/svg/dialog-arrow.svg" alt="" class="mt-8 h-14 rotate-180" />
	</button>
	<div class="font-mokoto mt-9 space-y-4 text-center text-white">
		<p class="text-3xl text-green-500" in:fade={{ delay: 600 }}>MATCH FOUND!</p>
		<p class="text-xl" in:fade={{ delay: 1200 }}>Welcome, Agent!</p>
	</div>
	<button
		in:fade={{ delay: 1500 }}
		on:click={() => {
			goto('/introduction?page=1');
		}}
		class="font-mokoto mt-8 flex items-center justify-center gap-5 rounded-md bg-black bg-opacity-75 px-4 py-3 align-middle shadow-md">
		<p class="text-3xl font-bold text-white">Begin</p>
	</button>
</div>
