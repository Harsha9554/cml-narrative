<!--
 /src/routes/introduction/onboarding/create-profile/agent-spark-profile/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import ProfileContainer from '$lib/components/tablet/profiles/ProfileContainer.svelte';
	import { NavigationDirection } from '$lib/types/Enums';
	import { Assets } from '$lib/utils/Assets';

	/**
	 * Represents which profile to view in the container
	 */
	let index = 0;

	let profileExamples = [
		{
			name: 'Agent Gear',
			rank: 'Senior Agent',
			favoriteBadge: 'Robot Wrangler',
			img: Assets.Characters.AgentGear.talking,
			interests: ['Ride motorcycles', 'Eat empanadas', 'Watch race car tournaments']
		},
		{
			name: 'Agent Spark',
			rank: 'Junior Agent',
			favoriteBadge: 'Scratch Code Champion',
			img: Assets.Characters.AgentSpark.talking,
			interests: [
				'Build computers and understand how they work',
				'Read sci-fi books',
				'Play video games'
			]
		},
		{
			name: 'Agent Fern',
			rank: 'Senior Agent',
			favoriteBadge: 'Algorithm Ace',
			img: Assets.Characters.AgentFern.smile,
			interests: ['Water my plants', 'Travel to new places', 'Play piano']
		},
		{
			name: 'Captain Storm',
			rank: 'Captain',
			favoriteBadge: 'Machine Learning Master',
			img: Assets.Characters.CaptainStorm.smiling,
			interests: [
				"Watch thunderstorms (when it's safe of course!)",
				'Play volleyball',
				'Build robots'
			]
		}
	];

	const handleNavigation = (direction: NavigationDirection) => {
		if (direction == NavigationDirection.forward && index != profileExamples.length - 1) {
			index += 1;
		} else if (direction == NavigationDirection.backward && index != 0) {
			index -= 1;
		}
	};
</script>

<div class="h-full">
	<div class="h-5/6">
		<ProfileContainer profile={profileExamples[index]} />
	</div>
	<div class="flex w-full flex-col items-center justify-center space-y-6">
		<div class="flex items-center justify-center space-x-6">
			<button
				class="btn-primary btn"
				on:click={() => handleNavigation(NavigationDirection.backward)}>Previous</button>
			<button class="btn-primary btn" on:click={() => handleNavigation(NavigationDirection.forward)}
				>Next</button>
		</div>
		<a href="/introduction/onboarding/create-profile?page=5" class="btn-secondary btn">Go back</a>
	</div>
</div>
