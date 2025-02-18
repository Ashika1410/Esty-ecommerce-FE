import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { BirthdayData } from "../Data/DetailPageData";
import Product from "../UI/Components/Product";

export default function Personalised () {
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
                                        src="https://i.etsystatic.com/6054905/r/il/fb09a4/3574531004/il_300x300.3574531004_m2me.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Wall Hangings </h3>
                                </div>
                            </a>
                            <a href="/hisgifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Olive drab green insulated bottle with flared screw lid and flat top."
                                        src="https://i.etsystatic.com/6850046/r/il/469be4/4940183406/il_300x300.4940183406_trc5.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Wall Decals & Murals </h3>
                                </div>
                            </a>
                            <a href="/hergifts" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Person using a pen to cross a task off a productivity paper card."
                                        src="https://i.etsystatic.com/6770284/r/il/65b707/1368974143/il_300x300.1368974143_pq31.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Wall Clocks </h3>
                                </div>
                            </a>
                            <a href="/personal" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/7856187/c/2000/2000/0/0/il/f76602/2070358164/il_300x300.2070358164_5ql1.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Wall Shelves </h3>
                                </div>
                            </a>
                            <a href="/wedding" className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden border b-8 rounded-lg bg-white-100 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                                        src="https://i.etsystatic.com/5314514/r/il/4e7680/3805636893/il_300x300.3805636893_sgd3.jpg"
                                        className="h-full w-full object-cover object-center group-hover:opacity-65"
                                    />
                                    <h3 className="mt-2 text-lg text-gray-700 p-2 font-semibold flex justify-center"> Window Clings </h3>
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
                            {BirthdayData.map((product) => (
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