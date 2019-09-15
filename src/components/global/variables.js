export const fonts = {
  oswald: "oswald, sans-serif", // 500, 700
  source: "source-sans-pro, sans-serif", // 200, 300, 400, 600, 700, 900
  acumin: "acumin-pro-condensed, sans-serif", // 600
}

export const colors = {
  white: "#ffffff",
  gray100: "#FAF8F4", // Salt
  gray200: "#F2EFE9", // container bg
  gray300: "#D3CDC3", // Latte
  gray400: "#848179", // btn text
  gray500: "#79766F", // Toast
  gray700: "#404040", // Charcoal
  gray800: "#252422", // pg
  black: "#000000",
  cantaloupe: "#E1907D",
  robinegg: "#87C4B6",
}

// min-width for each breakpoint
export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const screen = {
  min: {
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
  },
  max: {
    sm: `(max-width: ${breakpoints.sm - 1}px)`,
    md: `(max-width: ${breakpoints.md - 1}px)`,
    lg: `(max-width: ${breakpoints.lg - 1}px)`,
    xl: `(max-width: ${breakpoints.xl - 1}px)`,
  },
}
