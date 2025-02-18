import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { kidsdata } from "../Data/BlogData";
import { HouseData } from "../Data/DetailPageData";
import Product from "../UI/Components/Product";

export default function PatelArt() {
    return (
        <>
            <Navbar />
            <section>
                <div className="py-4">
                    <div className="p-0">
                        {kidsdata.map((product) => (
                            <div className="mx-64" key={product.id}>
                                <h1 className="text-2xl font-bold text-black py-3">{product.heading}</h1>
                                <img className="py-3" src={product.imgSrc} alt={product.heading} />
                                <h3 className="test-xl font-semibold text-gray-500 py-3">{product.detail}</h3>
                                <p className="text-md font-normal text-gray-900 py-3">{product.description}</p>
                            </div>
                        ))};
                    </div>
                    <div className="bg-white">
                        <h1 className="text-4xl font-semibold text-arial flex justify-center p-2 text-orange-500">
                            Narrow down your search
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
                    </div>
                </div>
            </section>
            <FooterPage />
        </>
    )
}