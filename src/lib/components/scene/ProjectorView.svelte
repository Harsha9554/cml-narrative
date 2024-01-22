<!--
 /src/lib/components/scene/ProjectorView.svelte
 ProjectorView.svelte
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<div class="flex h-full w-full flex-col">
	<div class="z-10 h-9 w-full bg-gray-900" />
	<div class="z-0 h-full" in:fly={{ y: -800, duration: 2000, delay: 200 }}>
		<div class="mx-8 h-4/5 rounded-sm border-4 border-b-0 border-t-0 border-black bg-white">
			<slot />
		</div>
		<div class="h-12 w-full rounded-sm border-4 border-black bg-white" />
		<div class="flex w-full flex-col items-center justify-center">
			<div class="h-12 w-2 bg-black" />
			<div class="h-10 w-10 rounded-full border-4 border-black bg-lapiz-blue" />
		</div>
	</div>
</div>
