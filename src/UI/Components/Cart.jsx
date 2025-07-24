/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaTrashAlt, FaRegHeart } from "react-icons/fa";
import Navbar from "../../Components/Header";
import { clearCart } from "../../Redux/CartSlice";

// const baseurl = import.meta.env.VITE_API_BASE_URL;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [searchParams] = useSearchParams();
  const productID = searchParams.get("id");
  const items = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/cart/all`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch cart items");

        const data = await response.json();
        console.log("Fetched Cart Items:", data);

        if (Array.isArray(data.result)) {
          setCart(data.result.filter((item) => item.productID !== null));
        } else {
          console.error("Unexpected API response format:", data);
          setCart([]);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setCart([]);
      }
    };

    fetchCartItems();
  }, []);

  const handleUpdate = async (productid, quantity) => {
    if (!productid || quantity < 1) {
      console.error("Invalid productID or quantity:", { productID, quantity });
      alert("Invalid Product ID or Quantity");
      return;
    }
  
    try {
      console.log("Sending API request:", {
        url: `${process.env.VITE_API_BASE_URL}/api/cart/${productID}`,
        body: JSON.stringify({ quantity }),
      });
  
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/cart/${productID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error updating cart:", errorText);
        return;
      }
  
      const updatedItem = await response.json();
      console.log("Cart updated successfully:", updatedItem);
  
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productid === productID ? { ...item, quantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };  
  
  const handleRemove = async (cartID) => {
    try {
      const response = await fetch(`${process.env.VITE_API_BASE_URL}/api/cart/${cartID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to remove item");
      const data = await response.json();
      console.log("Item removed:", data);
      setCart((prevCart) => prevCart.filter((item) => item.cartID !== cartID));
    } catch (error) {
      console.error("Error removing item:", error);
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

  const handleClearCart = async () => {
    try {
      const response = await fetch(`${baseurl}/api/cart/removeall`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to clear cart");
      const data = await response.json();
      console.log("Cart cleared:", data);
      setCart([]);
      dispatch(clearCart());
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handleProceedToBuy = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before proceeding to checkout!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-orange-400 text-center">
            Etsy Shopping Cart
          </h1>
          <div className="border p-4 rounded-lg shadow-lg bg-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.cartID}
                  className="flex justify-between items-center my-4 border-b pb-4 px-6"
                >
                  <a href={`/product/${item.productID}`}>
                    <img
                      src={item.product_imgSrc || "fallback-image.jpg"}
                      alt={item.product_name || "Unknown"}
                      className="h-36 w-36 object-cover rounded-lg"
                    />
                  </a>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.product_name || "Unknown Product"}</h3>
                    <p className="text-black font-semibold">
                      ₹{item.product_price ?? "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">{item.product_vendors || "Unknown Vendor"}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-300 transition"
                      onClick={() => handleAddToWishlist(item)}
                    > <FaRegHeart /> </button>
                    <button
                      onClick={() => handleUpdate(item.productID, item.Quantity - 1)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    > - </button>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-gray-800 bg-gray-100 py-2 px-4 rounded-lg border">
                        {item.Quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => handleUpdate(item.productID, item.Quantity + 1)}
                      className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                    > + </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.cartID)}
                    className="text-red-500 hover:text-red-700"
                  > <FaTrashAlt size={20} />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-black">Your cart is empty.</p>
            )}

            <div className="flex justify-between items-center mt-6">
              <span className="text-lg font-bold text-black">
                Total: ₹
                {cart.reduce((total, item) => total + (item.product_price || 0) * (item.Quantity || 1), 0)}
              </span>
              <div className="flex gap-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                  onClick={handleClearCart}
                >
                  Clear Cart
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

export default Cart;
