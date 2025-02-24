/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const { THEME } = require("./lib/config")
const { genMixColor } = require("./lib/getColor")
function getThemeColors() {
  function getColors(color) {
    // TODO:生成混合色
    const { DEFAULT, dark, light } = genMixColor(color)
    return {
      lighter: light[5],
      light: light[3],
      DEFAULT: DEFAULT,
      deep: dark[2],
      deeper: dark[4],
    }
  }
  const colors = {}
  for (var key in THEME.colors) {
    colors[key] = getColors(THEME.colors[key])
  }
  return colors
}

function getThemefontFamily() {
  const fontFamily = {}
  for (var key in THEME.fonts) {
    fontFamily[key] = [THEME.fonts[key], ...defaultTheme.fontFamily.sans]
  }
  return fontFamily
}

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	fontSize: {
  		xs: [
  			'0.75rem',
  			{
  				lineHeight: '1rem'
  			}
  		],
  		sm: [
  			'0.875rem',
  			{
  				lineHeight: '1.5rem'
  			}
  		],
  		base: [
  			'1rem',
  			{
  				lineHeight: '1.75rem'
  			}
  		],
  		lg: [
  			'1.125rem',
  			{
  				lineHeight: '2rem'
  			}
  		],
  		xl: [
  			'1.25rem',
  			{
  				lineHeight: '2rem'
  			}
  		],
  		'2xl': [
  			'1.5rem',
  			{
  				lineHeight: '2rem'
  			}
  		],
  		'3xl': [
  			'2rem',
  			{
  				lineHeight: '2.5rem'
  			}
  		],
  		'4xl': [
  			'2.5rem',
  			{
  				lineHeight: '3.5rem'
  			}
  		],
  		'5xl': [
  			'3rem',
  			{
  				lineHeight: '3.5rem'
  			}
  		],
  		'6xl': [
  			'3.75rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'7xl': [
  			'4.5rem',
  			{
  				lineHeight: '1.1'
  			}
  		],
  		'8xl': [
  			'6rem',
  			{
  				lineHeight: '1'
  			}
  		],
  		'9xl': [
  			'8rem',
  			{
  				lineHeight: '1'
  			}
  		]
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: 'getThemefontFamily()',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-animate")],
}
