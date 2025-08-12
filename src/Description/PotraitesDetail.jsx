import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { FaRegHeart } from "react-icons/fa";

export default function PotraitesDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productID = searchParams.get("id"); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/product/${id}`); 
        const result = await response.json();

        if (!result || !Array.isArray(result.result)) {
          console.error("Unexpected API response format:", result);
          setProducts([]);
          return;
        }

        setProducts(result.result);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [id]);

  const handleAddToCart = async (product) => {
    if (!product || !product.productID) {
      console.error("Invalid product data:", product);
      return;
    }

    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productid: product.productID,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response from server:", errorText);
        return;
      }

      const data = await response.json();
      console.log("Cart Add Response:", data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleAddToWishlist = async (product) => {
    if (!product || !product.productID) {
      console.error("Invalid product data:", product);
      return;
    }

    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/wishlist/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productid: product.productID,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response from server:", errorText);
        return;
      }

      const data = await response.json();
      console.log("Wishlist Add Response:", data);
    } catch (error) {
      console.error("Error adding product to Wishlist:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto rounded-lg p-8">
          {products
            .filter((product) => String(product.productID) === String(id))
            .map((product) => (
              <div key={product.productID} className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2 relative">
                  <img
                    src={product.product_imgSrc}
                    alt={product.product_name}
                    className="rounded-lg object-cover w-full md:w-80 shadow-md"
                  />
                  <button
                    className="absolute top-4 left-64 bg-white rounded-full p-2 shadow-md hover:bg-red-100 transition"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <FaRegHeart size={28} className="text-red-500" />
                  </button>
                </div>
                <div className="flex flex-col w-full md:w-1/2 justify-between">
                  <h1 className="text-3xl font-bold text-gray-900">{product.product_name}</h1>
                  <p className="text-gray-600 my-4">{product.product_description || "No description available."}</p>
                  <span className="text-2xl font-semibold text-gray-800">₹{product.product_price}</span>
                  <p className="text-gray-800 my-4 text-xl">{product.product_vendors}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-gray-800">₹{product.product_price}</span>
                    <div className="flex items-center space-x-2">
                      Rating: <span className="text-gray-600">(4.5 stars)</span>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button
                      className="px-6 py-3 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-105 shadow-md"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      Add to Wishlist
                    </button>
                    <button
                      className="px-6 py-3 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-md"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="px-6 py-3 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-md"
                      onClick={() => navigate("/checkout")}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {products.length === 0 && <p className="text-center text-gray-500">No product found.</p>}
        </div>
      </section>
      <FooterPage />
    </>
  );
}
