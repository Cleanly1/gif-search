import browsersync from "rollup-plugin-browsersync";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

if (isDevelopment) {
  module.exports = {
    input: "src/scripts/index.js",
    output: {
      file: "public/giphy.js",
      format: "iife"
    },
    plugins: [browsersync({ server: "public" })]
  };
} else {
  module.exports = {
    input: "src/scripts/index.js",
    output: [
      {
        file: "public/giphy.js",
        format: "iife"
      },
      {
        file: "public/giphy.min.js",
        format: "iife",
        name: "version",
        plugins: [terser()]
      }
    ]
  };
}
