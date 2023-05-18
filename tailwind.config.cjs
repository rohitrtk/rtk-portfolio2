const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"snp-cover": "url('./src/assets/images/snp-1.png')",
				"kk-cover": "url('./src/assets/images/kk-1.png')",
				"pg-cover": "url('./src/assets/images/pomstagram-1.png')"
			},
			fontFamily: {
				'heading': ['Merriweather', 'serif'],
				'body': ['Quattrocento', 'serif'],
			},
			colors: {
				slate: {
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
					950: "#020617"
				},
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#0a0a0a",
				}
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
	],
});
