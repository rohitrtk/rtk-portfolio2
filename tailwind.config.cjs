/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'heading': ['Merriweather', 'serif'],
				'text': ['Quattrocento', 'serif'],
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
