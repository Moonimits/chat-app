import daisyui from "daisyui";
import themes from "daisyui/theme/object";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [daisyui],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro"], // DaisyUI themes go here
  },
};
