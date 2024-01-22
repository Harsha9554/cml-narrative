/**
 /src/lib/components/tour/TourManager.ts
 TourManager.ts
 cml-narrative
 
 Created by Ian Thompson on May 30th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import { writable } from 'svelte/store';
import remove from 'lodash/remove';

/**
 * This creates a custom Svelte store. Here, we have access to typical Svelte store functions, but we can
 * add custom actions for our own needs.
 * @returns Custom Svelte store
 */
const createTourManager = () => {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		set,
		/**
		 * Add a tour to the tour manager
		 * @param tour tour to add to the tour manager
		 */
		add: (tour: Tour) => {
			update((currentTours) => {
				return [...currentTours, tour];
			});
		},
		/**
		 * This function is a little misleading as we are not directly removing it from the tour array. Instead, we are
		 * passing in the desired tour we want to remove and then setting it's showTour attribute to false. Then, in the
		 * Popover.svelte, we will determine if this attribute has changed. If it has, then we will remove it from the
		 * DOM.
		 *
		 * This is a hack and need to be FIXME:.
		 *
		 * @param tour the tour you want to remove from the DOM
		 */
		remove: (tour: Tour) => {
			update((currentTours) => {
				// tour.showTour = false;
				// console.log("current: ", currentTours);

				// Filter the currentTours
				let withDelete = currentTours.filter((t: Tour) => t.bindTo != tour.bindTo);

				return withDelete;
			});
		},
		/**
		 * Resets the TourManager store to be empty
		 */
		reset: () => set([])
	};
};

/**
 * the tourManager is a Svelte store that keeps track of all of the "tours" that will be displayed within
 * the application. Stores help us to manage the application's "state" and allow us to access and modify
 * this state from different components
 */
export const tourManager = createTourManager();

/**
 * Defines a tour which can be consumes by TourManager and for creating and consuming Tours (popovers)
 */
export interface Tour {
	/**
	 * True/false as to whether or not to show the tour
	 */
	showTour: boolean;
	/**
	 * The message you want to appear within the tour
	 */
	message: string;
	/**
	 * This determines which HTML element to bind the tour to. This should be a string and not a direct reference
	 * as a direct reference will be created when the Popover is rendered to the DOM. The string should include
	 * the "#"
	 */
	bindTo: string;
	/**
	 * Defines the placement of tour message. This is determined by Popper.js and more documentation cand
	 * be found here: https://popper.js.org/docs/v2/constructors/
	 *
	 * Possible options include:
	 * - auto
	 * - auto-start
	 * - auto-end
	 * - top
	 * - top-start
	 * - top-end
	 * - bottom
	 * - bottom-end
	 * - right
	 * - right-start
	 * - right-end
	 * - left
	 * - left-start
	 * - left-end
	 */
	position: string;
}
