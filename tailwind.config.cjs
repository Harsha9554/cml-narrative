/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
			},
			fontFamily: {
				cantora: ['Cantora One'],
				mokoto: ['Mokoto']
			},
			colors: {
				peach: '#ffbd59',
				jet: '#3e3c3c',
				independence: '#585f76',
				'lapiz-blue': '#29638C',
				'dark-navy': '#06112e',
				'tablet-blue': '#121965'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-10deg)' },
					'50%': { transform: 'rotate(10deg)' }
				},
				wobble: {
					'0%': { transform: 'translateX(0%)' },
					'15%': { transform: 'translateX(-25%) rotate(-5deg)' },
					'30%': { transform: 'translateX(20%) rotate(3deg)' },
					'45%': { transform: 'translateX(-15%) rotate(-3deg)' },
					'60%': { transform: 'translateX(10%) rotate(2deg)' },
					'75%': { transform: 'translateX(-5%) rotate(-1deg)' },
					'100%': { transform: 'translateX(0%)' }
				}
			},
			animation: {
				wiggle: 'wiggle 0.8s ease-in-out 4',
				wobble: 'wobble 0.8s ease-in-out 4'
			},
			scale: {
				'-1': '-1'
			},
			brightness: {
				40: '.40'
			}
		}
	},
	daisyui: {
		themes: ['light']
	},
	plugins: [require('daisyui')]
};
