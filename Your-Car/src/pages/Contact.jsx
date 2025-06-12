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

          <div className="hidden md:flex mt-10 gap-3 mx-auto overflow-hidden flex-row items-center justify-center lg:gap-20 lg:mt-20">
             <img src="/Assets/BMW (1).png" alt="BMW-logo" />
              <img src="/Assets/Volvo_logo1 1 (1).png" alt="Volvo-logo" />
              <img src="/Assets/Suzuki_logo_2 1.png" alt="Suzuki-logo" />
              <img src="/Assets/Toyota_EU 1.png" alt="Toyota-logo" />
              <img src="/Assets/Nissan_2020_logo (1).png" alt="Nissan-logo" />
              <img src="/Assets/layer1 (1).png" alt="Mercedes-logo" />
              <img src="/Assets/image 262 (1).png" alt="Subaru-logo" />
              <img src="/Assets/Vector (10).png" alt="mithubishi-logo" />
          </div>



        <div className="md:flex  flex:col pt-40 items-center">
        <div className="text-center mt-20">
            <p className="text-[32px] sm1:text-3xl sm:text-4xl font-lora  text-Custom-red"> <span className="font-custom-700">Your</span><span className="font-custom-400">Car</span></p>
            <div className="font-sans sm1:text-lg sm:text-xl mx-8 text-custom-black mt-4 ">
              <p>We are known for luxurious and premium chaffeur services worldwide. We are simply the best you can find.</p>
              <p className="mt-4"> we are dedicated to providing our customers with a first-class car buying, selling, and renting experience.</p>
            </div>
        </div>




        <div >
        <div className="text-center mt-10">
            <p className="text-2xl sm1:text-3xl sm:text-4xl text-Custom-red font-sans font-[600] ">News Letter</p>
            <p className="font-sans sm1:text-lg sm:text-xl font-[300] text-custom-black mx-8 mt-4">Subscribe to our news letter for updates,news and exclusivr offers</p>
        </div>

         <div>
        <button  className="mx-auto block mt-5  border-2 bg-Custom-red text-white text-base font-custom-700 font-lora border-red-900 px-8 py-1">Subscribe</button>
        <input 
            type="email"
            placeholder="Email"
            className="border-2 border-Custom-red mt-3 sm1:mt-5 mx-auto block pl-2 py-3"
          />
          </div>
          </div>



          <div>
          <div className="text-center mt-5 font-[600] text-2xl font-sans text-Custom-red"> Contact</div>
          <div className="flex items-center text-[16px] font-sans   justify-center gap-5 flex-col mt-5">
            <div className="flex gap-8 pl-10"> 
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
            <div className="flex gap-8 pl-6">
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
            <hr className="mt-5 w-[70%] border-t-2 border-Custom-red mx-auto"/>
          </div>
          <div className="my-8 font-sans text-[12px] text-center font-[300]">© Copyright 2023 · YourCar All rights reserved </div>
        </div>
      </section>
    );
  }
  