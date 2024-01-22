import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

import preprocessReact from 'svelte-preprocess-react/preprocessReact';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocessReact({
		preprocess: vitePreprocess()
	}),

	kit: {
		adapter: adapter()
	},
	server: {
		port: 5000,
		strictPort: false
	},
	preview: {
		port: 6000,
		strictPort: false
	}
};

export default config;
