<script>
	import { dndzone } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	const flipDurationMs = 200;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let items = [];
	export let type;
	export let id;

	let dropTargetStyle = {
		outline: '#e2e8f0 dashed 2px',
		'border-radius': '0.375rem',
		background: type == 'bank' ? '#d1d5db' : ''
		// "outline-color": ""
	};

	function handleSort(e) {
		items = e.detail.items;

		const { items: newItems } = e.detail;

		if (e.type == 'finalize') {
			dispatch('itemDropped', {
				id: id,
				items: newItems
			});
		}
	}
</script>

<section
	use:dndzone={{ items, flipDurationMs, type, dropTargetStyle }}
	on:consider={handleSort}
	on:finalize={handleSort}
	class="min-h-16 flex h-full justify-center outline-black">
	{#each items as item (item.id)}
		<div
			animate:flip={{ duration: flipDurationMs }}
			class="m-3 max-h-44 rounded-md border bg-white p-5 shadow-md ">
			<div class="flex flex-col items-center justify-center space-y-3 align-middle">
				<img src={item.img} alt="" class="h-24" />
				<p class="text-xl text-gray-800">{item.title}</p>
			</div>
		</div>
	{/each}
</section>
