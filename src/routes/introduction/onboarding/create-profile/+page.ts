/**
 /src/routes/introduction/onboarding/create-profile/+page.ts
 +page.ts
 cml-narrative
 
 Created by Ian Thompson on January 9th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
*/

import type { PageLoad } from './$types';

import { error } from '@sveltejs/kit';

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

	if (page >= 1 && page != null) {
		return { page: Number(page) };
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;
