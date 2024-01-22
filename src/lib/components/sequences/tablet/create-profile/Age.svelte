<!--
 /src/lib/components/sequences/tablet/create-profile/Age.svelte
 Age.svelte
 cml-narrative
 
 Created by Ian Thompson on January 9th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import type { UserData } from '$lib/types/UserData';

	export let profileData: UserData = {};
</script>

<div class="flex h-full w-full flex-col items-center justify-center space-y-10">
	<h1 class="text-6xl text-white">How old are you?</h1>
	<div class="flex w-full justify-center space-x-7">
		<div class="form-control h-24 w-full max-w-xs">
			<!-- <label class="label">
              <span class="label-text text-4xl text-gray-50">Age:</span>
            </label> -->
			<input
				type="number"
				placeholder="9"
				class="input-bordered input h-full w-full font-mono text-4xl"
				bind:value={profileData.age} />
		</div>
	</div>
</div>
