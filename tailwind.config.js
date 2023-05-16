/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      "raleway-regular": ["raleway-regular"],
      "raleway-medium": ["raleway-medium"],
      "raleway-semibold": ["raleway-semibold"],
      "raleway-bold": ["raleway-bold"],
      "raleway-black": ["raleway-black"],
    },
    colors: {
      "dark-primary": "#333333",

      "nav-fot": "#1f252c",
    },
  },
};
export const plugins = [];
