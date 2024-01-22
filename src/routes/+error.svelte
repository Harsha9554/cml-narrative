<!--
 /src/routes/+error.svelte
 +error.svelte
 cml-narrative
 
 Created by Ian Thompson on February 12th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center space-y-6">
	<h1 class="text-4xl">Sorry, Agent!</h1>
	<p>This was not supposed to happen. Please alert an adult to this error!</p>
	<p>{$page.status}: {$page.error?.message}</p>
</div>
