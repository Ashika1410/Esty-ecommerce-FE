import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, updateItem, clearCart } from "../../Redux/CartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { addToWishlist } from "../../Redux/WishlistSlice";
import Navbar from "../../Components/Header";
import { FaRegHeart } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = items.reduce((total, item) => {
    const parts = item.price.split(/[\s(]/);
    const numericPrice = parseFloat(parts[0].replace(/[^0-9.]/g, "")) || 0;
    return total + numericPrice * item.quantity;
  }, 0);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdate = (id, newQuantity) => {
    if (newQuantity < 1) {
      alert("Quantity cannot be less than 1");
      return;
    }
    dispatch(updateItem({ id, quantity: newQuantity }));
  };
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedToBuy = () => {
    if (items.length === 0) {
      alert("Your cart is empty. Add items before proceeding to buy!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-orange-400 text-center">Esty Shopping Cart</h1>
          <div className="border p-4 rounded-lg shadow-lg bg-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-black">Your Cart</h2>
            {items.length === 0 ? (
              <p className="text-black">Your cart is empty.</p>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center my-4 border-b pb-4">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-20 w-20 object-cover rounded-lg"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-black font-semibold">{item.price}</p>
                      <p className="text-sm text-gray-600">{item.vendors}</p>
                      <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-6 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-300 transition"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <FaRegHeart />
                      </button>
                        <button
                          onClick={() => handleUpdate(item.id, item.quantity - 1)}
                          className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                          -
                        </button>
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-bold text-gray-800 bg-gray-100 py-2 px-4 rounded-lg border">
                            {item.quantity}
                          </span>
                        </div>
                        <button
                          onClick={() => handleUpdate(item.id, item.quantity + 1)}
                          className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                ))}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-lg font-bold text-black">Total: ₹{totalAmount}</span>
                  <div className="flex gap-4">
                    <button
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                      onClick={handleClearCart}>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
