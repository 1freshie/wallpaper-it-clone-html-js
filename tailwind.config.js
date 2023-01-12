/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "dm-serif": ["DM Serif Display", "serif"],
      "avenir-book": ["Avenir-Book", "sans-serif"],
    },
    fontSize: {
      "sm": [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "0.4px",
          fontWeight: "400",
        },
      ],
      "base": [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "0.6px",
          fontWeight: "400",
        },
      ],
      "lg": [
        "30px",
        {
          lineHeight: "36px",
          letterSpacing: "0.6px",
          fontWeight: "400",
        },
      ],
      "xl": [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "0.6px",
          fontWeight: "400",
        },
      ],
      "2xl": [
        "40px",
        {
          lineHeight: "48px",
          letterSpacing: "0.8px",
          fontWeight: "400",
        },
      ],
    },
    colors: {
      "primary--pale-teal": "#7FC6AC",
      "secondary--dark-cyan": "#066A76",
      "secondary--light-pink": "EBE3E9",
      "primary--black": "#161615",
    },
    extend: {},
  },
  plugins: [],
};
