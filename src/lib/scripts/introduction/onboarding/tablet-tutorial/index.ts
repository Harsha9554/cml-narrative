/**
 /src/lib/scripts/introduction/onboarding/tablet-tutorial/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { Script, Line } from '$lib/types/Script';

const script: Script = {
	lines: [
		{
			id: 1,
			speakers: ['Agent Spark'],
			dialog: 'This is your SPOT tablet! Used for all official SPOT missions!',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s37.wav'
		},
		{
			id: 2,
			speakers: ['Agent Spark'],
			dialog: 'Use your Travel Log to share information and send updated to SPOT Mission Control',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s38.wav'
		},
		{
			id: 3,
			speakers: ['Agent Spark'],
			dialog:
				'This is the profile button. You can check and edit your profile. You can see the progress of other agents too!',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s39.wav'
		},
		{
			id: 4,
			speakers: ['Agent Spark'],
			dialog:
				'You need to earn badges to move from "Special Agent in Training" to "Advanced Special Agent"',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s40.wav'
		},
		{
			id: 5,
			speakers: ['Agent Spark'],
			dialog:
				'The Settings button lets you change the color of your frame! I like mine to be yellow!',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s41.wav'
		},
		{
			id: 6,
			speakers: ['Agent Spark'],
			dialog:
				'Your Time Travel Machine holds 100 megajoules of power, which is exactly the amount it takes to get to the year 2075!',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s42.wav'
		},
		{
			id: 7,
			speakers: ['Agent Spark'],
			dialog:
				'To return to present dau, you will need to refuel by gaining 100 megajoules of power while you are in the future',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s43.wav'
		},
		{
			id: 8,
			speakers: ['Agent Spark'],
			dialog:
				'Complete entries within your Time Travel Log to power up. Mission Control will send you some megajoules of power each time you make an entry.',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s44.wav'
		},
		{
			id: 9,
			speakers: ['Agent Spark'],
			dialog: 'Now you have all the information on how to use the SPOT tablet!',
			avatars: ['/img/characters/agent-spark/spark_clapping.png'],
			background: '/img/backgrounds/Spark_Lab.jpg',
			audio: '/audio/level0/computer/computer_l0_s45.wav'
		}
	],
	length: 9
};
export default script;
