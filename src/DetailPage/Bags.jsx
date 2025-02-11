import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { bagsdata } from "../Data/BlogData";

export default function Bags() {
    return (
        <>
            <Navbar />
            <section>
                <div className="py-4">
                <h1 className="font-normal px-32 py-2 text-5xl">Etsy Journal</h1>
                    <p className="font-normal px-32 py-2">Explore ideas and inspiration for creative living</p>
                    <h2 className="text-4xl font-serif font-normal flex justify-center">14 Beautiful Bags That Express Your Unique Style</h2>
                    <div className="p-5 mx-24">
                        <img src="https://i.etsystatic.com/inv/1b86b2/5514321927/inv_fullxfull.5514321927_50cniifw.jpg?version=0" alt="one" />
                        <div className="p-3 mx-40">
                            <h2 className="text-md font-medium text-black">by Aishwarya Singh</h2>
                            <p className="text-sm font-normal text-gray-400">03-Nov-2023</p>
                            <h3 className="py-3 font-normal text-gray-600">Amp up your fashion game with bags that perfectly match your aesthetic.</h3>
                            <p className="py-2 font-normal text-gray-900">Your bag should have the superpower to accommodate all the essentials you need while also giving a finishing touch to your outfit. And when it comes to bags, you can have them as flashy and fabulous or as subtle and stylish. Let them hang beautifully on your elbows along with bangles, complementing a traditional outfit, or shoulder them in style on your way to work—these bags know how to make a statement. Read on to explore tote bags for your weekly fresh produce shopping, elegant crossbody bags that become a wardrobe staple, and quirky bags that fetch you compliments from every direction.</p>
                        </div>
                    </div>
                    <div className="p-0">
                        {bagsdata.map((product) => (
                            <div className="mx-64" key={product.id}>
                                <h1 className="text-2xl font-bold text-black py-3">{product.heading}</h1>
                                <img className="py-3" src={product.imgSrc} alt={product.heading} />
                                <h3 className="test-xl font-semibold text-gray-500 py-3">{product.detail}</h3>
                                <p className="text-md font-normal text-gray-900 py-3">{product.description}</p>
                            </div>
                        ))};
                    </div>
                    <div className="flex flex-row mx-64 py-2">
                        <img className="px-3 rounded-full h-32 w-32" 
                        src="https://i.etsystatic.com/inv/9f668d/6085119472/inv_fullxfull.6085119472_fd9j7grt.jpg?version=0" alt="1" />
                        <div>
                        <h1 className="py-2 font-bold text-black">Divya Sharma</h1>
                        <p className="py-2 ">Divya Sharma is Etsy India's Brand Content Lead. In her free time, you can find her curled up with a good book, masala chai and her rescue dog.</p>
                        </div>
                    </div>
                    <div className="place-items-center py-4">
                        <p className="text-2xl py-3">0 comments</p>
                        <button className="w-96 bg-gray-300 rounded-md text-bold font-normal p-3">Sign in to share your thoughts </button>
                    </div>
                </div>
            </section>
            <FooterPage />
        </>
    )
}