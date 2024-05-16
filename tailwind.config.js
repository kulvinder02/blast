/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xsm: "14px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      llg: "28px",
      xl: "34px",
      xxl: "40px",
      "2xl": "48px",
      "3xl": "50px",
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('./assets/images/png/hero-girl-bg.png')",
      },
    },
  },
  plugins: [],
}

