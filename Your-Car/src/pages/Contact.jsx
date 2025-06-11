export default function Contact() {
    return (
      <section id="contact">
        <div className="bg-white min-h-screen overflow-hidden">
          <div className="mx-auto">
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
        
        <div className="text-center mt-20">
            <p className="text-[32px] font-lora  text-Custom-red"> <span className="font-custom-700">Your</span><span className="font-custom-400">Car</span></p>
            <div className="font-sans mx-8 text-custom-black mt-4 ">
              <p>We are known for luxurious and premium chaffeur services worldwide. We are simply the best you can find.</p>
              <p className="mt-4"> we are dedicated to providing our customers with a first-class car buying, selling, and renting experience.</p>
            </div>
        </div>
        <div className="text-center mt-10">
            <p className="text-2xl text-Custom-red font-sans font-[600] ">News Letter</p>
            <p className="font-sans font-[300] text-custom-black mx-8 mt-4">Subscribe to our news letter for updates,news and exclusivr offers</p>
        </div>
        <button color="red" className="border-red-50  p-5">Subscribe</button>
        </div>
      </section>
    );
  }
  