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
				light:  ["JetBrainsMono-Light", "sans-serif"],
				xlight:  ["JetBrainsMono-ExtraLight", "sans-serif"],
				thin:  ["JetBrainsMono-Thin", "sans-serif"],
				regular: ["JetBrainsMono-Regular", "sans-serif"],
				medium:  ["JetBrainsMono-Medium", "sans-serif"],
				semibold:  ["JetBrainsMono-SemiBold", "sans-serif"],
				jbold:  ["JetBrainsMono-Bold", "sans-serif"],
				xbold:  ["JetBrainsMono-ExtraBold", "sans-serif"],
			},
		},
	},
	plugins: [],
};