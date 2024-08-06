/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "380px",
      xsm: "640px",
      md: "740px",
      lg: "980px",
      xlg: "1024px",
      xl: "1440px",
      xxl: "2400px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary_green: "#0D5520",
        primary_yellow: "#FDF1C9",
        dark_black: "#000000",
        dark_text: "#292D32",
        dark_blue: "#1C1D36",
        dark: "#2F2F2F",
        white_2: "#F8F8F8",
        white_3: "#F0FBF3",
        light_green: "#D6ECDC",
        dark_500: "rgba(0, 0, 0, 0.67)",
        primary_grey: "#B6BBB2",
        checkBox_bg: "#979797",
        sub_btn: "#493910",
        white: "#FFFFFF",
        grey: "#BBBBC3",
        grey_2: "#D9DEDC",
        grey_3: "#606172",
        grey_4: "#C4C4C4",
        grey_5: "#3C4257",
        border_b: "#C4C4C482",
        sunglow: "#0D5520",
        secondary_yellow_2: "#FFC42D",
        map_border: "#CECECE",
        lighter_green: "rgba(214, 236, 220, 0.4)",
        chat_gray: "#F2F2F2",
        placeholder: "#c6c6c6",
        "white-smoke": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
