/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Text': '#001312', 
        'Background': '#c5dcef',
        'Primary': '#008a8a', 
        'Secondary': '#7D9AA1',
        'Accent': '#663399', 
        'ButtonBg': '#db7b78',
      }
      // colors: {
      //   'Text': '#030e0e'001312,
      //   'Background': '#f0fcfb' #0ca4a5,
      //   'Primary': '#086375',
      //   'Secondary': '#89b5e7',
      //   'Accent': '#5586dd',
      //  },
    },
  },
  plugins: [],
}
