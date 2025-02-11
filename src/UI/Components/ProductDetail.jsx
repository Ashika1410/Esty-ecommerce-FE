import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../Redux/wishlistSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetail = ( {product} ) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    dispatch(addItem(product));
    setIsAdded(true);
    console.log("Added to cart:",product); 
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product)); 
    console.log("Added to wishlist",product);
  };

  const handleProceedToBuy = () => {
    navigate ('/checkout');
  };

  const [selectedLocation, setSelectedLocation] = useState("New York");
  const [reviews, setReviews] = useState([
    { id: 1, user: "John Doe", rating: 5, comment: "Amazing product!" },
    { id: 2, user: "Jane Smith", rating: 4, comment: "Very useful, but a bit expensive." },
  ]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg p-6 w-full h-full flex flex-row mx-96">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-shrink-0">
          <button className="absolute top-2 right-2 bg-white rounded-full transition animate-pulse" onClick={handleAddToWishlist}>
          <FaRegHeart size={24} />
          </button>
           <div className="flex items-center mt-2">
            {renderStars(4.5)}
            <span className="ml-2 text-gray-600">(4.5 stars)</span>
          </div>
          {/* <p className={`mt-2 ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
            {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
          </p> */}
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4 mt-4 w-96 h-full">
          <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={handleAddToCart}
            >
              Add to Cart 
              </button>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={handleProceedToBuy}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
            <label className="font-semibold">Delivery Location:</label>
            <select
              className="ml-2 p-2 border rounded"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="Chennai">Chennai</option>
              <option value="KanyaKumari">KanyaKumari</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            </select>
          </div>
          <div className="mt-6">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="mt-3 p-3 border-b">
              <p className="font-bold">{review.user}</p>
              <div className="flex items-center">{renderStars(review.rating)}</div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;