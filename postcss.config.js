// postcss.config.js
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano'); // You already have cssnano in your devDependencies
const purgecss = require('@fullhuman/postcss-purgecss');

// Determine if we are in production environment
const isProduction = process.env.NODE_ENV === 'production'; // Using NODE_ENV as per your package.json

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'), // Ensure this path is correct
    autoprefixer(),
    // Only run PurgeCSS and cssnano in production
    ...(isProduction ? [
      purgecss({
        content: [
          './_layouts/**/*.html',
          './_includes/**/*.html',
          './_posts/*.md',
          './*.html',
          // Add other paths where you use Tailwind classes
          './_data/**/*.yml', // If you use Tailwind classes in your data files
          './_pages/**/*.html', // If you have a /pages directory
        ],
        defaultExtractor: content => {
          const classMatcher = content.match(/[A-Za-z0-9-_:\/]+/g) || [];
          const htmlTags = content.match(/<[^>]+>/g) || [];
          return classMatcher.concat(htmlTags);
        },
        safelist: {
          standard: ['no-scroll'],
          // Add any other classes dynamically added by JS that PurgeCSS might miss
        }
      }),
      // cssnano is already in your devDependencies, so you can use it here.
      // Note: Tailwind's --minify is basic. cssnano offers more advanced minification.
      // If you use cssnano here, you can remove --minify from your build:css script.
      cssnano({
        preset: 'default',
      }),
    ] : []),
  ],
};