import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Navbar from "../../Components/Header";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [searchParams] = useSearchParams();
  const productID = searchParams.get("id");

  useEffect(() => {
    const fetchWishlistItems = async () => {
      try {
        const response = await fetch(`http://localhost:7702/wishlist/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch wishlist items");

        const data = await response.json();
        console.log("Fetched wishlist Items:", data);

        if (Array.isArray(data.result)) {
          setWishlist(data.result.filter((item) => item.productID !== null));
        } else {
          console.error("Unexpected API response format:", data);
          setWishlist([]);
        }
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
        setWishlist([]);
      }
    };

    fetchWishlistItems();
  }, []);

  const handleAddToCart = async (product) => {
    if (!product || !product.productID) {
      console.error("Invalid product data:", product);
      return;
    }

    try {
      const response = await fetch("http://localhost:7702/cart/add", {
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

  const handleRemove = async (wishlistID) => {
    try {
      const response = await fetch(`http://localhost:7702/wishlist/${wishlistID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to remove item");
      const data = await response.json();
      console.log("Item removed:", data);
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.wishlistID !== wishlistID));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const handleClearWishlist = async () => {
    try {
      const response = await fetch(`http://localhost:7702/wishlist/all`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to clear wishlist");
      const data = await response.json();
      console.log("Cart cleared:", data);
      setWishlist([]);
      dispatch(clearCart());
    } catch (error) {
      console.error("Error clearing Wishlist:", error);
    }
  };

  const handleProceedToBuy = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-orange-400 text-center">
            Esty Customer WishList / Likes
          </h1>
          <div className="border p-4 rounded-lg shadow-lg bg-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Your WishList / Likes</h2>

            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div key={item.wishlistID} className="flex justify-between items-center my-4 border-b pb-4">
                  <a href={`/product/${item.productID}`}>
                    <img
                      src={item.product_imgSrc}
                      alt={item.product_name}
                      className="h-20 w-20 object-cover rounded-lg"
                    />
                  </a>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.product_name}</h3>
                    <p className="text-black font-semibold">₹{item.product_price}</p>
                    <p className="text-sm text-gray-600">{item.product_vendors}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.wishlistID)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-black text-center">Your WishList is empty.</p>
            )}

            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                  onClick={handleClearWishlist}
                >
                  Clear Wishlist
                </button>
                <button
                  onClick={handleProceedToBuy}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
