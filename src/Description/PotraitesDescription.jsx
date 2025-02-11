// import { useParams } from "react-router-dom";
// import FooterPage from "../Components/Footer";
// import Navbar from "../Components/Header";
// import ProductDetail from "../UI/Components/ProductDetail";
// import { PotraitesData } from "../Data/DetailPageData";

// export default function PotraitesDescription() {
    const params = useParams();
    console.log("URL Params:", params);

    const productId = params.productId;
    if (!productId) {
        console.warn("No productId found in URL!");
    }

    const parsedId = parseInt(productId);
    console.log("Parsed Product ID:", parsedId);

    const thisProduct = PotraitesData.find((p) => p.id === parsedId);

//     if (!thisProduct) {
//         return (
//             <>
//                 <Navbar />
//                 <section className="flex items-center justify-center min-h-screen">
//                     <div className="text-center">
//                         <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
//                         <p className="text-gray-600">Sorry, the product you are looking for does not exist.</p>
//                     </div>
//                 </section>
//                 <FooterPage />
//             </>
//         );
//     }

//     return (
//         <>
//             <Navbar />
//             <section>
//                 <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
//                     <div className="flex flex-col md:flex-row gap-6">
//                         <div className="flex-shrink-0">
//                             <img
//                                 src={thisProduct.imageSrc}
//                                 alt={thisProduct.imageAlt}
//                                 className="rounded-lg object-cover w-full h-64 md:w-64"
//                             />
//                         </div>
//                         <div className="flex flex-col justify-between">
//                             <h1 className="text-2xl font-bold text-gray-800">{thisProduct.name}</h1>
//                             <p className="text-gray-600 my-4">{thisProduct.description || "No description available."}</p>
//                             <div className="text-xl font-semibold text-gray-800">
//                                 {thisProduct.price}
//                             </div>
//                         </div>
//                     </div>
//                     <ProductDetail />
//                 </div>
//             </section>
//             <FooterPage />
//         </>
//     );
// }

import { useParams } from "react-router-dom";
import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import ProductDetail from "../UI/Components/ProductDetail";
import { PotraitesData } from "../Data/DetailPageData";

export default function PotraitesDescription() {
    const params = useParams();
    console.log("URL Params:", params);

    const productId = params.productId;
    if (!productId) {
        console.warn("No productId found in URL!");
    }

    const parsedId = parseInt(productId);
    console.log("Parsed Product ID:", parsedId);

    const thisProduct = PotraitesData.find((p) => p.id === parsedId);

    return (
        <>
            <Navbar />
            <section>
                <div className="bg-white flex flex-row rounded-lg shadow-lg p-6 max-w-2xl w-full">
                    {thisProduct ? (
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <img
                                    src={thisProduct.imageSrc}
                                    alt={thisProduct.imageAlt}
                                    className="rounded-lg object-cover w-full h-64 md:w-64"
                                />
                            </div>
                            <div className="flex flex-col justify-between">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {thisProduct.name}
                                </h1>
                                <p className="text-gray-600 my-4">
                                    {thisProduct.description || "No description available."}
                                </p>
                                <div className="text-xl font-semibold text-gray-800">
                                    {thisProduct.price}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <h1 className="text-3xl font-bold text-gray-800">
                                Product Not Found
                            </h1>
                            <p className="text-gray-600">
                                The product you are looking for may be unavailable.
                            </p>
                        </div>
                    )}
                    <ProductDetail />
                </div>
            </section>
            <FooterPage />
        </>
    );
}
