<!--
 /src/routes/activities/draw-an-algorithim/+page.svelte
 +page.svelte
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	import Tablet from '$lib/components/tablet/Tablet.svelte';

	import ImageResponse from '$lib/components/activities/free-response/ImageResponse.svelte';

	import { getContext } from 'svelte';
	import DataService from '$lib/utils/DataService';
	import { goto } from '$app/navigation';

	let hasRecievedResponse;

	// const hanldeImageSubmission = async (event) => {
	// 	console.log(event);

	// 	try {
	// 		await DataService.Data.uploadResponseImages('machineLearning', event.detail.image)
	// 		goto("/training?page=14")
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const handleImageSubmission = async (event: CustomEvent<any>) => {
		const images: HTMLImageElement[] | HTMLOrSVGElement = event.detail.images;
		let imageUrlsS3: string[] = [];
		try {
			if (images instanceof Array) {
				const promises = images.map(async (image) => {
					let res = await DataService.Data.uploadImageOrSvgToS3(image.src, 'image');
					return res;
				});
				imageUrlsS3 = await Promise.all(promises);
				console.log('imageurls: ', imageUrlsS3);
				await DataService.Data.uploadResponseImages('machineLearning', imageUrlsS3, 'image');
			} else {
				let res = await DataService.Data.uploadImageOrSvgToS3(images, 'svg');
				await DataService.Data.uploadResponseImages('machineLearning', res, 'svg');
			}
			goto('/training?page=14');
		} catch (error) {
			console.error(error);
		}
	};
</script>

<Tablet>
	<ImageResponse
		promptedTechnology="Machine Learning"
		on:imageSubmitted={handleImageSubmission}
		href="/training?page=14" />
</Tablet>
