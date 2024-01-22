<!--
 /src/routes/introduction/bot-buddy/select/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 14th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Scene from '$lib/components/scene/Scene.svelte';

	import BotBuddyBase from '$lib/components/bot-buddy/BotBuddyBase.svelte';
	import Tablet from '$lib/components/tablet/Tablet.svelte';

	let faceColor;
	let headOutline;

	import ColorPicker from 'svelte-awesome-color-picker';
	import { goto } from '$app/navigation';

	let rgb; // or hsv or hex

	let hex;

	const handleBotBuddySelect = () => {
		goto('/introduction/bot-buddy?page=14');
	};
</script>

<!-- <Scene background="/img/backgrounds/Spark_Lab.jpg">
	<div slot="content" class="h-full w-full p-12"> -->
<Tablet>
	<div class="text-center text-white">Select Bot Buddy</div>
	<div class="mt-8 flex justify-center space-x-6 text-2xl text-white">
		<button on:click={handleBotBuddySelect}>Bot Buddy 1</button>
		<button on:click={handleBotBuddySelect}>Bot Buddy 2</button>
		<button on:click={handleBotBuddySelect}>Bot Buddy 3</button>
		<button on:click={handleBotBuddySelect}>Bot Buddy 4</button>
	</div>
	<!-- <div class="h-full w-full flex justify-center items-center">
                <div class="w-96">

                </div>
                <div class="flex ">
                    <div class="flex flex-col">
                        <p class="text-white">Face color:</p>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-white">Face color:</p>

                    </div>

                </div>
            </div> -->
</Tablet>
<!-- <div class="bg-jet flex flex-col p-24 items-center justify-center text-white rounded-md shadow-md">
            <h1 class="text-4xl mb-9 ">Customize Your Bot Buddy</h1>
            <div class="h-96">
                <BotBuddyBase />

            </div>


        </div> -->
<!-- </div>
</Scene> -->
