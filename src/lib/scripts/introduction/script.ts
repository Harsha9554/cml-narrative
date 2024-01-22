/**
 /src/lib/scripts/introduction/script.ts
 script.ts
 cml-narrative
 
 Created by Ian Thompson on January 7th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { Script, Line } from '$lib/types/Script';

const script: Script = {
	lines: [
		{
			id: 1,
			speakers: ['Captain Storm'],
			dialog: 'Welcome to the SPOT Agency, my name is Captain Storm.',
			avatars: ['/img/characters/captain-storm/storm_yeah.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s1.wav',
			pos: 'right'
		},
		{
			id: 2,
			speakers: ['Captain Storm'],
			dialog:
				'Recently, a team of scientists and researchers found a way to travel into the future! ',
			avatars: ['/img/characters/captain-storm/gesture_2_storm.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s2.wav',
			pos: 'right'
		},
		{
			id: 3,
			speakers: ['Captain Storm'],
			dialog:
				'But now they need volunteers to go on a mission to the year 2075 to see what the future is like.',
			avatars: ['/img/characters/captain-storm/gesture_2_storm.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s6.wav',
			pos: 'right'
		},
		{
			id: 4,
			speakers: ['Captain Storm'],
			dialog:
				'Great choice! We are specifically interested in the type of technology that will be available in the future.',
			avatars: ['/img/characters/captain-storm/gesture_2_storm.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s7.wav',
			pos: 'right'
		},
		{
			id: 5,
			speakers: ['Captain Storm'],
			dialog:
				'By seeing how technology works and affects people in the future, we might be able to prevent potential problems.',
			avatars: ['/img/characters/captain-storm/storm_yeah.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s8.wav',
			pos: 'right'
		},
		{
			id: 6,
			speakers: ['Captain Storm'],
			dialog:
				'Your mission is to travel to the future and spot any problems with technology. Then you will try and solve those problems.',
			avatars: ['/img/characters/captain-storm/gesture_2_storm.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s10.wav',
			pos: 'right'
		},
		{
			id: 7,
			speakers: ['Captain Storm'],
			dialog:
				'You will bring back information that will help you design technologies that are good for your community.',
			avatars: ['/img/characters/captain-storm/storm_gesture_4.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s11.wav',
			pos: 'right'
		},
		{
			id: 8,
			speakers: ['Captain Storm'],
			dialog:
				'So glad you are now a part of our team! Now our agents will get you started and set up in the SPOT system.',
			avatars: ['/img/characters/captain-storm/storm_thumbs_up.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s12.wav',
			pos: 'right'
		},
		{
			id: 9,
			speakers: ['Agent Fern', 'Captain Storm'],
			dialog: 'Agent Fern is our brilliant physicist who developed a way to time travel!',
			avatars: [
				'/img/characters/agent-fern/fern_wave_inverted.png',
				'/img/characters/captain-storm/storm_gesture_4.png'
			],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s13.wav',
			pos: 'normal'
		},
		{
			id: 10,
			speakers: ['Agent Gear', 'Captain Storm'],
			dialog: 'Agent Gear is our engineer who designed and built special SPOT robots!',
			avatars: [
				'/img/characters/agent-gear/vanil_wave.png',
				'/img/characters/captain-storm/storm_gesture_4.png'
			],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s14.wav',
			pos: 'normal'
		},
		{
			id: 11,
			speakers: ['Agent Spark', 'Captain Storm'],
			dialog: 'Agent Spark is our software developer. She writes the code for all our SPOT tech!',
			avatars: [
				'/img/characters/agent-spark/spark_wave.png',
				'/img/characters/captain-storm/storm_gesture_4.png'
			],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s15.wav',
			pos: 'normal'
		},
		{
			id: 12,
			speakers: ['Agent Spark'],
			dialog: 'Hello! Great to meet you Agent...',
			avatars: ['/img/characters/agent-spark/spark_wave.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s14.wav',
			pos: 'right'
		},
		{
			id: 13,
			speakers: ['Agent Spark'],
			dialog: "Oohh! you don't have a secret agent name yet! That's so important!",
			avatars: ['/img/characters/agent-spark/spark_surprised.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s16.wav',
			pos: 'right'
		},
		{
			id: 14,
			speakers: ['Agent Spark'],
			dialog:
				'Your agent name should be something that inspires you! Mine is Agent Spark because I love electronic gadgets. ',
			avatars: ['/img/characters/agent-spark/spark_gesture_1.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s18.wav',
			pos: 'left'
		},
		{
			id: 15,
			speakers: ['Agent Fern', 'Agent Spark'],
			dialog: 'In addition to physics, Agent Fern loves plants and things that grow.',
			avatars: [
				'/img/characters/agent-fern/fern_sweet.png',
				'/img/characters/agent-spark/spark_gesture_1_inverted.png'
			],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s19.wav',
			pos: 'normal'
		},
		{
			id: 16,
			speakers: ['Agent Gear', 'Agent Spark'],
			dialog: 'Agent Gear is inspired by motorcycles!',
			avatars: [
				'/img/characters/agent-gear/vanil_cute_inverted.png',
				'/img/characters/agent-spark/spark_gesture_1_inverted.png'
			],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s20.wav',
			pos: 'normal'
		},
		{
			id: 17,
			speakers: ['Agent Spark'],
			dialog: "What inspires you? I'm sure you will choose a great secret agent name!",
			avatars: ['/img/characters/agent-spark/spark_aww.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s21.wav',
			pos: 'left'
		},
		{
			id: 18,
			speakers: ['Agent Spark'],
			dialog:
				"Open your SPOT tablet. You will use this to keep track of your mission to the future and communicate to mission control Let's get yours set up!",
			avatars: ['/img/characters/agent-spark/spark_talking.png'],
			background: '/img/backgrounds/Agency_Walkway.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s22.wav',
			pos: 'left'
		}
	],
	length: 18
};
export default script;
