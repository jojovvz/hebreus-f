import variablesPlugin from "@mertasan/tailwindcss-variables";
import colorVariable from "@mertasan/tailwindcss-variables/colorVariable";
import containerQueryPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export const lightVariables = {
	colors: {
		border: "hsl(214 14% 85%)",
		input: "hsl(214 14% 80%)",
		ring: "hsl(45 86% 50%)",
		background: "hsl(0 0% 97%)",
		foreground: "hsl(220 13% 20%)",
		primary: "hsl(45 86% 50%)",
		"primary-foreground": "hsl(0 0% 100%)",
		secondary: "hsl(220 13% 20%)",
		"secondary-foreground": "hsl(0 0% 100%)",
		destructive: "hsl(0 84% 60%)",
		"destructive-foreground": "hsl(0 0% 100%)",
		success: "hsl(142 47% 46%)",
		"success-foreground": "hsl(0 0% 100%)",
		muted: "hsl(220 13% 97%)",
		"muted-foreground": "hsl(220 13% 60%)",
		accent: "hsl(45 86% 50%)",
		"accent-foreground": "hsl(0 0% 100%)",
		popover: "hsl(0 0% 100%)",
		"popover-foreground": "hsl(220 13% 20%)",
		card: "hsl(0 0% 100%)",
		"card-foreground": "hsl(220 13% 20%)",
		highlight: "hsl(45 86% 50%)",
		"highlight-foreground": "hsl(0 0% 100%)",
	},
};

export const darkVariables = {
	colors: {
		border: "hsl(220 13% 20%)",
		input: "hsl(214 14% 80%)",
		ring: "hsl(45 86% 50%)",
		background: "hsl(220 13% 10%)",
		foreground: "hsl(220 13% 90%)",
		primary: "hsl(45 86% 50%)",
		"primary-foreground": "hsl(220 13% 10%)",
		secondary: "hsl(220 13% 90%)",
		"secondary-foreground": "hsl(220 13% 10%)",
		destructive: "hsl(0 84% 60%)",
		"destructive-foreground": "hsl(0 0% 100%)",
		success: "hsl(142 47% 46%)",
		"success-foreground": "hsl(0 0% 100%)",
		muted: "hsl(220 13% 10%)",
		"muted-foreground": "hsl(220 13% 60%)",
		accent: "hsl(45 86% 50%)",
		"accent-foreground": "hsl(220 13% 10%)",
		popover: "hsl(220 13% 10%)",
		"popover-foreground": "hsl(220 13% 90%)",
		card: "hsl(220 13% 10%)",
		"card-foreground": "hsl(220 13% 90%)",
		highlight: "hsl(45 86% 50%)",
		"highlight-foreground": "hsl(220 13% 10%)",
	},
};

export default {
	content: [],
	darkMode: ["class"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1280px",
			},
		},
		extend: {
			spacing: {
				xs: "0.25rem",
				sm: "0.5rem",
				md: "1rem",
				lg: "1.5rem",
				xl: "2rem",
				"2xl": "3rem",
				"3xl": "4rem",
			},
			boxShadow: {
				sm: "0 2px 8px 0 rgb(0, 0, 0, 0.025), 0 0 1px rgba(0,0,0,0.1)",
				DEFAULT: "0 4px 16px 0 rgb(0, 0, 0, 0.05), 0 0 1px rgba(0,0,0,0.1)",
				md: "0 6px 24px 0 rgb(0, 0, 0, 0.075), 0 0 1px rgba(0,0,0,0.1)",
				lg: "0 8px 32px 0 rgb(0, 0, 0, 0.1), 0 0 1px rgba(0,0,0,0.1)",
				xl: "0 12px 48px 0 rgb(0, 0, 0, 0.125), 0 0 1px rgba(0,0,0,0.1)",
				"2xl": "0 16px 64px 0 rgb(0, 0, 0, 0.15), 0 0 1px rgba(0,0,0,0.1)",
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
				"7xl": ["4.5rem", { lineHeight: "1" }],
				"8xl": ["6rem", { lineHeight: "1" }],
				"9xl": ["8rem", { lineHeight: "1" }],
			},
			borderRadius: {
				lg: "0.75rem",
				md: "calc(0.75rem - 2px)",
				sm: "calc(0.75rem - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "sans-serif"],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			transitionProperty: {
				colors:
					"color, background-color, border-color, text-decoration-color, fill, stroke",
				opacity: "opacity",
				transform: "transform",
			},
			transitionTimingFunction: {
				"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
				out: "cubic-bezier(0, 0, 0.2, 1)",
				in: "cubic-bezier(0.4, 0, 1, 1)",
			},
			transitionDuration: {
				"150": "150ms",
				"200": "200ms",
				"300": "300ms",
				"500": "500ms",
			},
			accessibility: {
				"sr-only": {
					position: "absolute",
					width: "1px",
					height: "1px",
					padding: "0",
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					whiteSpace: "nowrap",
					borderWidth: "0",
				},
				"not-sr-only": {
					position: "static",
					width: "auto",
					height: "auto",
					padding: "0",
					margin: "0",
					overflow: "visible",
					clip: "auto",
					whiteSpace: "normal",
				},
			},
			hover: {
				"opacity-90": { opacity: "0.9" },
				"opacity-80": { opacity: "0.8" },
				"scale-105": { transform: "scale(1.05)" },
			},
			focus: {
				"ring-2": { boxShadow: "0 0 0 2px rgb(var(--colors-ring))" },
				"ring-offset-2": {
					boxShadow: "0 0 0 2px transparent, 0 0 0 4px rgb(var(--colors-ring))",
				},
			},
			colors: {
				border: colorVariable("--colors-border"),
				input: colorVariable("--colors-input"),
				ring: colorVariable("--colors-ring"),
				background: colorVariable("--colors-background"),
				foreground: colorVariable("--colors-foreground"),
				primary: {
					DEFAULT: colorVariable("--colors-primary"),
					foreground: colorVariable("--colors-primary-foreground"),
				},
				secondary: {
					DEFAULT: colorVariable("--colors-secondary"),
					foreground: colorVariable("--colors-secondary-foreground"),
				},
				destructive: {
					DEFAULT: colorVariable("--colors-destructive"),
					foreground: colorVariable("--colors-destructive-foreground"),
				},
				success: {
					DEFAULT: colorVariable("--colors-success"),
					foreground: colorVariable("--colors-success-foreground"),
				},
				muted: {
					DEFAULT: colorVariable("--colors-muted"),
					foreground: colorVariable("--colors-muted-foreground"),
				},
				accent: {
					DEFAULT: colorVariable("--colors-accent"),
					foreground: colorVariable("--colors-accent-foreground"),
				},
				popover: {
					DEFAULT: colorVariable("--colors-popover"),
					foreground: colorVariable("--colors-popover-foreground"),
				},
				card: {
					DEFAULT: colorVariable("--colors-card"),
					foreground: colorVariable("--colors-card-foreground"),
				},
				highlight: {
					DEFAULT: colorVariable("--colors-highlight"),
					foreground: colorVariable("--colors-highlight-foreground"),
				},
			},
		},
		variables: {
			DEFAULT: lightVariables,
		},
		darkVariables: {
			DEFAULT: darkVariables,
		},
	},
	plugins: [
		formsPlugin({
			strategy: "base",
		}),
		typographyPlugin,
		animatePlugin,
		containerQueryPlugin,
		variablesPlugin({
			colorVariables: true,
		}),
	],
} satisfies Config;
