/**
 /src/lib/utils/stores/store.ts
 store.ts
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { UserData } from '$lib/types/UserData';
import { writable } from 'svelte/store';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import type { DragStackItem, HarmfulHelpfulItem } from '$lib/types/DragDropItem';

/**
 * A note on what this file does:
 *
 * This file defines "stores." Stores are Svelte's method of "state" management. Essentially, state is data that
 * needs to be accessed throughout the application. Typically, we can pass data to the different Svelte components via
 * props, however, sometimes this isn't feasible. For instance, every component might need to access a payers profile
 * information. Instead of having to pass that info between each of the components, we can create a store. These stores
 * are accessible throughout the application.
 *
 * So, in this file, we will define a few different stores for state we want to manage.
 *
 * By default, this does not persist. As in, once the browser is reloaded, the data is reset. So, we will need to make
 * calls to the API again to save data back into the stores, OR we can create special stores that will persist using
 * cookies, which is probably something we will do in the future.
 */

// export const agentData = writable({});
export const agentData = persist(writable({}), createLocalStorage(), 'agentData');

export const tabletPowerNavigation = writable({});

export const accessTokenStore = writable('');

/**
 * Defines the store for the Megajoules meter. A number 0-14 should be passed.
 * This store allows this information to be accessed throughout the application.
 */
export const megaJoulesMeter = writable(0);

export const drawResponse = writable();

let deafaultDragItems: DragStackItem[] = [
	{
		id: 1,
		itemId: 'iphone',
		title: 'iPhone',
		el: null,
		img: '/img/icons/mobile-app.png',
		type: undefined,
		reasoning: undefined
	},
	{
		id: 2,
		itemId: 'social-media',
		title: 'Social Media',
		el: null,
		img: '/img/icons/social-media.png',
		type: undefined,
		reasoning: undefined
	},
	{
		id: 3,
		itemId: 'internet',
		title: 'Internet',
		el: null,
		img: '/img/icons/wifi.png',
		type: undefined,
		reasoning: undefined
	},
	{
		id: 4,
		itemId: 'hospital',
		title: 'Hospital',
		el: null,
		img: '/img/icons/hospital.png',
		type: undefined,
		reasoning: undefined
	}
];

export const dragItemsStore = writable<DragStackItem[]>(deafaultDragItems);
export const harmfulHelpfulStore = writable<HarmfulHelpfulItem[]>([]);
