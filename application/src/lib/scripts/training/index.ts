/**
 /src/lib/scripts/training/index.ts
 index.ts
 cml-narrative
 
 Created by Ian Thompson on January 16th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { Script, Line } from '$lib/types/Script';

import type { UserData } from '$lib/types/UserData';
import { agentData } from '$lib/utils/stores/store';

let agent: UserData = {};

agentData.subscribe((value) => {
	agent = value as UserData;
});

const script: Script = {
	lines: [
		{
			id: 1,
			speaker: 'Agent Spark',
			dialog: "It's time for your SPOT Agent Training!",
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 2,
			speaker: 'Agent Spark',
			dialog: 'We will start by talking about technology!',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 3,
			speaker: 'Captain Storm',
			dialog: '',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 4,
			speaker: 'Agent Spark',
			dialog: 'It can be tricky...',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 5,
			speaker: 'Captain Storm',
			dialog: 'On your SPOT Tablet, tell us who it harms or helps.',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 6,
			speaker: 'Agent Spark',
			dialog: 'Ever heard of Algorithms?',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 7,
			speaker: 'Agent Spark',
			dialog: '...',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 8,
			speaker: 'Agent Spark',
			dialog: 'Gear, did you overload the generator again?',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 9,
			speaker: 'Agent Gear',
			dialog: 'Yeah, sorry! Fixing it now!',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 10,
			speaker: 'Agent Spark',
			dialog: 'Anyway, back to algorithms. What do you think it is?',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 11,
			speaker: 'Captain Storm',
			dialog:
				'There is no right or wrong answer. We need to know what you know to get you ready for your trip.',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 12,
			speaker: 'Captain Storm',
			dialog: `Interesting thoughts, ${agent.agentName}!`,
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 13,
			speaker: 'Agent Spark',
			dialog: 'The phrase "machine learning" has become popular today. What o you think it means?',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 14,
			speaker: 'Agent Spark',
			dialog:
				'Remember, there is no right or wrong answer, but we need to know what you know to get you ready for your trip!',
			avatar: '/img/characters/captain-storm/storm_yeah.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 15,
			speaker: 'Agent Spark',
			dialog: `WAHOOO! Yay, ${agent.agentName}!`,
			avatar: '/img/characters/captain-storm/storm_dance.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 16,
			speaker: 'Captain Storm',
			dialog:
				'Congratulations, you have earned your Agent-in-Training badge! You are now an official SPOT Agent!',
			avatar: '/img/characters/captain-storm/clapping_storm.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 17,
			speaker: 'Captain Storm',
			dialog: 'Check your SPOT Tablet to see your new BADGE!',
			avatar: '/img/characters/captain-storm/storm_gesture_3.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 18,
			speaker: 'Agent Gear',
			dialog: `Hola, almost there ${agent.agentName}!`,
			avatar: '/img/characters/agent-gear/vanil_thumbs_up.png',
			background: '/img/backgrounds/captain_office.jpg'
		},
		{
			id: 19,
			speaker: 'Agent Gear',
			dialog:
				'Your bot buddy has been loaded with information for the mission. You are now ready to travel to 2075!',
			avatar: '/img/characters/agent-gear/vanilla_talking.png',
			background: '/img/backgrounds/captain_office.jpg'
		}
	],
	length: 19
};
export default script;
