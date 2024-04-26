/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			vintageNavy: '#153448',
			vintageBlue: '#3C5B6F',
			vintageBrown: '#948979',
			vintageBeige: '#DFD0B8',
			white: '#FFFFFF'
		},
		animation: {
			bounce: 'bounce 1s infinite'
		},
		keyframes: {
			bounce: {
				'0%': {
					transform: 'translateY(-5%)',
					'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
				},
				'50%': {
					transform: 'translateY(0)',
					'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
				},
				'100%': {
					transform: 'translateY(-5%)',
					'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
				}
			}
		},

		extend: {}
	},
	plugins: []
};
