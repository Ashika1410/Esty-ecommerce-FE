// import React from "react"
// import Navbar from '../Components/Header';
// import FooterPage from '../Components/Footer';
// import Product from "../UI/Components/Product";
// import { HouseData } from "../Data/DetailPageData";

// export default function Home() {

//    return (
//     <>
//     <Navbar/>
//     <div className="bg-white">
//         <h1 className="text-4xl font-semibold text-arial flex justify-center p-2 text-orange-500">
//           Narrow down your search
//         </h1>
//         <h2 className="text-2xl font-medium text-italic flex justify-center p-2 text-green-600">
//           Shop for Your Biggest Day !!
//         </h2>
//         <div className="mx-auto max-w-2xl px-2 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {HouseData.map((product) => (
//               <Product key={product.id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//      <FooterPage/>
//      </>
//    )
//  }

import Navbar from "../Components/Header";
import FooterPage from "../Components/Footer";
import ProductCard from "../UI/Components/ProductCard";


export default function Home({ homeProducts }) {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <h1 className="text-4xl font-semibold text-center p-2 text-orange-500">
          Check out the season's biggest trends
        </h1>
        <h2 className="text-2xl font-medium text-center p-2 text-green-600">
          Shop for Your Biggest Day !!
        </h2>
        <div className="mx-auto max-w-7xl px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {homeProducts.length > 0 ? (
              homeProductsProducts.map((product) => <ProductCard key={product.productID} product={product} />)
            ) : (
              <p className="text-center col-span-full">Loading products...</p>
            )}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}