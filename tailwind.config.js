/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const { THEME } = require("./lib/config")
const { genMixColor } = require("./lib/getColor")
import colors from 'tailwindcss/colors'
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
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      colors: getThemeColors(),
      fontFamily: getThemefontFamily(),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}