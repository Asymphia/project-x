/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "v-light-grey": "#FCFCFC",
        "light-grey": "#E7E7E7",
        "grey": "#727272",
        "dark-grey": "#222222",
        "green": "#13AE85",
        "dark-green": "#155E4A",
        "blue": "#748EFE",
        "orange": "#FF6333"
      },
      fontFamily: {
        "nunito": ["var(--font-nunito)"],
        "sans": ["var(--font-sans)"]
      },
      fontWeight: {
        "regular": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700"
      },
      fontSize: {
        "xs": ["14px", "19px"],
        "sm": ["16px", "22px"],
        "base": ["20px", "27px"],
        "lg": ["24px", "33px"],
        "xl": ["32px", "44px"],
        "2xl": ["36px", "49px"],
        "3xl": ["40px", "55px"],
        "4xl": ["48px", "65px"]
      },
      spacing: {
        "xs": "10px",
        "sm": "14px",
        "base": "16px",
        "lg": "20px",
        "xl": "24px",
        "2xl": "30px",
        "3xl": "40px",
        "4xl": "60px"
      },
      borderRadius: {
        "sm": "5px",
        "base": "30px",
        "lg": "50px"
      }
    },
  },
  plugins: [],
};
