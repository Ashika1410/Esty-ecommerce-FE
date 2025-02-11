import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/CartSlice";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { addToWishlist } from "../../Redux/wishlistSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
    console.log("Added to cart:", product);
  };
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    console.log("Added to Wishlist:", product);
  };

  return (
    <div key={product.id} className="group relative rounded-md">
      <div className="aspect-h-1 aspect-w-1 w-full h-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href={product.href}>
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </a>
        <button className="absolute top-8 right-4 rounded-full bg-red-300 transition animate-pulse" onClick={handleAddToWishlist}>
        <FcLike size={24} />
        </button>
        <button className="absolute bottom-12 right-4 rounded-full transition" onClick={handleAddToCart}>
        <FaShoppingCart size={24} />
        </button>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        <h3 className="text-md text-gray-700">{product.name}</h3>
        <p className="text-sm font-semibold text-gray-900">{product.price}</p>
        <p className="text-sm text-gray-600">{product.vendors}</p>
        {/* <button className="text-sm h-12 w-32 font-medium rounded-md p-2 bg-yellow-200 hover:bg-yellow-400 text-black"
          onClick={handleAddToCart}
        > Add to Cart </button> */}
      </div>
    </div>
  );
};

export default Product;