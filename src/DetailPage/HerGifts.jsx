import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
// import { HouseData } from "../Data/DetailPageData";
// import Product from "../UI/Components/Product";

export default function HerGifts () {
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
                                        src="https://i.etsystatic.com/31234599/r/il/dba011/3264702862/il_340x270.3264702862_9252.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Chandbali Dangle </h3>
                                </div>
                            </a>
                            <a href="/hisgifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/33949385/r/il/6bd116/6578744425/il_340x270.6578744425_ixeq.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Floral Oxidized </h3>
                                </div>
                            </a>
                            <a href="/hergifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Person using a pen to cross a task off a productivity paper card."
                                        src="https://i.etsystatic.com/32144117/r/il/34c4ec/6626959614/il_340x270.6626959614_8k4q.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Sterling Silver </h3>
                                </div>
                            </a>
                            <a href="/personal" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/23922658/c/1588/1262/373/1208/il/5b126a/3107511188/il_340x270.3107511188_oyj3.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Topaz and Real Crystal </h3>
                                </div>
                            </a>
                            <a href="/wedding" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/55982002/r/il/3f03a6/6592429906/il_340x270.6592429906_jwco.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Punjabi Jwellary </h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-white">
                    <h1 className="text-4xl font-semibold text-arial flex justify-center p-2 text-orange-500">
                        Check out the season's biggest trends
                    </h1>
                    <h2 className="text-2xl font-medium text-italic flex justify-center p-2 text-green-600">
                        Shop for Your Biggest Day !!
                    </h2>
                    <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {HouseData.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div> */}
            </section>
        <FooterPage />
        </>
    )
}