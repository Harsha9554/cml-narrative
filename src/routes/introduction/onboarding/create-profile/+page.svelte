<!--
 /src/routes/introduction/onboarding/create-profile/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 9th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { goto } from '$app/navigation';
	import Age from '$lib/components/sequences/tablet/create-profile/Age.svelte';
	import AgentName from '$lib/components/sequences/tablet/create-profile/AgentName.svelte';
	import ChooseAnAvatar from '$lib/components/sequences/tablet/create-profile/ChooseAnAvatar.svelte';
	import Interest from '$lib/components/sequences/tablet/create-profile/Interest.svelte';
	import Name from '$lib/components/sequences/tablet/create-profile/Name.svelte';
	import ClickToViewProfileBanner from '$lib/components/tablet/ClickToViewProfileBanner.svelte';
	import TabletNavigationController from '$lib/components/tablet/TabletNavigationController.svelte';
	import { tourManager } from '$lib/components/tour/TourManager';
	import { NavigationDirection } from '$lib/types/Enums';
	import type { UserData } from '$lib/types/UserData';
	import DataService from '$lib/utils/DataService';
	import { agentData } from '$lib/utils/stores/store';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	/**
	 * Current page number which represents the position in the create-profile sequence. This
	 * will get set from the response from +page.ts as a querystring
	 */
	let page: number;

	/**
	 * Base URL for which we will use for navigation within the create-profile sequence
	 */
	let baseNavigationURL = '/introduction/onboarding/create-profile?page=';

	const numberOfPageSequences = 6;

	let profileData: UserData = {
		name: {
			first: '',
			last: ''
		},
		age: undefined,
		interests: [],
		agentName: ''
	};

	let mounted = false;
	$: page;

	$: {
		/**
		 * page is reactive and dependent on what is being returned from the "server." Here,
		 * we are telling Svelte to keep its eye on when the page value changes so we can
		 * react to it.
		 */
		page = data.page;

		// Any time profile data is changed, the store is immediatly updated
		// agentData.set(profileData);
	}

	onMount(() => {
		mounted = true;
		// profileData = $agentData;

		console.log('pd: ', profileData);
	});
	onDestroy(() => {
		mounted = false;
	});

	/**
	 * Progress the user through the profile creation sequence
	 * @param direction NavigationDirection enum representing the direction of navigation
	 */
	const handleNavigation = (direction: NavigationDirection) => {
		console.log(profileData);

		// Set the agentData store, which will allow us to access this profile data across the application
		agentData.set(profileData);

		if (direction == NavigationDirection.backward && page > 1) {
			goto(baseNavigationURL + (page - 1));
		} else if (direction == NavigationDirection.forward && page < numberOfPageSequences) {
			goto(baseNavigationURL + (page + 1));
		}
	};

	const handleSubmit = async () => {
		try {
			// await DataService.Data.setProfileData(profileData);
			alert('created agent successfully!');
			await DataService.Auth.signUp(profileData);
			goto('/introduction/onboarding/create-profile/confirmation');
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class=" relative z-0 h-full w-full rounded-md">
	<div class="flex h-full  w-full rounded-md">
		<button
			class={`rotate-180 px-2 ${page <= 1 ? 'opacity-0' : ''}`}
			on:click={() => handleNavigation(NavigationDirection.backward)}>
			<img src="/img/svg/dialog-arrow-blue.svg" alt="" class="h-16 w-16" />
			<!-- <p class="bg-lapiz-blue text-white text-3xl w-fit p-8 rounded-full hover:opacity-80 transition-all ease-in-out duration-200">➜</p> -->
		</button>
		<div class="h-full w-full">
			{#if page == 1}
				<Name bind:profileData />
			{:else if page == 2}
				<Age bind:profileData />
			{:else if page == 3}
				<Interest bind:profileData prompt="What do you like to do?" index={0} />
			{:else if page == 4}
				<Interest bind:profileData prompt="Can you think of anything else?" index={1} />
			{:else if page == 5}
				<Interest bind:profileData prompt="One more thing you enjoy" index={2} />
				<!-- {:else if page == 6}
				<ChooseAnAvatar bind:profileData /> -->
			{:else if page == 6}
				<AgentName bind:profileData on:submitClicked={handleSubmit} />
			{/if}
		</div>
		<button
			class={`px-2 ${page >= numberOfPageSequences ? 'opacity-0' : ''}`}
			on:click={() => handleNavigation(NavigationDirection.forward)}>
			<img src="/img/svg/dialog-arrow-blue.svg" alt="" class="h-16 w-16" />
		</button>
	</div>
	{#if page == 3 || page == 4 || page == 5}
		<div class="absolute inset-0 z-10 mb-9 mt-auto flex  h-fit items-end justify-center  shadow-md">
			<ClickToViewProfileBanner />
		</div>
	{/if}
</div>
