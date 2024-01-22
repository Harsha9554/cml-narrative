/**
 /src/routes/introduction/welcome/+page.ts
 +page.ts
 cml-narrative
 
 Created by Ian Thompson on January 10th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { PageLoad } from './$types';

import { error } from '@sveltejs/kit';

import script from '$lib/scripts/introduction/welcome';

export const load = (({ params, url }) => {
	/**
	 * Page number of the current route.
	 *
	 * This is found by grabbing the search param for "page".
	 *
	 * An example url could look like: www.website.com/introduction?page=XXXX
	 *
	 * The XXXX should be a number. We use this to determine what line of the script should be
	 * returned to the user.
	 */
	const page = url.searchParams.get('page');

	// Check to determine if the page is greater than one and less than the amount of lines in
	// the given script segment. If the request goes out of bounds, a 404 occurs
	if (page >= 1 && page <= script.length && page != null) {
		return {
			line: script.lines[page - 1],
			length: script.length
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
