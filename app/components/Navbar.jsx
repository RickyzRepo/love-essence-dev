import Image from "next/image";
import logo from "../picture/logo-nobg.png";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-24 md:h-36 flex flex-col items-center justify-center">
            <nav className="max-w-[1800px] w-full lg:w-3/4 hidden lg:flex flex-row gap-8 items-center justify-between">
                <ul className="flex flex-row gap-10 text-xl">
                    <li className="pb-4 "><Link href={"/"} className="cursor-pointer hover:underline hover:underline-offset-20">Home</Link></li>
                    <li className="pb-4 "><Link href={"/s"} className="cursor-pointer hover:underline hover:underline-offset-20">Product</Link></li>
                    <li className="pb-4 "><Link href={"/"} className="cursor-pointer hover:underline hover:underline-offset-20">About</Link></li>
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

            {/* // Mobile Navigation */}
            <nav className="w-full lg:hidden flex flex-row gap-8 items-center justify-between px-4">
                <div className="font-semibold text-3xl">Menu</div>
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="font-semibold text-3xl">Cart</div>
            </nav>
        </div>
    )
};