export default function FooterPage() {
    return (
        <>
            <div>
                <div className="bg-sky-100 p-3 space-y-5">
                    <p className="text-lg flex justify-center">Yes! Send me exclusive offers, unique gift ideas, and personalised tips for shopping and selling on Etsy.</p>
                    <div className='flex justify-center'>
                        <input type="text" placeholder=' Enter your Email ' className='relative h-12 w-96 rounded-full border-2' />
                        <button type="button" className="border-2 absolute ml-72 h-12 w-24 bg-white hover:bg-black rounded-full ">Subscribe</button>
                    </div>
                </div>
                <div className="flex justify-center bg-sky-500 p-3 space-y-3">
                    <button type="button" className="text-xl text-black underline decoration-dashed space-x-4 rounded-lg" data-toggle="tooltip" title="Etsy’s 100% renewable electricity commitment includes the electricity used by the data centres that host Etsy.com, the Sell on Etsy app, and the Etsy app, as well as the electricity that powers Etsy’s global offices and employees working remotely from home in the US.">
                        <i className="fa-solid fa-globe"></i>Etsy is powered by 100% renewable electricity.
                    </button>
                </div>
                <div className="flex flex-row">
                    <div className="bg-blue-900 flex flex-col justify-center p-10 space-y-8 w-2/5">
                        <button className="bg-orange-500 p-3 text-white text-2xl rounded-full w-24 ">Etsy</button>
                        <button className="bg-blue-700 rounded-xl text-white p-2 text-lg">Download the Etsy App</button>
                    </div>
                    <div className="bg-blue-700 flex flex-row text-white space-x-8 p-6s w-full">
                        <div className="flex flex-col p-4 space-y-4">
                            <h1 className="text-2xl">Shop</h1>
                            <a href='#' className="hover:underline duration-300 ...">Gift Cards</a>
                            <a href='#' className="hover:underline duration-300 ...">Esty Registry</a>
                            <a href='#' className="hover:underline duration-300 ...">Sitemap</a>
                            <a href='#' className="hover:underline duration-300 ...">Esty blog</a>
                            <a href='#' className="hover:underline duration-300 ...">Esty United Kingdom</a>
                            <a href='#' className="hover:underline duration-300 ...">Esty Germany</a>
                            <a href='#' className="hover:underline duration-300 ...">Esty Canada</a>
                        </div>
                        <div className="flex flex-col p-4 space-y-4">
                            <h1 className="text-2xl">Sell</h1>
                            <a href='#' className="hover:underline duration-300 ...">Sell on Esty</a>
                            <a href='#' className="hover:underline duration-300 ...">Teams</a>
                            <a href='#' className="hover:underline duration-300 ...">Forums</a>
                            <a href='#' className="hover:underline duration-300 ...">Affilates & Creators</a>
                        </div>
                        <div className="flex flex-col p-4 space-y-4">
                            <h1 className="text-2xl">About</h1>
                            <a href='#' className="hover:underline duration-300 ...">Esty,Inc</a>
                            <a href='#' className="hover:underline duration-300 ...">Policies</a>
                            <a href='#' className="hover:underline duration-300 ...">Investers</a>
                            <a href='#' className="hover:underline duration-300 ...">Careers</a>
                            <a href='#' className="hover:underline duration-300 ...">Press</a>
                            <a href='#' className="hover:underline duration-300 ...">Impact</a>
                            <a href='#' className="hover:underline duration-300 ...">Legal imprint</a>
                        </div>
                        <div className="flex flex-col p-4 space-y-4">
                            <h1 className="text-2xl">Help</h1>
                            <a href='#' className="hover:underline duration-300 ...">Help Center</a>
                            <a href='#' className="hover:underline duration-300 ...">Privacy Settings</a>
                            <div className="flex flex-row p space-x-4 text-2xl">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bitcoin"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" /></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a>
                            </div>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg></a>
                        </div>
                    </div>
                </div>
                <div className="bg-black flex flex-row space-y-6 p-2">
                    <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-90 bg-gray-700 hover:bg-gray-500 duration-300 ... rounded-full text-white p-2 flex justify-start">
                        India | English (IN) | $ (INR)
                    </button>
                    <div className="flex justify-end flex-row text-white space-x-6  ml-96">
                        <a href='#'>© 2024 Etsy, Inc.</a>
                        <a href='#' className="underline decoration-line">Terms of Use</a>
                        <a href='#' className="underline decoration-line"> Privacy</a>
                        <a href='#' className="underline decoration-line"> Interest-based ads</a>
                        <a href='#' className="underline decoration-line"> Local Shops</a>
                        <a href='#' className="underline decoration-line"> Regions</a>
                    </div>
                </div>
            </div>
        </>
    )
}