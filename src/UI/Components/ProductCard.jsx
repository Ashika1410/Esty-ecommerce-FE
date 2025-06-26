/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../Redux/WishlistSlice";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const productID = searchParams.get("id"); 

  if (!product || product.categoryId < 1 || product.categoryId > 6) {
    return null;
  }

  const handleAddToCart = async () => {
    if (!product || !product.productID) {
      console.error("Invalid product data:", product);
      return;
    }

    console.log("Adding product to cart:", product);

    try {
      const response = await fetch(`http://localhost:7702/api/cart/add`, {
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

  const handleAddToWishlist = async () => {
    if (!product || !product.productID) {
      console.error("Invalid product data:", product);
      return;
    }

    console.log("Adding product to wishlist:", product);

    try {
      const response = await fetch(`http://localhost:7702/api/wishlist/add`, {
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
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <section>
      <div className="group relative rounded-md border p-2 shadow-lg">
        <a href={`/product/${product.productID}`}>
          <div className="w-full h-60 bg-gray-100 rounded-md overflow-hidden">
            <img
              src={product.product_imgSrc}
              alt={product.product_name}
              className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
            />
          </div>
        </a>
        <div className="mt-3 flex flex-col">
          <h3 className="text-lg font-medium text-gray-800">{product.product_name}</h3>
          <p className="text-sm text-gray-600">{product.product_vendors}</p>
          <p className="text-md font-semibold text-gray-900">₹{product.product_price}</p>
          <div className="flex justify-between mt-2">
            <button onClick={() => handleAddToWishlist()} className="text-red-500">
              <FcLike size={24} />
            </button>
            <button onClick={() => handleAddToCart()} className="text-green-600">
              <FaShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
