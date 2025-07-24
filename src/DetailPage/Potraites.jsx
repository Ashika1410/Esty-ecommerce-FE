import { useState, useEffect } from "react";
import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../UI/Components/ProductCard";

// const baseurl = import.meta.env.VITE_API_BASE_URL;

export default function Potraites({ product }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("id");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/product/category/${categoryId}`);
        const result = await response.json();

        if (result && Array.isArray(result.result)) {
          setProducts(result.result);
        } else {
          console.error("Unexpected API response:", result);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [categoryId]);
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-white container mx-auto py-6">
          <h1 className="text-4xl font-semibold text-arial flex justify-center p-2 text-orange-500">
            Check out the season's biggest trends
          </h1>
          <h2 className="text-2xl font-medium text-italic flex justify-center p-2 text-green-600">
            Shop for Your Biggest Day !!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {products.length > 0 ? (
              products.map((product) => <ProductCard key={product.productID} product={product} />)
            ) : (
              <p className="text-center col-span-full">Loading products...</p>
            )}
          </div>
        </div>
      </section>
      <FooterPage />
    </>
  );
}
