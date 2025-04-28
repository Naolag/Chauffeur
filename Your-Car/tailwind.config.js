/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'big-head-car':"url('/Assets/Background.jpg')",
        'small-head-car':"url('/Assets/BackgroundSmall.png')",
        'About-car':"url('Assets/AboutUs.png')"
        
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans:['Noto-Sons','uni-sans-serif','system-ui'],
      },
      fontSize: {
        'custom-32': '32px', 
        'custom-34': '34px', 
        'custom-36': '36px', 
      },
      fontWeight:{
        'custom-700':'700',
        'custom-400':'400'
      },
      textColor:{
        'custom-black':"rgba(18, 39, 61, 1)",
      },
      backgroundColor:{
        'custom-black':"rgb(18, 39, 61)",
      },
      screens:{
        md:'820px',
      },
    },
  },
  plugins: [],
}
