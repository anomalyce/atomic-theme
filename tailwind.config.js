const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      //
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
