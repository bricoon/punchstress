import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import visualizer from "rollup-plugin-visualizer";

// Check if we are in production mode (for optimizations)
const production = process.env.NODE_ENV === "production";

export default {
  input: "assets/js/main.js", // Your main JavaScript entry file
  output: {
    // Determine the output file based on the environment
    file: production ? "_site/assets/js/bundle.js" : "assets/js/bundle.js",
    format: "iife",
    name: "app",
    sourcemap: !production, // Only generate sourcemaps in development

    // REMOVE THE globals PROPERTY IF YOU ARE BUNDLING ALPINE.JS
    // globals: {
    //   alpinejs: "Alpine",
    // },
  },
  // REMOVE THE external PROPERTY IF YOU ARE BUNDLING ALPINE.JS
  // external: ["alpinejs"],

  plugins: [
    resolve(), // Helps Rollup find modules in node_modules
    commonjs(), // Converts CommonJS modules to ES Modules
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    production && terser(), // The usage `terser()` remains the same
    production &&
      visualizer({
        filename: "bundle-report.html",
        open: true,
        gzipSize: true,
      }),
  ],
};