module.exports = {
  purge    : [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode : false, // or 'media' or 'class'
  theme    : {
    extend : {
      gridTemplateColumns : {
        ttt : 'repeat(3,96px)'
      }
    }
  },
  variants : {
    extend : {}
  },
  plugins  : []
};
