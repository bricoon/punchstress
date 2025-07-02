/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Jekyll templates
    "./_layouts/**/*.html",
    "./_includes/**/*.html",

    // Content
    "./_posts/**/*.md",
    "./*.{html,md}", // Root markdown files

    // JavaScript (for Alpine.js)
    "./assets/js/**/*.js",

    // Important root files
    "./*.html",
  ],
  safelist: [
    // 1. Dynamic Color Utilities
    {
      pattern: /^(bg|text|border|ring|fill|stroke)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ["hover", "focus", "dark", "disabled"],
    },

    // 2. Alpine.js Transitions
    {
      pattern: /^(duration|ease|delay)-[0-9]+/,
    },
    {
      pattern: /^(opacity|scale|rotate|translate)-[0-9]+/,
    },

    // 3. Layout Utilities (for x-show/x-if)
    "block",
    "hidden",
    "inline",
    "flex",

    // 4. Specific Components
    "prose", // For markdown content (requires @tailwindcss/typography)
    "max-w-7xl", // Common container size
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography"), // This line is correct for the plugin
  ],
};