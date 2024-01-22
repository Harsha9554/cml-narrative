<!--
 /src/routes/+layout.svelte
 +layout.svelte
 cml-narrative
 
 Created by Ian Thompson on January 7th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu

 
 This file serves as the main layout handler. Any code present on this page will be present on all pages on this web application. 

 The "slot" component is dynamic, as other components can be fed into it. 

--->
<script>
	import TourWrapper from '$lib/components/tour/TourWrapper.svelte';
	import '../app.css';
	import Modal from 'svelte-simple-modal';
</script>

<svelte:head>
	<title>S.P.O.T - Solving Problems of Tomorrow</title>
</svelte:head>

<Modal>
	<div id="base-container" class="font-cantora hidden lg:block">
		<TourWrapper>
			<slot />
		</TourWrapper>
	</div>

	<div
		class="font-cantora flex h-screen flex-col items-center justify-center space-y-6 px-12 text-center align-middle lg:hidden ">
		<h1 class="text-5xl">Sorry, Agent!</h1>
		<p class="text-3xl">
			Your screen size is too small. Please use a compatible device to access the Agent Portal.
		</p>
	</div>
</Modal>
