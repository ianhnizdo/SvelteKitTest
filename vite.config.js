import { sveltekit } from '@sveltejs/kit/vite';
import { viteExternalsPlugin } from 'vite-plugin-externals'


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), viteExternalsPlugin()]
};

export default config;
