<script lang="ts">
	import { NavigationDirection } from '$lib/types/Enums';
	/**
	 * TODO: Add check to determine if there is a next or previous line in the script and
	 * conditionally show arrows
	 */
	import type { Line } from '$lib/types/Script';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let line: Line;

	const back = () => {
		dispatch('dialogEvent', {
			state: NavigationDirection.backward
		});
	};

	/** Dispatch the forward dialogEvent */
	const forward = () => {
		dispatch('dialogEvent', {
			state: NavigationDirection.forward
		});
	};
</script>

<div class="flex w-full flex-col px-4">
	<div class="relative z-20 flex w-full items-end justify-between align-bottom">
		{#if line.avatars.length > 1}
			<div class="flex w-full items-end justify-between align-bottom">
				{#each line.avatars as avatar, i}
					<div class="mr-14 self-end">
						<img class="relative -bottom-9 z-20 " src={avatar} alt="" />
						{#if line.speakers[i]}
							<div
								class="bg-peach relative -bottom-4 -right-5 z-20 h-fit w-fit rounded px-3 text-3xl text-black">
								{line.speakers[i]}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{:else if line.pos == 'right'}
			<div class=" bg-peach relative -bottom-4 z-20 h-fit w-fit rounded px-3 text-3xl text-black">
				{line.speakers[0]}
			</div>
			<div class="mr-14 self-end">
				<img src={line.avatars[0]} alt="" />
			</div>
		{:else if line.pos == 'left'}
			<div class="mr-14 self-end">
				<img src={line.avatars[0]} alt="" />
			</div>
			<div class=" bg-peach relative -bottom-4 z-20 h-fit w-fit rounded px-3 text-3xl text-black">
				{line.speakers[0]}
			</div>
		{/if}
	</div>

	<div class="bg-jet relative flex h-36 w-full items-center justify-center rounded p-4 text-white">
		<div class="grid grid-cols-5 items-center justify-center gap-8 align-middle text-3xl">
			<!-- {#if $isAudioPlaying}
				<button class="mr-6 rotate-180">
					<img src="/img/svg/dialog-arrow-blue.svg" alt="" class="h-14 w-14" />
				</button>
				<p class="col-span-3 mt-auto w-full text-2xl leading-relaxed  ">
					{line.dialog}
				</p>
				<button class="">
					<img src="/img/svg/dialog-arrow-blue.svg" alt="" class="h-14 w-14" />
				</button>
			{:else} -->
			<button class="mr-6 rotate-180" on:click={back}>
				<img src="/img/svg/dialog-arrow.svg" alt="" class="h-14 w-14" />
			</button>
			<p class="col-span-3 mt-auto w-full text-2xl leading-relaxed  ">
				{line.dialog}
			</p>
			<button class="" on:click={forward}>
				<img src="/img/svg/dialog-arrow.svg" alt="" class="h-14 w-14" />
			</button>
			<!-- {/if} -->
		</div>
	</div>
</div>
