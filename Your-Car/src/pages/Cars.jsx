import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch,useSelector } from "react-redux";
import { increaseQuantity,decreaseQuantity } from "../features/cart/cartSlice";
import { useRef,useEffect } from "react";


// Custom Arrow components
function NextArrow(props) {
  
  const { onClick } = props;
  return (
    <div
      className="absolute left-[90%] sm1:left-[95%] lg:left-[98%] xl:left-[100%] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronRight size={52} />
    </div>
  );
}






function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[90%] sm1:right-[95%] lg:right-[98%] xl:right-[100%] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronLeft size={52} />
    </div>
  );
}



function Cars() {
  const sliderRef=useRef(null)
  useEffect(()=>{
    const handlekeydown=(e)=>{
      if(e.key==="ArrowRight"){
        sliderRef.current?.slickNext();
      } else if(e.key==="ArrowLeft"){
        sliderRef.current?.slickPrev();
      }
    };
     
    window.addEventListener("keydown",handlekeydown);
    return()=>{
      window.removeEventListener("keydown",handlekeydown)
    }
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive:[
        {
            breakpoint:767,
            settings:{
                slidesToShow:1,
            }
        }
    ]
  };
  const dispatch=useDispatch();
  const data=useSelector(state=>state.cart.items)
  return (
    <section id="cars" className="px-6 py-10 overflow-x-hidden mb-16">
      <div>
        {/* Title */}
        <div className="relative">
          <div className="text-5xl md:text-8xl font-lora font-bold text-Custom-gray text-center">
            CARS
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-10">
            <div className="text-custom-32 md:text-5xl font-bold font-lora text-Custom-red text-center">
              Cars
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-20 w-full  max-w-5xl lg:max-w-6xl mx-auto relative">
          <Slider ref={sliderRef} {...settings}>
            {data.map((d, i) => (
              <div key={i} className="px-4"> 
                <div className="h-[500px] border border-gray-300 rounded-lg shadow-lg px-6 py-8 bg-white flex flex-col justify-between">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full max-w-96 md:max-w-none h-auto object-contain mb-4 rounded-md"
                  />
                  <div className="text-center text-2xl font-bold text-Custom-red">
                    {d.class}
                  </div>
                  <p className="text-center text-lg font-medium text-gray-700">{d.name}</p>
                  <div className="pt-4 text-sm sm1:text-lg md:text-sm text-gray-600">{d.description}</div>

                  <div className="flex items-center mt-6">
                    <div className="justify-start">
                      <div className="flex items-center  gap-2">
                        <img src="/Assets/bi_people-fill.png" alt="People" className="md:w-[20px] h-auto"/>
                        <div className="text-Custom-red font-semibold text-base sm1:text-lg md:text-sm lg:text-lg">
                          {d.seat} Seats
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <img src="/Assets/Vector.png" alt="Luggage" />
                        <div className="text-Custom-red font-semibold text-base sm1:text-lg md:text-sm  lg:text-lg">
                          {d.luggage} Luggage
                        </div>
                      </div>
                    </div>
                    <div className="flex   ml-auto">
                      <button onClick={()=>dispatch(decreaseQuantity(d.name))} className="bg-Custom-red flex items-center justify-center text-white text-2xl w-6 h-7 sm1:w-9 sm1:h-10   md:w-5 md:h-6 lg:w-9 lg:h-10">-</button>
                      <div className="bg-white border text-black w-6 h-7 sm1:w-9 sm1:h-10 md:w-5 md:h-6  lg:w-9 lg:h-10 flex items-center justify-center text-2xl">
                        {d.quantity}
                      </div>
                      <button onClick={()=>dispatch(increaseQuantity(d.name))} className="bg-Custom-red text-white text-2xl flex items-center justify-center w-6 h-7 sm1:w-9 sm1:h-10  md:w-5 md:h-6 lg:w-9 lg:h-10">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Cars;
