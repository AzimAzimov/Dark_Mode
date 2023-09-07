/** @type {import("tailwindcss").Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/constants/**/*.{js,jsx,ts,tsx}",
    "./src/icons/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        main: "#93C01F",
        light: "#84AC1C",
        dark: "#506726",
      },
      secondary: {
        main: "#FCFAFA",
        light: "#BDBDBD",
        dark: "#828282",
      },
      gray: {
        50: "#F2F2F2",
        100: "#E0E0E0",
        200: "#A5A5A5",
        300: "#4F4F4F",
        400: "#292B25",
      },
      black: "#151515",
      background: "#EFEFEF",
      white: "#FFF",
    },

    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },

    fontSize: {
      "xs": [
        "10px",
        {
          lineHeight: "12px",
          fontWeight: 400,
        },
      ],
      "sm": [
        "12px",
        {
          lineHeight: "16.8px",
          fontWeight: 300,
        },
      ],
      "sm-400": [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: 400,
        },
      ],
      "sm-500": [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: 500,
        },
      ],
      "base": [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: 300,
        },
      ],
      "base-400": [
        "14px",
        {
          lineHeight: "16px",
          fontWeight: 400,
        },
      ],
      "base-500": [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: 500,
        },
      ],
      "lg": [
        "16px",
        {
          lineHeight: "19px",
          fontWeight: 500,
        },
      ],
      "xl": [
        "18px",
        {
          lineHeight: "21px",
          fontWeight: 500,
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "28px",
          fontWeight: 500,
        },
      ],
      "3xl": [
        "32px",
        {
          lineHeight: "38px",
          fontWeight: 700,
        },
      ],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "15px",
      },
    },

    extend: {
      backgroundImage: {
        "body": "url('../../public/body-bg.png')",
        "news-slider": "url('../../public/news-slider-bg.jpg')",
      },
      boxShadow: {
        inset: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [process.env.NODE_ENV === "production" ? { cssnano: {} } : {}],
}
