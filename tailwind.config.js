/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Jekyll templates
    "./_layouts/**/*.{html,liquid}",
    "./_includes/**/*.{html,liquid}",
    
    // Content
    "./_posts/**/*.md",
    "./*.{html,md,liquid}", // Root markdown files

    
    // JavaScript (for Alpine.js)
    "./assets/js/**/*.js",
    
    // Important root files
    "./*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}