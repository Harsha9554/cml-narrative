<!--
 /src/routes/activities/harmful-or-helpful/what-do-you-think-an-algorithim-is/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Scene from '$lib/components/scene/Scene.svelte';
	import Tablet from '$lib/components/tablet/Tablet.svelte';
	import TextResponse from '$lib/components/activities/free-response/TextResponse.svelte';
	import DataService from '$lib/utils/DataService';
	import { goto } from '$app/navigation';

	let response: string = '';

	const handleSubmit = async () => {
		try {
			await DataService.Data.submitFreeResponse('machineLearning', response);
			goto('/activities/draw-machine-learning');
		} catch (error) {
			console.error(error);
		}
	};
</script>

<Tablet>
	<TextResponse
		promptedTechnology="Machine Learning"
		on:submitClicked={handleSubmit}
		bind:response />
</Tablet>
