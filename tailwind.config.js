/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#E9ECEF",
				midground: "#CED4DA",
				foreground: "#6C757D",
				black: "#212529",
				highlight: "#1985a1",
				danger: "#a4161a"
			},
			fontFamily: {
				thin: {
					DEFAULT: ["JetbrainsJetBrainsMono-Thin", "sans-serif"],
					italic: ["JetBrainsMono-ThinItalic", "sans-serif"],
				},
				light: {
					DEFAULT: ["JetbrainsJetBrainsMono-Light", "sans-serif"],
					italic: ["JetBrainsMono-LightItalic", "sans-serif"],
				},
				regular: {
					DEFAULT: ["JetbrainsJetBrainsMono-Regular", "sans-serif"],
					italic: ["JetBrainsMono-RegularItalic", "sans-serif"],
				},
				medium: {
					DEFAULT: ["JetbrainsJetBrainsMono-Medium", "sans-serif"],
					italic: ["JetBrainsMono-MediumItalic", "sans-serif"],
				},
				semibold: {
					DEFAULT: ["JetbrainsJetBrainsMono-SemiBold", "sans-serif"],
					italic: ["JetBrainsMono-SemiBoldItalic", "sans-serif"],
				},
				bold: {
					DEFAULT: ["JetbrainsJetBrainsMono-Bold", "sans-serif"],
					italic: ["JetBrainsMono-BoldItalic", "sans-serif"],
				},
			},
		},
	},
	plugins: [],
};