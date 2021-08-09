module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        dark: '#0058AB',
        light: '#3379bc'
      }, 
      darkYellow: "#fbd914",
      white: "#FFFFFF",
    },
    fontSize: {
      'large': '25px',
      'small': '14px'
    }
  },

  variants: {
    extend: {},
  },
  plugins: ["require(@tailwindcss/forms)"],
};
