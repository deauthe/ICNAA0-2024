/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [tailwindTypography, daisyui],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#000000",
					"primary-content": "#ffffff",
					secondary: "#Cf2150",
					"secondary-content": "#ffffff",
					accent: "#09003f",
					"accent-content": "#ffffff",
					neutral: "#100605",
					"neutral-content": "#c9c5c5",
					"base-100": "#fff7f6",
					"base-200": "#ded7d6",
					"base-300": "#beb7b7",
					"base-content": "#161515",
					info: "#a8a29e",
					"info-content": "#0a0a09",
					success: "#bef264",
					"success-content": "#0d1403",
					warning: "#fdba74",
					"warning-content": "#160d05",
					error: "#fca5a5",
					"error-content": "#160a0a",
				},
			},
		], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ":root", // The element that receives theme color CSS variables
	},
};
