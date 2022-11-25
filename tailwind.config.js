/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bege' : '#C36C1B',
        'bege-two' : '#FAFAFA',
        'isArrived' : '#7CDB74',
        'notArrived' : '#EC6464',
        'icon' : '#C31B20',
        'font' : '#666666',
        'status-one' : '#DABDA9',
        'status-two' : '#DAA9A9'
      }
    },
  },
  plugins: [],
}
