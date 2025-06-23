import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const data = [
  {
    test:
      "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    star: 5,
    name: "Annie Rudy",
    location: "Las Vegas",
    car: "/Assets/5084c9b84fe70dea3068cbba8e35daa1d7069b11.png",
  },

];

export default function Testimonial() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        sliderRef.current?.slickNext();
      } else if (e.key === "ArrowLeft") {
        sliderRef.current?.slickPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-all duration-300"></div>
    ),
  };

  return (
    <section id="testimonial" className="bg-custom-black">
      {/* Title Section */}
      <div className="relative pt-10 font-lora">
        <div className="text-center text-[40px] md:text-[100px] text-Custom-service opacity-[5%] font-custom-700">
          TESTIMONIALS
        </div>
        <div className="absolute inset-0 mt-16 md:mt-36">
          <div className="text-[32px] md:text-[48px] text-center text-Custom-service font-custom-700">
            Testimonials
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative overflow-visible pb-16">
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, i) => (
            <div key={i} className="w-full">
              <div className="relative">
                <div className="bg-white max-w-[570px] md:max-w-none flex flex-col items-center border-gray-50 mx-8 md:w-[60%] mt-20 mb-40 md:mx-auto">
                  <div className="text-center text-sm md:text-2xl font-lato font-custom-400 italic m-10">
                    {d.test}
                  </div>

                  {/* Star Ratings */}
                  <div className="flex mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={30}
                        className={
                          i < Number(d.star)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300 fill-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Name + Location */}
                  <div className="flex flex-col md:flex-row md:gap-10 items-center mb-10">
                    <p className="text-xl md:text-[32px] font-sans font-custom-700 text-custom-blacked">
                      {d.name}
                    </p>
                    <p className="text-sm md:text-2xl italic font-sans text-custom-white">
                      {d.location}
                    </p>
                  </div>
                </div>

                {/* Car Image */}
                <img
                  src={d.car}
                  className="h-20 md:h-32 absolute w-auto left-[70%] top-[23%] sm1:left-[76%] sm1:top-[20.9%] md:left-[72%] md:top-[21%] md1:left-[75%] md1:top-[20%]"
                  alt="Car"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
