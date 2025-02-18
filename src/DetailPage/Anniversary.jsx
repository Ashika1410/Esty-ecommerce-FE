import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { PotraitesData } from "../Data/DetailPageData";
import Product from "../UI/Components/Product";

export default function Anniversary() {
    return (
        <>
            <Navbar />
            <section>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-3 sm:py-16 lg:max-w-7xl lg:px-8">
                        <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:grid-cols-5">
                            <a href="/anniversary" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        src="https://i.etsystatic.com/9587904/c/852/852/330/505/il/30a6a5/6362008945/il_300x300.6362008945_fz31.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> White fire Ethiopian </h3>
                                </div>
                            </a>
                            <a href="/hisgifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/5204269/r/il/c77789/6140836251/il_300x300.6140836251_qzlq.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Minimalist Necklace </h3>
                                </div>
                            </a>
                            <a href="/hergifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Person using a pen to cross a task off a productivity paper card."
                                        src="https://i.etsystatic.com/8622539/r/il/1ab144/5226062085/il_300x300.5226062085_8jj5.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Areeba Jewelry </h3>
                                </div>
                            </a>
                            <a href="/personal" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/7504332/c/1129/1129/212/715/il/dd315b/3878903134/il_300x300.3878903134_jto0.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Opal Necklace </h3>
                                </div>
                            </a>
                            <a href="/wedding" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/5632922/c/1621/1621/578/0/il/868f2b/6624073320/il_300x300.6624073320_86m3.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Vintage Black Fire </h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className="text-4xl font-semibold text-arial flex justify-center p-2 text-orange-500">
                        Check out the season's biggest trends
                    </h1>
                    <h2 className="text-2xl font-medium text-italic flex justify-center p-2 text-green-600">
                        Shop for Your Biggest Day !!
                    </h2>
                    <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {PotraitesData.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> 
            <FooterPage />
        </>
    )
}