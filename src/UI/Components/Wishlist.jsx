import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromWishlist, clearWishlist } from "../../Redux/WishlistSlice";
import { FaTrashAlt } from "react-icons/fa";
import { addItem } from "../../Redux/CartSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
  };
  const handleClearWishlist = () => {
    dispatch(clearWishlist())
  };
  const handleProceedToBuy = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-orange-400 text-center">
          Esty Customer WishList / Likes
        </h1>
        <div className="border p-4 rounded-lg shadow-lg bg-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-black">Your WishList / Likes</h2>
          {wishlistItems.length === 0 ? (
            <p className="text-black">Your WishList is empty.</p>
          ) : (
            <>
              {wishlistItems.map((item) => (
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
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={handleProceedToBuy}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                      >
                        Proceed to Checkout
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
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={handleClearWishlist}
              >
                Clear Wishlist
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
