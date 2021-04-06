const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    preserveHtmlElements: true,
    enabled: true,
    content: ["./src/**/*.{ts,tsx}"],
  },

  theme: {
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      // defaults to {}
      none: "none",
      blur: "blur(20px)",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.green,
      white: colors.white,
      black: colors.black,
    },

    extend: {
      transitionDelay: ["hover", "focus"],

      gridTemplateColumns: {
        layoutSm: "200px 1fr",
        layoutMd: "250px 1fr",
        layoutLg: "350px 1fr",
        layoutXl: "500px 1fr",
        projectFiles: "repeat(auto-fit, minmax(180px, 180px))",
        userSettings: "repeat(auto-fit, minmax(300px, 300px))",
        projectsView: "repeat(auto-fit, minmax(350px, 350px))",
      },

      screens: {
        "3xl": "1750px",
        "4xl": "1950px",
      },

      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },

      height: {
        128: "512px",
        96: "384px",
      },

      colors: {
        gray: {
          166: "#f0f0f0",
        },
      },
      minWidth: {
        5: "1.25rem",
        10: "2.5rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        72: "18rem",
      },

      margin: {
        18: "4.5rem",
      },

      width: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        sm: "600px",
        md: "728px",
        lg: "984px",
      },

      minHeight: {
        5: "1.25rem",
        10: "2.5rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        64: "16rem",
        72: "18rem",
      },

      maxHeight: {
        132: "32rem",
      },

      maxWidth: {
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        10: "10rem",
        12: "12rem",
        16: "16rem",
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "102rem",
        "11xl": "108rem",
        "12xl": "110rem",
        "13xl": "120rem",
      },

      fontSize: {
        xxxs: ".65rem",
      },

      truncate: {
        lines: {
          1: "1",
          2: "2",
          3: "3",
          5: "5",
          8: "8",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"),
    require("tailwindcss-scroll-snap"),
    require("tailwindcss-truncate-multiline")(),
  ],
  corePlugins: {
    alignContent: true,
    gradientColorStops: true,
  },
  variants: {
    filter: ["responsive", "hover", `group-hover`], // defaults to ['responsive']
    backdropFilter: ["responsive"], // defaults to ['responsive']
    gradientColorStops: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
    ],
    scrollSnapType: ["responsive"],
    hover: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover", "focus"],
    outline: ["responsive", "focus"],
    borderRadius: ["responsive", "hover", "focus", "last", "first"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      `group-hover`,
      "group-focus",
    ],
    textColor: ["responsive", "hover", "focus", "group-focus"],
    borderColor: [
      "responsive",
      "hover",
      "focus",
      "focus-within",
      "active",
      "group-hover",
      "group-focus",
    ],
    scale: ["active", "group-hover"],
    animation: ["hover", `group-hover`],
    visibility: ["responsive", `group-hover`],
    display: ["responsive", "group-hover", "group-focus"],
    gridTemplateRows: ["responsive"],
    borderWidth: ["responsive", "last", "hover", "focus", "focus-within"],
    margin: ["responsive", "last"],
    alignContent: ["responsive", "hover", "focus"],
  },
};
