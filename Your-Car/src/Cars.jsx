import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronRight size={36} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-Custom-red"
      onClick={onClick}
    >
      <ChevronLeft size={36} />
    </div>
  );
}

const data = [
  {
    image: "/Assets/Mercedes_meybach.png",
    class: "FIRST CLASS",
    name: "Mercedes Maybach S600",
    description:
      "The Porsche 911 is a true icon in the sports car world, known for its sleek design and superior handling.",
    seat: "5",
    luggage: "2",
    quantity: "7",
  },
  {
    image: "/Assets/Mercedes_G-wagon.png",
    class: "BUSINESS CLASS",
    name: "Mercedes G-wagon",
    description:
      "The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology.",
    seat: "5",
    luggage: "2",
    quantity: "7",
  },
  {
    image: "/Assets/Mercedis_M-class.png",
    class: "SUV",
    name: "Mercedes M class",
    description:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures.",
    seat: "4",
    luggage: "2",
    quantity: "7",
  },
];

function Cars() {
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
            breakpoint:720,
            settings:{
                slidesToShow:1,
            }
        }
    ]
  };

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
        <div className="mt-20 w-full max-w-5xl mx-auto relative">
          <Slider {...settings}>
            {data.map((d, i) => (
              <div key={i} className="px-4"> 
                <div className="h-[500px] border border-gray-300 rounded-lg shadow-lg px-6 py-8 bg-white flex flex-col justify-between">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-auto object-contain mb-4 rounded-md"
                  />
                  <div className="text-center text-2xl font-bold text-Custom-red">
                    {d.class}
                  </div>
                  <p className="text-center text-lg font-medium text-gray-700">{d.name}</p>
                  <div className="pt-4 text-sm text-gray-600">{d.description}</div>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <img src="/Assets/bi_people-fill.png" alt="People" />
                        <div className="text-Custom-red font-semibold text-lg">
                          {d.seat} Seats
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <img src="/Assets/Vector.png" alt="Luggage" />
                        <div className="text-Custom-red font-semibold text-lg">
                          {d.luggage} Luggage
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="bg-Custom-red text-white text-2xl w-9 h-10">-</button>
                      <div className="bg-white border text-black w-9 h-10 flex items-center justify-center text-2xl">
                        {d.quantity}
                      </div>
                      <button className="bg-Custom-red text-white text-2xl w-9 h-10">+</button>
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
