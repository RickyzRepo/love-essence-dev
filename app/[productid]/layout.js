import Link from 'next/link';
import Navbar from '../components/Navbar';
import Script from 'next/script';

export async function generateMetadata({ params }) {
    const { productid } = await params;
    return {
        title: `Product ${productid}`,
        description: `Details and pages for product ${productid}`,
    };
}

export default async function ProductLayout({ children, params }) {
    const { productid } = await params;

    return (
        <div className='flex min-h-screen justify-center bg-[#F3F3F3] font-sans'>
            <main className='max-w-[1800px] w-full flex flex-col items-center'>
                <Navbar />
                <hr className='border-gray-300 w-full md:w-7/8' />

                <div className='w-full flex items-center justify-center'>
                    {children}
                </div>
                <Script src="https://checkout.razorpay.com/v1/checkout.js" /> {/* Razorpay Script for Window Object setup */}
            </main>
        </div>
    );
}