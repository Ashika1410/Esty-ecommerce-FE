import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItem } from "../Redux/CartSlice";
import { addToWishlist } from "../Redux/WishlistSlice";
import FooterPage from "../Components/Footer";
import Navbar from "../Components/Header";
import { FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { WeddingData } from "../Data/DetailPageData";

export default function WeddingDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("Chennai");
  const [reviews] = useState([
    { id: 1, user: "John Doe", rating: 5, comment: "Amazing product!" },
    { id: 2, user: "Jane Smith", rating: 4, comment: "Very useful, but a bit expensive." },
  ]);

  const productId = params.productId;
  if (!productId) {
    return (
      <>
        <Navbar />
        <section className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
            <p className="text-gray-600">Sorry, the product you are looking for does not exist.</p>
          </div>
        </section>
        <FooterPage />
      </>
    );
  }

  const parsedId = parseInt(productId);
  const thisProduct = WeddingData.find((p) => p.id === parsedId);

  const handleAddToCart = () => {
    dispatch(addItem(thisProduct));
    console.log("Added to cart:", thisProduct);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(thisProduct));
    console.log("Added to wishlist", thisProduct);
  };

  const handleProceedToBuy = () => {
    navigate("/checkout");
  };

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
    <>
      <Navbar />
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto rounded-lg p-8">
          {thisProduct ? (
            <div className="flex flex-col md:flex-row gap-10">
              {/* Product Image */}
              <div className="w-full md:w-1/2 relative">
                <img
                  src={thisProduct.imageSrc}
                  alt={thisProduct.imageAlt}
                  className="rounded-lg object-cover w-full md:w-80 shadow-md"
                />
                <button
                  className="absolute top-4 left-64 bg-white rounded-full p-2 shadow-md hover:bg-red-100 transition"
                  onClick={handleAddToWishlist}
                >
                  <FaRegHeart size={28} className="text-red-500" />
                </button>
              </div>

              {/* Product Details */}
              <div className="flex flex-col w-full md:w-1/2 justify-between">
                <h1 className="text-3xl font-bold text-gray-900">{thisProduct.name}</h1>
                <p className="text-gray-600 my-4 leading-relaxed">
                  {thisProduct.description || "No description available."}
                </p>
                <p className="text-gray-800 my-4 text-xl">{thisProduct.vendors}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-gray-800">${thisProduct.price}</span>
                  <div className="flex items-center space-x-2">
                    {renderStars(4.5)}
                    <span className="text-gray-600">(4.5 stars)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                  <button
                    className="px-6 py-3 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition transform hover:scale-105 shadow-md"
                    onClick={handleAddToWishlist}
                  >
                    Add to Wishlist
                  </button>
                  <button
                    className="px-6 py-3 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-md"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="px-6 py-3 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-md"
                    onClick={handleProceedToBuy}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10">
              <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
              <p className="text-gray-600">The product you are looking for may be unavailable.</p>
            </div>
          )}

          {/* Delivery & Reviews */}
          {thisProduct && (
            <div className="mt-10">
              {/* Delivery Location */}
              <div className="flex items-center mt-6">
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

              {/* Customer Reviews */}
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
          )}
        </div>
      </section>
      <FooterPage />
    </>
  );
}
