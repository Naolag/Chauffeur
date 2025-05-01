export default function Service(){
    return(
        <section id="service" className=" bg-Custom-gray">
            <div className="w-full h-auto bg-no-repeat bg-ServiceCar bg-center">
                <div className="relative pt-20">
                    <div className="text-center text-7xl sm:text-8xl md:text-9xl font-lora font-custom-70 md:font-extrabold opacity-10 md:opacity-100  md:text-Custom-service">
                        Services
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-custom-32 md:text-6xl text-custom-black font-lora mt-36 font-semibold">
                          Services
                        </div>
                    </div>
                </div >
                <div className="md:flex flex-row md:ml-32 md:mt-32 pb-10 md:gap-16">
                <div>
                    <div className=" mt-10 pt-28 bg-CarService bg-no-repeat bg-center">
                    </div>
                    <div>
                    <p className="text-center font-sans font-custom-700 text-2xl small-3xl lg-4xl">Car Selling</p> 
                    <p className="text-center px-4 md:text-2xl font-custom-400  font-sa text-custom-black mt-4 max-w-screen-sm mx-auto">At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest.
                                                     We offer fair prices and a hassle-free selling process,
                                                      so you can get  your vehicle with minimal effort.</p> 
                    </div>
                </div>
                <div>
                    <div>
                      <div className="pt-20 mt-8 bg-no-repeat bg-center bg-handWithKey"> </div>
                      <div className="pt-10  ml-11 bg-no-repeat bg-center bg-hand"> </div>
                    </div>
                    <div>
                    <p className="text-center font-sans font-custom-700 text-2xl small-3xl">Car rental</p> 
                       <p className="text-center px-4 font-custom-400 md:text-2xl font-sa text-custom-black mt-4 max-w-screen-sm mx-auto">
                       If you're in need of a luxury car rental, look no further than YourCar.
                        Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.
                        </p>
                    </div>
                </div>
                <div >
                    <div className="mt-10 pt-28 bg-no-repeat bg-center bg-carSales"></div>
                    <div>
                    <p className="text-center font-sans font-custom-700   text-2xl small-3xl">Car sales</p> 
                       <p className="text-center px-4 font-custom-400 md:text-2xl  font-sa text-custom-black mt-4 max-w-screen-sm mx-auto">
                         At YourCar, we offer a wide selection of luxury vehicles for sale.
                          Whether you're in the market for a sleek sports car or a spacious SUV, 
                          we have the perfect vehicle to fit your needs.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}