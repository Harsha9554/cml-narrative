<!--
 /src/lib/components/activities/survey/SurveyOption.svelte
 SurveyOption.svelte
 cml-narrative
 
 Created by Ian Thompson on August 1st 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	export let emoji: string;
	export let response: string;
</script>

<button
	class="flex items-center rounded-md hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-20"
	on:click>
	<span class="mr-5 text-5xl">{emoji}</span>{response}
</button>
