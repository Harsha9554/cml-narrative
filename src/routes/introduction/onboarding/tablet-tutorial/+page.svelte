<!--
 /src/routes/introduction/onboarding/tablet-tutorial/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import { goto } from '$app/navigation';
	import Introduction from '$lib/components/sequences/tablet/tablet-tutorial/Introduction.svelte';
	import SpotApplication from '$lib/components/sequences/tablet/tablet-tutorial/SpotApplication.svelte';
	import MegaJoulesMeter from '$lib/components/tablet/MegaJoulesMeter.svelte';
	import { tourManager, type Tour } from '$lib/components/tour/TourManager';
	import { NavigationDirection } from '$lib/types/Enums';
	import type { Line } from '$lib/types/Script';
	import { Assets } from '$lib/utils/Assets';
	import AudioPlayer from '$lib/components/audio/AudioPlayer.svelte';

	export let data;

	let line: Line;
	let audioSrc: string;

	$: {
		line = data.line;
		audioSrc = line.audio || '';

		// switch (line.id) {
		// 	case 1:
		// 		tourManager.add(tourSteps[0])
		// 		break;
		// 	case 2:
		// 		// tourManager.reset()
		// 		tourManager.add(tourSteps[1])
		// 		break;
		// 	case 3:
		// 		tourManager.add(tourSteps[2])
		// 		tourManager.add(tourSteps[3])

		// 	default:
		// 		break;
		// }
	}

	let tourSteps: Tour[] = [
		{
			showTour: true,
			message:
				'This is your SPOT tablet! You will use it for your mission to the future. It can do several different things.',
			bindTo: '#profile-element-tablet-intro',
			position: 'top'
		},
		{
			message: 'You can view and edit your SPOT agent profile',
			bindTo: '#tablet-app-container-profile',
			position: 'left',
			showTour: true
		},
		{
			message: "You can see the badges you've earned",
			bindTo: '#tablet-app-container-badges',
			position: 'left',
			showTour: true
		},
		{
			message:
				'You need to earn badges to move from Special Agent in Training to Advanced Special Agent',
			bindTo: '#tablet-app-container-badges',
			position: 'right',
			showTour: true
		},
		{
			message: 'The settings button lets you change the settings of the game.',
			bindTo: '#tablet-app-container-settings',
			position: 'left',
			showTour: true
		},
		{
			message: 'The power button closes your tablet.',
			bindTo: '#tablet-app-container-power',
			position: 'right',
			showTour: true
		},
		{
			message: 'This is the megajoules meter!',
			bindTo: '#megajoules-meter',
			position: 'top',
			showTour: true
		},
		{
			message: 'Use your travel log to share information nd send updates to SPOT Mission Control',
			bindTo: '#tablet-app-container-travel',
			position: 'left',
			showTour: true
		},
		{
			message: 'Complete entries within your Time Travel Log to power up. ',
			bindTo: '#',
			position: 'top',
			showTour: true
		},
		{
			message:
				'Mission Control will send you some megajoules of power each time you make an entry in your log.',
			bindTo: '#tablet-app-container-travel',
			position: 'right',
			showTour: true
		}
	];

	/**
	 * Check the keycode that has been emitted from a Keydown Event on the Window to determine how we should navigate the user
	 * through the scene.
	 *
	 * Event keys were found by using the following site below:
	 *
	 * https://www.toptal.com/developers/keycode
	 *
	 * @param event Keyboard Event emitted from  the Window
	 *
	 */
	const handleKeydownEvent = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowRight':
			case ' ':
				handleNavigation(NavigationDirection.forward);
				break;
			case 'ArrowLeft':
				handleNavigation(NavigationDirection.backward);
			default:
				break;
		}
	};

	/**
	 * Determine the state of the DialogEvent that was emitted. Then, we will navigate
	 * the user to the appropriate url with appropriate querystring which represents
	 * which line in the script should be returned to the user.
	 */
	const handleNavigation = (direction: NavigationDirection) => {
		// tourManager.reset()

		if (direction == NavigationDirection.forward) {
			if (line.id == 9) {
				goto('/introduction/bot-buddy?page=1');
			} else {
				goto(`/introduction/onboarding/tablet-tutorial?page=${line.id + 1}`);
			}
		} else if (direction == NavigationDirection.backward && line.id > 1) {
			goto(`/introduction/onboarding/tablet-tutorial?page=${line.id - 1}`);
		}
	};

	const handleAppContainerEvent = (e: CustomEvent<{ id: string; event: string }>) => {
		let { event, id } = e.detail;

		console.log(event, id);

		if (event == 'mount') {
			let tours: Tour[] = tourSteps.filter((t) => t.bindTo == id);
			// console.log("should mount: ", tours);

			tours.forEach((tour) => {
				console.log('adding: ', tour);

				tourManager.add(tour);
			});
		}

		if (event == 'destroy') {
			let tours: Tour[] = tourSteps.filter((t) => t.bindTo == id);
			tours.forEach((tour) => {
				console.log('removing: ', tour);

				tourManager.remove(tour);
			});
		}
	};
