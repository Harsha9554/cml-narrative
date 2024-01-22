<!--
 /src/routes/introduction/invitation/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on July 19th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Scene from '$lib/components/scene/Scene.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<Scene background="/img/backgrounds/captain_office.jpg">
	<div
		slot="content"
		class="flex h-full items-center justify-center"
		in:fly={{ y: 200, duration: 1000 }}
		out:fly={{ y: 200, duration: 1000 }}>
		<div
			class="flex w-fit flex-col items-center justify-center space-y-12 rounded-lg bg-gray-600 py-6 px-12 text-5xl text-white shadow-xl">
			<img src="/img/logos/SPOT-dots.svg" alt="" class="h-24" />
			<h2 class="border-y-2 border-dashed border-yellow-500 py-7">
				Are you ready to help us travel to the future?
			</h2>
			<a href="/introduction?page=4" class="rounded-md bg-yellow-500 px-4 py-2 text-black shadow-lg"
				>I am ready!</a>
		</div>
	</div>
</Scene>
