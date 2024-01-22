<!--
 /src/routes/introduction/onboarding/+layout.svelte
 +layout.svelte
 cml-narrative
 
 Created by Ian Thompson on January 9th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Scene from '$lib/components/scene/Scene.svelte';
	import Tablet from '$lib/components/tablet/Tablet.svelte';
</script>

<!-- <Scene background="/img/backgrounds/Spark_Lab.jpg">
    <div slot="content" class="h-full w-full py-4 px-12">    
        <Tablet>
            <slot></slot>
        </Tablet>
    </div>

</Scene> -->

<Tablet>
	<slot />
</Tablet>
