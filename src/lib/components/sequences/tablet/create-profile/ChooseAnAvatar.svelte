<!--
 /src/lib/components/sequences/tablet/create-profile/ChooseAnAvatar.svelte
 ChooseAnAvatar.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import type { UserData } from '$lib/types/UserData';

	export let profileData: UserData = {};
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-10 overflow-scroll">
	<h1 class="text-5xl text-lapiz-blue">Choose an avatar</h1>
	<!-- <img src="/img/icons/profile.png" alt="" class="h-1/5"> -->
	<div class=" flex h-full w-full flex-wrap overflow-scroll">
		{#each Array(22) as _, i}
			<img src={`/img/characters/user-avatar/boy-${i}.svg`} alt="" class="h-32 w-32" />
		{/each}
		{#each Array(26) as _, i}
			<img src={`/img/characters/user-avatar/girl-${i}.svg`} alt="" class="h-32 w-32" />
		{/each}
	</div>
</div>
