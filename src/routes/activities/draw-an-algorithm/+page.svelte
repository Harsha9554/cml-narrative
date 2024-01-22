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

	let hasRecievedResponse = false;

	// const hanldeImageSubmission = async (event) => {
	// 	console.log(event);
	// 	console.log(typeof event.detail.image);
	// 	try {
	// 		// await DataService.Data.uploadResponseImages('algorithm', event.detail.image);
	// 		console.log('chudham image src: ', event.detail.image);
	// 		console.log(typeof event.detail.image);
	// 		hasRecievedResponse = true;
	// 		goto('/training?page=11');
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
				await DataService.Data.uploadResponseImages('algorithm', imageUrlsS3, 'image');
			} else {
				let res = await DataService.Data.uploadImageOrSvgToS3(images, 'svg');
				await DataService.Data.uploadResponseImages('algorithm', res, 'svg');
			}
			goto('/training?page=11');
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = () => {
		console.log('submit');
		console.log(hasRecievedResponse);

		if (hasRecievedResponse) {
			goto('/training?page=11');
		}
	};
</script>

<Tablet>
	<ImageResponse
		promptedTechnology="an Algorithm"
		href="/training?page=11"
		on:imageSubmitted={handleImageSubmission}
		on:submitClicked={handleSubmit} />
</Tablet>
