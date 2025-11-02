import Image from 'next/image';
import heroImage from '../picture/Flower_banner_png.png';

export default async function ProductPage({ params }) {
    const { productid } = await params;
    console.log("Product ID:", productid);
    return (
        <div className="bg-white flex flex-col md:flex-row justify-start items-center gap-12 w-[90%] md:w-3/4 min-h-[70vh] md:min-h-[65vh] my-8 md:my-12 p-8 md:p-10 rounded-3xl shadow-md overflow-hidden relative">

            <div className='md:w-[750px] w-[850px] md:h-[750px] h-[850px] bg-[#fdd9d8] absolute rounded-full md:-top-5 top-[-480px] md:left-[-380px] left-[-190px] z-1 ' />

            {/* Product Image */}
            <div className="w-full md:min-w-[300px] md:w-[300px] h-[300px] md:h-[400px] rounded-2xl shadow-inner flex justify-center items-center z-10">
                <div className="relative w-full h-full">
                    <Image
                        src="https://picsum.photos/500"
                        alt={`Product ${productid}`}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col w-full md:w-full gap-6 z-10">
                <h1 className="text-3xl font-serif font-bold text-[#4A2C2A]">
                    Scented Blossom Candle
                </h1>

                <p className="text-[#7C5C56] leading-relaxed text-[1.05rem]">
                    Let soothing floral aromas fill your space with calm and warmth.
                    Each candle is hand-poured with natural wax and infused with the pure essence of blooming petals.
                </p>

                <div className="flex items-center gap-3">
                    <span className="text-yellow-500 md:text-xl text-lg">★ ★ ★ ★ ☆</span>
                    <span className="text-[#C6816F]">(128 reviews)</span>
                </div>

                <div className="flex flex-col lg:flex-row md:flex-col sm:flex-row gap-8 items-center justify-between">
                    <span className="text-2xl font-semibold text-[#A35646]">$29.99</span>
                    <button className=" bg-[#C6816F] hover:bg-[#C27C6C] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm">
                        Add to Cart
                    </button>
                </div>

                <div className="pt-4 border-t border-[#F2D5D0]">
                    <p className="text-sm text-[#9C7A73]">
                        <strong>Category:</strong> Aromatherapy
                    </p>
                    <p className="text-sm text-[#9C7A73]">
                        <strong>Availability:</strong> In Stock
                    </p>
                </div>
            </div>
        </div>


    );
}