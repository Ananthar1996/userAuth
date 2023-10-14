import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#60a5fa",

          secondary: "#a1d9f4",

          accent: "#f2c2ab",

          neutral: "#141d24",

          "base-100": "#312e81",

          info: "#506fe2",

          success: "#4deac5",

          warning: "#92510c",

          error: "#ee1c11",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
