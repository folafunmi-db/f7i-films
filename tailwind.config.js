const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			"3xl": "1199px",
			"4xl": "767px",
			"5xl": "991px",
			"6xl": "900px",
			...defaultTheme.screens,
		},

		extend: {
			fontFamily: {
				m: ["Montserrat Alternates", "sans-serif"],
				exo: ["Exo", "sans-serif"],
			},
			colors: {
				primary: {
					100: "#F12711",
					200: "#FD7201",
				},
			},
			height: {
				bd: "800px",
			},
		},
	},
	plugins: [require("@tailwindcss/custom-forms")],
};
