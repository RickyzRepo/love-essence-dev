import Image from "next/image";

const HomePage_ProductCircularCard = ({ img }) => {
    return (
        <div className="flex flex-col items-center">
            <div className=" rounded-full  flex items-center justify-center  border-[#d89687] border-[5px]  w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] transition-all duration-300">
                <div className="rounded-full flex items-center justify-center overflow-hidden bg-amber-100 w-40 h-40 sm:w-[200px] sm:h-[200px] md:w-60 md:h-60 lg:w-[280px] lg:h-[280px] transition-all duration-300">
                    <Image
                        src={img}
                        alt="Product 1"
                        width={280}
                        height={280}
                        className="hover:scale-110 transition-transform duration-500"
                    />
                </div>
            </div>

            <div className="text-center mt-2 text-sm sm:text-base md:text-lg">
                Product 1
            </div>
        </div>

    )
};

export default HomePage_ProductCircularCard;