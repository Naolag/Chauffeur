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
        'About-car':"url('Assets/AboutUs.png')",
        'BgRoad':"url(/Assets/Scratched_road.jpg)",
        'ServiceCar':"URL(/Assets/ServiseCar.png)",
        'CarService':"URL(/Assets/CarService.png)",
        'handWithKey':"URL('/Assets/HandWithKey.png')",
        'hand':"URL('/Assets/Hand.png')",
        'carSales':"URL('/Assets/CarSales.png')",
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans:['Noto-Sons'],
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
        'Custom-service':"rgba(235,235,235,1)",
        'Custom-blueBlack':"rgba(35,39,48,1)",
        
      },
      backgroundColor:{
        'custom-black':"rgb(18, 39, 61)",
        'Custom-gray':"rgba(223,223,223,1)"
      },
      screens:{
        md:'820px',
      },
    },
  },
  plugins: [],
}
