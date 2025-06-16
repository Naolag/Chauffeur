import { FiArrowUpRight } from "react-icons/fi"
import Navbar from "./Navbar"
export default function Home(){
    return(
        <section id="home">
<div className="w-full h-full min-h-screen bg-small-head-car md:bg-big-head-car bg-cover bg-center">
  <div className="md:flex md:flex-col md:pt-[5%]   md:text-right">
      <div className="text-white font-lora font-bold text-4xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl md:ml-auto\ px-[18px] pt-[30%] pb-[20%] md:px-[0px] md:pt-[5%] lg:pt-[10%] xl:pt-[8%] md:pb-[0%] md:mr-[5%] md:ml-[55%]">
          Find the perfect car for you at Yourcar.
      </div>
      <div >
          <div className=" bg-black bg-opacity-30 mx-[3%] py-[5%] px-[5%]   md:bg-transparent md:bg-opacity-0  md:mx-[0%] md:py-[0%] md-px[0%] md:my-[2%] md:ml-[65%] font-lora font-bold text-white text-xl sm:text-lg md:text-2xl lg:text-3xl ">
            We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!
          </div>
          <div>
              <button className="my-[60%] mb-[10%] mx-[20%] p-[5%] md:my-[0%] md:mb-[0%] md:mx-[0%] md:p-[1%]  md:mr-[5%]
                       border-2 border-gray-100 border-round rounded-md flex items-center md:ml-auto
                       text-white font-lora font-bold text-2xl small:text-xl md:text-3xl lg:text-4xl">
                    Discover
                <div className="pl-[5%]">
                   <FiArrowUpRight size={30} />
                </div>
              </button>
            </div>
        </div>
  </div>
</div>
</section>
    )
}