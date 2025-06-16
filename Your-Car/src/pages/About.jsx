
export default function About() {
  return (
    <section id="about" className="my-10 overflow-hidden">
      <div className="md:flex bg-white   md:justify-between md:mx-10">
        {/* Left: Text Section */}
        <div className="md:pr-[5%] ">
          <div className="relative md:ml-6 ">
            <div className="md:min-w-max text-center md:text-left text-6xl md:text-8xl sm:text-7xl  font-bold font-lora text-red-900 mt-12 opacity-10 tracking-wider">
              ABOUT US
            </div>

            <div className="absolute inset-0 flex items-center justify-center md:justify-start">
              <div className="text-custom-32 sm:text-4xl md:text-5xl  md:mt-20 font-lora text-red-900 font-bold mt-14">
                About
              </div>
            </div>
          </div>

          <div className="text-2xl sm:text-3xl md:text-2xl md:font-custom-400 md:font-sans md:text-Custom-blueBlack mt-10 px-6">
            <p className="mb-8">
              YourCar is a luxury car dealership that offers a personalized and first-class experience to its clients.
              Our team of experienced professionals is dedicated to providing exceptional service and 
              finding the perfect vehicle to match our clients' unique preferences and requirements.
              We have an extensive selection of high-end vehicles, ranging from sports cars to SUVs,
              all of which are maintained to the highest standards of quality and safety.
            </p>

            <p>
              At YourCar, we are committed to creating a stress-free and enjoyable car buying experience.
              We understand that purchasing a luxury car can be a significant investment,
              which is why we offer flexible financing options to make the process more manageable.
              Our team is available to answer any questions and provide guidance throughout the entire buying process.
              We take pride in our outstanding customer service and attention to detail,
              and we are confident that our clients will be satisfied with their experience at YourCar.
            </p>
          </div>
        </div>
         
       
       <div className=" hidden lg:flex w-full  md:h-[700px] bg-no-repeat bg-center md:bg-BgRoad mr-[15%]">
       <div className="md:w-[400px] md:h-[700px] md:bg-About-car bg-no-repeat ml-[20%]">
       </div>
        </div>
        
      </div>
    </section>
  );
}
