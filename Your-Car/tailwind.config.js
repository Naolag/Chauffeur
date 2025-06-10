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
        'Mercedes_meybach':"URL('/Assets/Mercedes_meybach.png')",
        'Mercedes_G-wagon':"URL('/Assets/Mercedes_G-wagon.png')",
        'Mercedis_M-class':"URL('/Assets/Mercedis_M-class.png')",
        'Gallery_car':"URL('/Assets/Rectangle.png')",
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        sans:['Noto-Sons'],
        lato:['Lato', 'sans-serif']
      },
      fontSize: {
        'custom-32': '32px', 
        'custom-34': '34px', 
        'custom-36': '36px', 
        'custom-14':'14px',
      },
      fontWeight:{
        'custom-700':'700',
        'custom-500':'500',
        'custom-400':'400'
      },
      textColor:{
        'custom-black':"rgba(18, 39, 61, 1)",
        'Custom-service':"rgba(235,235,235,1)",
        'Custom-blueBlack':"rgba(35,39,48,1)",
        'Custom-gray':"rgba(223,223,223,1)",
        'Custom-red':"rgba(116,25,6,1)",
        'custom-blacked':"rgba(39, 39, 39, 1)",
        'custom-white':"rgba(151, 151, 151, 1)",
        
      },
      backgroundColor:{
        'custom-black':"rgb(18, 39, 61)",
        'Custom-gray':"rgba(223,223,223,1)",
        'Custom-red':"rgba(116,25,6,1)"
      },
      screens:{
        md1:'820px',
        sm1:'470px',
        sm2:'580px',
        md1:'950px',
      },
    },
  },
  plugins: [],
}
