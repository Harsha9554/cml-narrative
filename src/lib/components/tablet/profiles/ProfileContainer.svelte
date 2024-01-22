<!--
 /src/lib/components/tablet/profiles/ProfileContainer.svelte
 ProfileContainer.svelte
 cml-narrative
 
 Created by Ian Thompson on June 29th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { Assets } from '$lib/utils/Assets';

	export let profile: {};
</script>

<div class="flex h-full w-full flex-col px-6 py-12">
	<h3 class="text-center font-mono text-5xl text-white">{profile.name}</h3>
	<div class="flex h-full items-center space-x-3">
		<div class="w-1/3 space-y-10">
			<div class="flex flex-col text-center ">
				<p class="font-mono text-3xl text-white">SPOT Rank</p>
				<p class="text-white">{profile.rank}</p>
			</div>
			<div class="flex flex-col text-center">
				<p class="font-mono text-3xl text-white">Favorite Badge</p>
				<p class="text-white">{profile.favoriteBadge}r</p>
			</div>
		</div>
		<div class="flex h-full w-1/3 items-center justify-center px-24">
			<!-- TODO: Make this look more like the specifications -->
			<div
				class="flex w-full items-center justify-center rounded-full border-4 border-blue-300 bg-white p-9 shadow-lg shadow-blue-200">
				<img src={profile.img} alt="" class="h-fit w-fit" />
			</div>
		</div>
		<div class="flex h-full w-1/3 flex-col space-y-6">
			{#each profile.interests as interest}
				<div
					class="hud-red-blue-border flex h-full w-full flex-col items-center bg-slate-700 text-center text-xl text-white">
					<p>I like to:</p>
					<p class="mt-auto mb-auto text-3xl">{interest}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
