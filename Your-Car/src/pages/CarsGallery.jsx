export default function CarsGallery(){
    return(
        <div>
            <div className="hidden md:block">
            <div className="flex w-full">
                <img src="/Assets/Car.png" alt="car_0" className="w-1/3 h-auto object-cover hidden md:block"/>
                <img src="/Assets/Car_1.png" alt="car_1" className="w-1/3 h-auto object-cover"/>
                <img src="/Assets/Car_2.png" alt="car_0" className="w-1/3 h-auto object-cover hidden md:block"/>
            </div>

            <div className="flex w-full">
                <img src="/Assets/Car_3.png" alt="car_3" className="w-1/3 h-auto object-cover hidden md:block"/>
                <div className="relative w-1/3">
                    <img src="/Assets/Rectangle.png" alt="car_4" className="w-full h-full object-cover"/>

                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
                        <p className="text-custom-32 font-custom-700 font-serif">Tesla Model 3</p>
                        <p className="text-xl font-serif font-custom-500">Disruptive, avant-garde, futuristic, innovative.</p>
                        <button className="bg-transparent  text-2xl px-4 py-1 mt-5 rounded hover:bg-gray-200 border-white border-2 transition">
                          Contact
                        </button>
                </div>
            </div>

                <img src="/Assets/Car_5.png" alt="car_5" className="w-1/3 h-auto object-cover hidden md:block"/>
            </div>
            <div className="flex w-full">
                <img src="/Assets/Car_6.png" alt="car_6" className="w-1/3 h-auto object-cover hidden md:block"/>
                <img src="/Assets/Car_7.png" alt="car_7" className="w-1/3 h-auto object-cover"/>
                <img src="/Assets/Car _8.png" alt="car_8" className="w-1/3 h-auto object-cover hidden md:block"/>
            </div>
            </div>



            <div className="md:hidden  w-full">
                <img src="/Assets/Car_1.png" alt="car_1" className="w-full h-auto object-cover"/>
                <div className="relative ">
                    <img src="/Assets/Rectangle.png" alt="car_4" className="w-full h-full object-cover"/>

                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p-4">
                        <p className="text-custom-32 font-custom-700 font-serif">Tesla Model 3</p>
                        <p className="text-xl font-serif font-custom-500">Disruptive, avant-garde, futuristic, innovative.</p>
                        <button className="bg-transparent  text-2xl px-4 py-1 mt-5 rounded hover:bg-gray-200 border-white border-2 transition">
                          Contact
                        </button>
                </div>
            </div>

                <img src="/Assets/Car_7.png" alt="car_7" className="w-full h-auto object-cover"/>
            </div>
        </div>
    )
}