<!--
 /src/lib/components/dialog/TabletDialogBox.svelte
 TabletDialogBox.svelte
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import type { Line } from '$lib/types/Script';

	export let line: Line;
</script>

<!-- <div class=" w-full text-white py-9 text-2xl flex items-center justify-center">
    <p>{line.dialog}</p>
    <img src={line.avatar} alt="" class="self-end">
</div> -->

<!-- <div class="w-full h-full bg-gray-200 flex justify-center items-center">
	<div class="bg-gray-400 w-full h-full relative z-0">
	  <div class="w-full h-28">
		<p>{line.dialog}</p>
	  </div>
	  <div class="absolute inset-0 flex justify-end items-center z-10 ">
		<img src={line.avatar} alt="" class="" />
	  </div>
	</div>
  </div> -->

<div class="flex w-full flex-col bg-jet p-5">
	<div class="relative z-20 flex w-fit items-end justify-between px-24 align-bottom ">
		<div class="relative bottom-9 z-20 h-fit w-fit rounded bg-peach px-3 text-4xl text-black">
			{line.speaker}
		</div>
	</div>
	<div class=" w-full px-9">
		<p class="max-w-6xl pr-5 text-center text-2xl text-white">{line.dialog}</p>
	</div>
	<div class="absolute bottom-0 mr-14 self-end">
		<img src={line.avatar} alt="" />
	</div>
</div>

<!-- <div class="flex flex-col px-4 w-full">
	<div class="flex justify-between align-bottom items-end z-20 relative w-full">
		<div class=" bg-peach w-fit h-fit z-20 rounded text-4xl px-3 text-black relative -bottom-4">
			{line.speaker}
		</div>
		<div class="self-end mr-14">
			<img src={line.avatar} alt="">
		</div>
	</div>

	<div class="w-full text-white p-4 rounded relative bg-jet ">
		<div class="grid grid-cols-5 text-3xl gap-4">
			<!-- <button class="rotate-180 mr-6" on:click={back}>
				<p class="bg-peach w-fit p-4 rounded-full hover:opacity-80 transition-all ease-in-out duration-200">➜</p>
			</button> -->
<!-- <p class="col-span-3 text-3xl leading-relaxed w-full h-36 ">
				{line.dialog}
			</p> -->
<!-- <button class="" on:click={forward}>
				<p class="bg-peach w-fit p-4 rounded-full hover:opacity-80 transition-all ease-in-out duration-200">➜</p>
			</button> -->
<!-- </div>
	</div>
</div> -->

<!-- <div class="flex flex-col px-4 w-full">
	<div class="flex justify-between align-bottom items-end z-20 relative w-full">
		<div class=" bg-peach w-fit h-fit z-20 rounded text-4xl px-3 text-black relative -bottom-4">
			{line.speaker}
		</div>
		<!-- <div class="self-end mr-14">
			<img src={line.avatar} alt="">
		</div> -->
<!-- </div>

	<div class="w-full text-white p-4 rounded relative bg-jet ">
		<div class="grid grid-cols-5 text-3xl gap-4">

			<p class="col-span-3 text-3xl leading-relaxed w-full h-36 ">
				{line.dialog}
			</p>

		</div>
	</div>
</div> -->
