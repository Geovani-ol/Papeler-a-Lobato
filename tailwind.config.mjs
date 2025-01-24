/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'charcoal': '#122620',
				'charcoal-light': '#1A3A3A',
				'goal': '#D6AD60',
				'goal-light': '#E8CFA3',
				'tan': '#B68D40'
			}
		},
	},
	plugins: [],
}
