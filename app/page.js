import Image from "next/image";
import logo from "../public/picture/logo-nobg.png";
import heroImage from "../public/picture/Flower_banner_png.png";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F3F3F3] font-sans ">
      <main className="w-full flex flex-col items-center">
        <div className="w-full h-36 flex flex-col items-center justify-center">
          <nav className="max-w-[1200px] w-[1200px] flex flex-row gap-8 items-center justify-between">
            <ul className="flex flex-row gap-10 text-xl">
              <li className="pb-4 "><div className="cursor-pointer hover:underline hover:underline-offset-20">Home</div></li>
              <li className="pb-4 "><div className="cursor-pointer hover:underline hover:underline-offset-20">Product</div></li>
              <li className="pb-4 "><div className="cursor-pointer hover:underline hover:underline-offset-20">About</div></li>
            </ul>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Image
                src={logo}
                alt="Logo"
                width={300}
                height={300}
              />
            </div>
            <div className="font-semibold text-3xl">Cart</div>
          </nav>
        </div>

        <section className="w-full h-[580px] bg-[#FED9D9] text-center flex flex-col items-center relative">
          <h1 className="text-[34px] font-normal mt-32 w-[600px] tracking-wider leading-12">Your curated collection of diyas, candles, diffusers & room freshners</h1>
          <div className="absolute top-56">
            <Image src={heroImage} alt="Hero Image" width={1200} height={400} className="" />
          </div>
        </section>

        <section className="w-full bg-[#F3F3F3] relative -mt-32 z-10 py-12 flex flex-col items-center">
          <div className="text-center text-4xl font-semibold pb-8">Feature Products</div>
          <div className="flex flex-row gap-8 flex-wrap items-center justify-center w-[70%] ">
            {/* // Product 1 */}
            <div>
              <div className="rounded-full  w-[300px] h-[300px] flex items-center justify-center border-[#d89687] border-[7px]">
                <div className="rounded-full w-[280px] h-[280px] flex items-center justify-center overflow-hidden bg-amber-100">
                  <Image src={heroImage} alt="Product 1" width={280} height={280} className="hover:scale-110" />
                </div>
              </div>
              <div className="text-center mt-2">Product 1</div>
            </div>

            <div>
              <div className="rounded-full  w-[300px] h-[300px] flex items-center justify-center border-[#d89687] border-[7px]">
                <div className="rounded-full w-[280px] h-[280px] flex items-center justify-center overflow-hidden bg-amber-100">
                  <Image src={heroImage} alt="Product 1" width={280} height={280} className="hover:scale-110" />
                </div>
              </div>
              <div className="text-center mt-2">Product 1</div>
            </div>

            <div>
              <div className="rounded-full  w-[300px] h-[300px] flex items-center justify-center border-[#d89687] border-[7px]">
                <div className="rounded-full w-[280px] h-[280px] flex items-center justify-center overflow-hidden bg-amber-100">
                  <Image src={heroImage} alt="Product 1" width={280} height={280} className="hover:scale-110" />
                </div>
              </div>
              <div className="text-center mt-2">Product 1</div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white flex flex-row justify-around items-center py-12">
          <div className="w-[80%] flex flex-row justify-around items-center">
            <div className="w-1/2">
              <p className="text-7xl font-semibold pb-16 text-[#C6816F]">About</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div>
              <div>
                <div className="rounded-full  w-[360px] h-[360px] flex items-center justify-center border-[#d89687] border-[7px]">
                  <div className="rounded-full w-[340px] h-[340px] flex items-center justify-center overflow-hidden bg-amber-100">
                    <Image src={heroImage} alt="Product 1" width={280} height={280} className="hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full bg-[#C6816F] flex items-center justify-center text-black">
          {/* © 2024 Your Company. All rights reserved. */}
          <div className="flex flex-row items-end justify-center gap-20 w-[75%] py-12">
            <div className="flex-1">
              <div>
                <Image
                  src={logo}
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-xs">
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
