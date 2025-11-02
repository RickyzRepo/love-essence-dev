import Image from "next/image";
import logo from "./picture/logo-nobg.png";
import heroImage from "./picture/Flower_banner_png.png";
import HomePage_ProductCircularCard from "./components/HomePage_ProductCIrcularCard";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F3F3F3] font-sans ">
      <main className="max-w-[1800px] w-full flex flex-col items-center">
        <Navbar />

        <section className="w-full h-[580px] bg-[#FED9D9] text-center flex flex-col items-center relative">
          <h1 className="text-[26px] sm:text-[30px] font-normal mt-20 w-3/4 ----------- md:text-[34px] md:mt-32  md:w-[600px] tracking-wider leading-12 ">Your curated collection of diyas, candles, diffusers & room freshners</h1>
          <div className="absolute top-72 sm:top-60 md:top-56">
            <Image src={heroImage} alt="Hero Image" width={1200} height={400} className="" />
          </div>
        </section>

        <section className="w-full bg-[#F3F3F3] relative -mt-32 z-10 py-12 flex flex-col items-center">
          <div className="text-center text-4xl font-semibold pb-8">Feature Products</div>
          <div className="flex flex-row gap-8 flex-wrap items-center justify-center w-[70%] ">
            {/* // Product 1 */}
            <HomePage_ProductCircularCard img={heroImage} />
            <HomePage_ProductCircularCard img={heroImage} />
            <HomePage_ProductCircularCard img={heroImage} />

          </div>
        </section>

        <section className="w-full bg-white flex flex-row justify-around items-center py-12">
          <div className="w-[80%] flex flex-col md:flex-row gap-8 justify-around items-center">
            <div className="w-3/4 md:w-1/2">
              <p className="text-5xl md:text-7xl font-semibold pb-8 md:pb-16 text-[#C6816F]">About</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div>
              <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[360px] lg:h-[360px] flex items-center justify-center border-[#d89687] border-[7px]">
                <div className="rounded-full w-60 h-60 sm:w-[280px] sm:h-[280px] md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] flex items-center justify-center overflow-hidden bg-amber-100">
                  <Image src={heroImage} alt="Product 1" width={340} height={340} className="hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <footer className="w-full bg-[#C6816F] flex items-center justify-center text-black">
          {/* © 2024 Your Company. All rights reserved. */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-20 w-[75%] py-12">
            <div className="flex-1 flex flex-col items-center md:items-start gap-4">
              <div>
                <Image
                  src={logo}
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-xs text-center md:text-left">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="flex-2">
              <div className="font-semibold text-lg pb-4">What they say</div>
              <div className="flex flex-col gap-2">
                {/* Testimonial card 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-sm italic">"Amazing products! Highly recommend this to everyone."</p>
                  <div className="text-xs text-right mt-2">- Customer A</div>
                </div>
                {/* Testimonial card 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                  <p className="text-sm italic">"Great quality and fast shipping."</p>
                  <div className="text-xs text-right mt-2">- Customer B</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg pb-4">Follow Us</div>
              <div className="flex flex-row gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110">
                  F
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110">
                  T
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110">
                  I
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110">
                  L
                </div>
              </div>


            </div>
          </div>

        </footer>

      </main>
    </div>
  );
}
