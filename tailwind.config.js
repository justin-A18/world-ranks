/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: 'url(/assets/hero-image-wr.jpg)',
			},
			fontFamily: {
				vietnamPro: '"Be Vietnam Pro", sans-serif',
			},
		},
	},
	plugins: [],
};
