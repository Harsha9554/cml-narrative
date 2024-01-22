/**
 /src/lib/scripts/training/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { Script } from '$lib/types/Script';

import type { UserData } from '$lib/types/UserData';
import { agentData } from '$lib/utils/stores/store';

let agent: UserData = {
	name: {
		first: '',
		last: ''
	},
	age: undefined,
	interests: [],
	agentName: ''
};

agentData.subscribe((value) => {
	agent = value as UserData;
});

const script: Script = {
	lines: [
		{
			id: 1,
			speakers: ['Agent Spark'],
			dialog: "It's time for your SPOT Agent Training!",
			avatars: ['/img/characters/agent-spark/spark_gesture_1.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark_and_computer/computer_l0_s72_and_agent_spark.wav',
			pos: 'left'
		},
		{
			id: 2,
			speakers: ['Agent Spark'],
			dialog: 'We will start by talking about technology!',
			avatars: ['/img/characters/agent-spark/spark_talking.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s72.wav',
			pos: 'left'
		},
		{
			id: 3,
			speakers: [''],
			dialog: '',
			avatars: [],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/computer/computer_l0_s73.wav'
		},
		{
			id: 4,
			speakers: ['Agent Spark'],
			dialog:
				'It can be tricky... On your SPOT Tablet, tell us which technologies you think are helpful or harmful.',
			avatars: ['/img/characters/agent-spark/spark_unsure_2.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark_and_computer/computer_l0_s74_and_agent_spark.wav',
			pos: 'left'
		},
		{
			id: 6,
			speakers: ['Agent Spark'],
			dialog: 'Ever heard of Algorithms?',
			avatars: ['/img/characters/agent-spark/spark_gesture_inverted.png'],
			background: '/img/backgrounds/captain_office.jpg',
			// audio: '/audio/level0/agent_spark/agent_spark_l0s80.wav'
			audio: '/audio/level0/agent_spark_and_computer/computer_l0_s80_and_agent_spark.wav',
			pos: 'left'
			// audio: [
			// 	'/audio/level0/computer/computer_l0_s74.wav',
			// 	'/audio/level0/agent_spark/agent_spark_l0s80.wav']
		},
		{
			id: 7,
			speakers: ['Agent Spark'],
			dialog: '...',
			avatars: ['/img/characters/agent-spark/spark_sad.png'],
			background: '/img/backgrounds/captain_office.jpg',
			pos: 'left'
		},
		{
			id: 8,
			speakers: ['Agent Spark'],
			dialog: 'Gear, did you overload the generator again?',
			avatars: ['/img/characters/agent-spark/spark_sad.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s82.wav',
			pos: 'left'
		},
		{
			id: 9,
			speakers: ['Agent Gear'],
			dialog: "Oops, Sorry! I'm fixing it now!",
			avatars: ['/img/characters/agent-gear/vanilla_idea.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_gear/agent_gear_l0s90.wav',
			pos: 'right'
		},
		{
			id: 10,
			speakers: ['Agent Spark'],
			dialog: 'Anyway, back to algorithms. What do you think it is?',
			avatars: ['/img/characters/agent-spark/spark_gesture_1.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s84.wav',
			pos: 'left'
		},
		{
			id: 11,
			speakers: ['Captain Storm'],
			dialog:
				'There is no right or wrong answer. We need to know what you know to get you ready for your trip.',
			avatars: ['/img/characters/captain-storm/gesture_2_storm.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s85.wav',
			pos: 'right'
		},
		{
			id: 12,
			speakers: ['Captain Storm'],
			dialog: `Interesting thoughts, Agent ${agent.agentName}!`,
			avatars: ['/img/characters/captain-storm/storm_thumbs_up.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s88.wav',
			pos: 'right'
		},
		{
			id: 13,
			speakers: ['Agent Spark'],
			dialog: 'The phrase "machine learning" has become popular today. What do you think it means?',
			avatars: ['/img/characters/agent-spark/spark_talking.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark_and_computer/computer_l0_s90_and_agent_spark.wav',
			pos: 'left'
			// audio: [
			// 	'/audio/level0/computer/computer_l0_s90.wav',
			// 	'/audio/level0/agent_spark/agent_spark_l0s89.wav',
			// ]
		},
		{
			id: 14,
			speakers: ['Agent Spark'],
			dialog:
				'Remember, there is no right or wrong answer, but we need to know what you know to get you ready for your trip!',
			avatars: ['/img/characters/agent-spark/spark_aww.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s90.wav',
			pos: 'left'
		},
		{
			id: 15,
			speakers: ['Agent Spark', 'Captain Storm'],
			dialog: `WAHOOO! Yay, ${agent.agentName}!`,
			avatars: [
				'/img/characters/agent-spark/spark_gesture_2_inverted.png',
				'/img/characters/captain-storm/storm_dance.png'
			],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_spark/agent_spark_l0s93.wav',
			pos: 'normal'
		},
		{
			id: 16,
			speakers: ['Captain Storm'],
			dialog:
				'Congratulations, you have earned your Agent-in-Training badge! You are now an official SPOT Agent! Check your SPOT tablet to see your new badge!',
			avatars: ['/img/characters/captain-storm/clapping_storm_inverted.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/captain_storm/captn_storm_l0s94.wav',
			pos: 'right'
		},
		{
			id: 18,
			speakers: ['Agent Gear'],
			dialog: `In addition to earning your Training Badge, your Bot Buddy has been loaded with information that might be needed for the mission. You are now ready to travel to the year 2075!`,
			avatars: ['/img/characters/agent-gear/vanilla_talking.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_gear/agent_gear_l0s102.wav',
			pos: 'right'
		},
		{
			id: 19,
			speakers: ['Agent Gear'],
			dialog:
				'One more thing before you go. We need to know more about what you think by answering a few questions. Open your tablet at the top of your screen and complete the survey to tell us more about you.',
			avatars: ['/img/characters/agent-gear/vanilla_talking.png'],
			background: '/img/backgrounds/captain_office.jpg',
			audio: '/audio/level0/agent_gear/agent_gear_l0s103.wav',
			pos: 'left'
		}
	],
	length: 19
};
export default script;
