const colors = require('tailwindcss/colors');

module.exports = {
  presets: [require('@vercel/examples-ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vercel/examples-ui/**/*.js',
  ],
  theme: { extend: { colors: colors } },
  blocklist: ['max-w-3xl', 'mx-auto'],
}
