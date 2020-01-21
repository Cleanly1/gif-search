import browsersync from "rollup-plugin-browsersync";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import postcssnormalize from "postcss-normalize";
import autoprefixer from "autoprefixer";

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

module.exports = {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },
  plugins: [
    isDevelopment && browsersync({ server: "public" }),
    postcss({
      extract: true,
      plugins: [postcssnormalize(), autoprefixer()]
    }),
    isProduction && terser()
  ]
};
