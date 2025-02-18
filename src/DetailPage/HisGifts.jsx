import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { BabyData } from "../Data/DetailPageData";
import Product from "../UI/Components/Product";

export default function HisGifts () {
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
                                        src="https://i.etsystatic.com/44320123/r/il/11d884/6612416122/il_340x270.6612416122_omdp.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Visual Art </h3>
                                </div>
                            </a>
                            <a href="/hisgifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/54702930/r/il/758bd5/6599775718/il_340x270.6599775718_omol.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Anime Potrait </h3>
                                </div>
                            </a>
                            <a href="/hergifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Person using a pen to cross a task off a productivity paper card."
                                        src="https://i.etsystatic.com/25298731/c/1818/1445/0/116/il/298cc0/6000736078/il_340x270.6000736078_28e1.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Dremy Sketch Anime </h3>
                                </div>
                            </a>
                            <a href="/personal" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/16517815/r/il/d5b178/6632626184/il_340x270.6632626184_joj8.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Love struck Christine </h3>
                                </div>
                            </a>
                            <a href="/wedding" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/39421097/r/il/9e1bda/6628254944/il_340x270.6628254944_k6o5.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> VTuber Model </h3>
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
                            {BabyData.map((product) => (
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