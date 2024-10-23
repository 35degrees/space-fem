/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1440px',
		},
		fontFamily: {
			main: ['Bellefair', 'serif'],
			subCondensed: ['"Barlow Condensed"', 'sans-serif'],
			sub: ['Barlow', 'sans-serif'],
		},
		extend: {
			colors: {
				blue300: 'hsl(230,35%,7%)',
				blue900: 'hsl(231,77%,90%)',
			},
			fontSize: {
				'10xl': '9rem',
			},
		},
	},
	plugins: [],
}