</script>

<svelte:window on:keydown|preventDefault={handleKeydownEvent} />

<div class="relative z-0 h-full w-full rounded-md">
	<div class="flex h-full w-full rounded-md">
		<button
			class={`rotate-180 px-2 `}
			on:click={() => handleNavigation(NavigationDirection.backward)}>
			<p
				class="bg-lapiz-blue w-fit rounded-full p-8 text-3xl text-white transition-all duration-200 ease-in-out hover:opacity-80">
				➜
			</p>
		</button>
		<div class="w-full">
			<AudioPlayer src={audioSrc} />
			{#if line.id == 1}
				<Introduction on:applicationContainerEvent={handleAppContainerEvent} />
			{:else if line.id == 2}
				<SpotApplication
					title="Profile"
					img={Assets.Tablet.profile}
					on:applicationContainerEvent={handleAppContainerEvent} />
			{:else if line.id == 3}
				<SpotApplication
					title="Badges"
					img={Assets.Tablet.badges}
					on:applicationContainerEvent={handleAppContainerEvent} />
			{:else if line.id == 4}
				<SpotApplication
					title="Settings"
					img={Assets.Tablet.settingsButton}
					on:applicationContainerEvent={handleAppContainerEvent} />
			{:else if line.id == 5}
				<SpotApplication
					title="Power"
					img={Assets.Tablet.powerButton}
					on:applicationContainerEvent={handleAppContainerEvent} />
			{:else if line.id == 6}
				<div class="flex h-full items-center justify-center" id="megajoules-container">
					<MegaJoulesMeter amount={14} on:applicationContainerEvent={handleAppContainerEvent} />
				</div>
			{:else if line.id == 7}
				<div class="flex h-full items-center justify-center" id="megajoules-dec-1">
					<p class="hud-red-blue-border max-w-xl px-3 py-5 text-3xl text-white ">
						Your time travel machine holds 1200 megajoules of power, which is exactly the amount it
						takes to get to the year 2075.
					</p>
				</div>
			{:else if line.id == 8}
				<div class="flex h-full items-center justify-center" id="megajoules-dec-1">
					<p class="hud-red-blue-border max-w-xl px-3 py-5 text-3xl text-white ">
						To return to the present day, you will need to refuel by gaining 100 megajoules of power
						while you are in the future.
					</p>
				</div>
			{:else if line.id == 9}
				<SpotApplication
					title="Travel"
					img={Assets.Tablet.travelLog}
					on:applicationContainerEvent={handleAppContainerEvent} />
			{/if}
		</div>
		<button class={`px-2 `} on:click={() => handleNavigation(NavigationDirection.forward)}>
			<p
				class="bg-lapiz-blue w-fit rounded-full p-8 text-3xl text-white transition-all duration-200 ease-in-out hover:opacity-80">
				➜
			</p>
		</button>
	</div>
	<div
		class="bg-jet absolute inset-0 z-10 mt-auto flex h-fit items-end  justify-center shadow-md" />
</div>
