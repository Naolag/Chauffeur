export default function Contact() {
    return (
      <section id="contact">
        <div className="bg-white  overflow-hidden ">
          <div className="mx-auto md:hidden">
            <div className="flex flex-wrap justify-center items-center gap-8 mt-10 [&>img]:sm:w-20 ">
              <img src="/Assets/Nissan_2020_logo.png" alt="Nissan-logo" />
              <img src="/Assets/Mercedes-Benz_free_logo.png" alt="Mercedes-logo" />
              <img src="/Assets/image 262.png" alt="Subaru-logo" />
              <img src="/Assets/mithubishi.png" alt="mithubishi-logo" />
            </div>
            <div className="flex justify-center gap-8 mt-10 [&>img]:sm:w-20">
              <img src="/Assets/BMW.png" alt="BMW-logo" />
              <img src="/Assets/Volvo_logo1 1.png" alt="Volvo-logo" />
              <img src="/Assets/layer1.png" alt="Suzuki-logo" />
              <img src="/Assets/Vector (3).png" alt="Toyota-logo" />
            </div>
          </div>

          <div className="hidden md:flex mt-10 gap-3 md1:gap-5 md2:gap-8 mx-auto overflow-hidden flex-row items-center justify-center lg:gap-12 xl:gap-20 lg:mt-32  pb-32">
             <img src="/Assets/BMW (1).png" alt="BMW-logo" />
              <img src="/Assets/Volvo_logo1 1 (1).png" alt="Volvo-logo" />
              <img src="/Assets/Suzuki_logo_2 1.png" alt="Suzuki-logo" />
              <img src="/Assets/Toyota_EU 1.png" alt="Toyota-logo" />
              <img src="/Assets/Nissan_2020_logo (1).png" alt="Nissan-logo" />
              <img src="/Assets/layer1 (1).png" alt="Mercedes-logo" />
              <img src="/Assets/image 262 (1).png" alt="Subaru-logo" />
              <img src="/Assets/Vector (10).png" alt="mithubishi-logo" />
          </div>

        <div className="md:flex  items-center  justify-center md:gap-10 md:md:shadow-top-subtle">
        <div className="text-center mt-10 md:w-[25%] lg:w-[20%] md:text-start md:pl-6 lg:pl-0">
            <p className="text-[32px] sm1:text-3xl sm:text-4xl md:text-3xl lg:text-[32px] font-lora  text-Custom-red "> <span className="font-custom-700">Your</span><span className="font-custom-400">Car</span></p>
            <div className="font-sans sm1:text-lg sm:text-xl mx-8 md:mx-3 md:text-sm lg:text-base text-custom-black mt-4 ">
              <p>We are known for luxurious and premium chaffeur services worldwide. We are simply the best you can find.</p>
              <p className="mt-4"> we are dedicated to providing our customers with a first-class car buying, selling, and renting experience.</p>
            </div>
        </div>


        <div >
        <div className="text-center mt-10 md:mt-0">
            <p className="text-2xl sm1:text-3xl sm:text-4xl md:text-3xl text-Custom-red font-sans font-[600] ">News Letter</p>
            <p className="font-sans sm1:text-lg sm:text-xl md:text-sm lg:text-base font-[300] text-custom-black mx-8 md:mx-auto mt-4 md:w-[60%] md:text-center">Subscribe to our news letter for updates,news and exclusivr offers</p>
        </div>

         <div className="md:hidden gap-3">
        <button  className="mx-auto block mt-5  border-2 bg-Custom-red text-white text-base md:text-sm  font-custom-700 font-lora border-red-900 px-8 py-1">Subscribe</button>
        <input 
            type="email"
            placeholder="Email"
            className="border-2 border-Custom-red mt-3 sm1:mt-5 mx-auto block pl-2 py-3"
          />
          </div>
          <div className="hidden md:flex justify-center gap-2"> 
        <input 
            type="email"
            placeholder="Email"
            className="border-2  border-Custom-red mt-3 sm1:mt-5  block pl-2 py-2 lg:py-3"
          />
          <button  className=" block mt-5  border-2 bg-Custom-red text-white text-[18px] font-custom-700 font-lora border-red-900 px-2 lg:px-5 py-1">Subscribe</button>
          </div>
          </div>



          <div>
          <div className="text-center mt-5 font-[600] text-2xl font-sans text-Custom-red"> Contact</div>
          <div className="flex items-center text-[16px] font-sans   justify-center gap-5 flex-col mt-5 mr-10 lg:mr-10 md:mr-0">
            <div className="flex gap-8 lg:pl-10 pl-10 md:pl-3"> 
                <img
                src="/Assets/Vector (4).png"
                alt="location"
                className="flex-shrink-0 w-auto h-6 mt-2"
                />
                <div className="text-[16]">
                    <p>2038 2nd Avenue,</p>
                    <p>Las Vegas, United States</p>
                </div>
            </div>
            <div className="flex gap-6">
                <img
                src="/Assets/Vector (5).png"
                alt="Phone"
                className="flex-shrink-0  w-auto h-6 mt-2"
                />
                <div>
                    <p>01444773421423</p>
                    <p>01477678449405</p>
                </div>
            </div>
            <div className="flex gap-8 pl-6 lg:pl-6 md:pl-4">
                <img
                src="/Assets/Vector (6).png"
                alt="Email"
                className="flex-shrink-0 w-auto"
                />
                <p>info@YourCar.com</p>
            </div>
          </div>
          </div>
          </div>



          <div>
            <div className="mt-16 flex gap-5  justify-center">
              <img
                src="/Assets/Vector (9).png"
                alt="facebook"
              />
              <img
                src="/Assets/Vector (8).png"
                alt="twitter"
              />
              <img
                src="/Assets/Vector (7).png"
                alt="instagram"
               />
            </div>
            <hr className="mt-5 w-[70%]  lg:w-[95%] xl:w-[65%] border-t-2 border-Custom-red mx-auto"/>
          </div>
          <div className="my-8 font-sans text-[12px] text-center font-[300]">© Copyright 2023 · YourCar All rights reserved </div>
        </div>
      </section>
    );
  }
  