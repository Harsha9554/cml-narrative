<!--
 /src/routes/introduction/onboarding/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 7th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Scene from '$lib/components/scene/Scene.svelte';
	import Tablet from '$lib/components/tablet/Tablet.svelte';
</script>

<div class="mx-auto flex h-full w-1/2 flex-col items-center justify-center space-y-8  text-white">
	<h1 class="font-mokoto text-center text-6xl text-white">Welcome, new SPOT Agent!</h1>
	<a
		href="/introduction/onboarding/create-profile?page=1"
		class=" rounded-full bg-yellow-500 px-6 py-5 font-mono  text-2xl shadow-md transition duration-200 ease-in-out hover:opacity-75 hover:shadow-lg"
		>Create Agent Profile</a>
</div>
