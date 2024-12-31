import baseConfig from "tailwind-config";
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	presets: [baseConfig],
	content: ["./app/**/*.tsx", "./modules/**/*.tsx"],
	safelist: ["ml-2", "ml-4", "ml-6", "ml-8", "ml-10"],
	theme: {
		extend: {
			animation: {
				"shiny-text": "shiny-text 8s infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
				meteor: "meteor 5s linear infinite",
				rainbow: "rainbow var(--speed, 2s) infinite linear",
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				"shiny-text": {
					"0%, 90%, 100%": {
						"background-position": "calc(-100% - var(--shiny-width)) 0",
					},
					"30%, 60%": {
						"background-position": "calc(100% + var(--shiny-width)) 0",
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				orbit: {
					"0%": {
						transform:
							"rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
					},
					"100%": {
						transform:
							"rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
					},
				},
				marquee: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(calc(-100% - var(--gap)))",
					},
				},
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						opacity: "1",
					},
					"70%": {
						opacity: "1",
					},
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
				rainbow: {
					"0%": {
						"background-position": "0%",
					},
					"100%": {
						"background-position": "200%",
					},
				},
			},
			colors: {
				primary: {
					DEFAULT: "#D4AF37", // Dourado principal
					50: "#FFF9E5",
					100: "#FFF2CC",
					200: "#FFE699",
					300: "#FFD966",
					400: "#FFCC33",
					500: "#D4AF37",
					600: "#B38F2E",
					700: "#926F25",
					800: "#714F1C",
					900: "#503613",
				},
				secondary: {
					DEFAULT: "#1A1A1A", // Preto para contraste
					50: "#4D4D4D",
					100: "#444444",
					200: "#3B3B3B",
					300: "#333333",
					400: "#2A2A2A",
					500: "#1A1A1A",
					600: "#141414",
					700: "#0F0F0F",
					800: "#0A0A0A",
					900: "#050505",
				},
				background: {
					light: "#FAFAFA",
					dark: "#121212",
				},
				text: {
					light: "#333333",
					dark: "#E0E0E0",
				},
			},
		},
	},
} satisfies Config;
