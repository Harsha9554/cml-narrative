<!--
 /src/routes/tablet-test/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on May 27th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->

<!-- <div class="w-screen h-screen bg-blue-900 px-36 py-24">
    <div class="w-full h-full ring-4 ring-blue-500 rounded-md shadow-2xl shadow-white grid-background">
        <div class="text-center text-7xl font-mokoto text-white p-24"> Welcome, New SPOT Agent!</div>
    </div>
</div> -->
<!-- 
<div class="w-screen h-screen bg-blue-900 px-36 py-24">
    <div class="w-full h-full ring-4 ring-blue-500 rounded-md shadow-2xl shadow-white grid-background">
        <div class="text-center text-7xl font-mokoto text-white p-24"> Welcome, New SPOT Agent!</div>
    </div>
    <div class="flex items-end w-full justify-end space-x-5">
        <img src="/img/svg/gear.svg" alt="" class="h-20 w-20">
        <img src="/img/svg/power-button.svg" alt="" class="h-20 w-20">

    </div>
</div> -->

<div class="h-screen w-screen bg-dark-navy p-7 ">
	<div class=" flex h-full w-full flex-col rounded-lg">
		<div class="flex h-fit w-full justify-between p-4 font-mokoto">
			<div class="flex items-center space-x-3 align-middle">
				<p class="text-5xl font-bold text-white">S.P.O.T</p>
				<img src="/img/logos/SPOT-dots.svg" class="h-full w-24" alt="" />
			</div>
			<p class="text-xl font-bold text-white">Solving Problems of Tomorrow</p>
		</div>
		<div class="tablet-gradient glow  h-full">
			<div class="grid-background h-full w-full" />
			<!-- <slot></slot> -->
		</div>
		<div class="flex h-fit justify-end space-x-5 pt-3 text-center text-white">
			<img src="/img/svg/gear.svg" alt="" class="h-20 w-20" />
			<img src="/img/svg/power-button.svg" alt="" class="h-20 w-20" />
		</div>
	</div>
</div>
