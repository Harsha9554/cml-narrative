<script lang="ts">
	import { goto } from '$app/navigation';
	import type { HarmfulHelpfulItem } from '$lib/types/DragDropItem';
	import { dragItemsStore, harmfulHelpfulStore } from '$lib/utils/stores/store';
	import HarmfulHelpfulDnd from '../harmful-or-helpful-dnd/+page.svelte';
	import HarmfulHelpfulReasoning from '../harmful-or-helpful-reasoning/+page.svelte';

	const handleSubmit = () => {
		// this is the final submit till now we going to update the store values.
		console.log('everything is done');
		// let see what's in the final store
		let allData: HarmfulHelpfulItem[] = []; // Initialize with an empty array
		harmfulHelpfulStore.subscribe((value) => {
			allData = value;
		});
		console.log('the final data ', allData);
		goto('/training?page=5');
	};
</script>

{#if $dragItemsStore.length === 0}
	{handleSubmit()}
{:else if $dragItemsStore[0].type == undefined}
	<HarmfulHelpfulDnd />
{:else if $dragItemsStore[0].type != undefined}
	<HarmfulHelpfulReasoning />
{/if}
