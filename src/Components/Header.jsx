import { useEffect, useState } from 'react';
import { TfiMenuAlt } from "react-icons/tfi";
import SearchComponent from '../UI/Components/SearchComponent';
import Country from '../UI/Components/Country';
import axios from 'axios';
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiGift } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState('');
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:7702/login/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUserLoggedIn(false); 
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:7702/cart/all`);
        const cartItems = response.data;
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        setTotalItems(totalQuantity);
      } catch (err) {
        setError("Failed to load cart");
      }
    };

    fetchCart();
  }, []);

  return (
    <>
      <section>
        <div className="header border-b-2">
          <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-200 shadow-md">
            <a href="/" className="text-4xl text-orange-600 hover:text-orange-500 italic font-bold">Etsy</a>
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-x-2 rounded-md bg-white px-4 py-2 text-lg font-semibold text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-100"
              >
                <TfiMenuAlt size={24} /> Category
              </button>
              {isCategoryOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-300">
                  <ul className="py-2">
                    <li><a href="/hergifts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Jewelry</a></li>
                    <li><a href="/baby" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Clothing</a></li>
                    <li><a href="/wedding" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wedding</a></li>
                    <li><a href="/hisgifts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</a></li>
                    <li><a href="/house" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home & Living</a></li>
                    <li><a href="/potraites" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Art & Collectibles</a></li>
                    <li><a href="/birthday" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Books, Film & Music</a></li>
                  </ul>
                </div>
              )}
            </div>
            <SearchComponent searchProduct={searchProduct} SearchUser={(e) => setSearchProduct(e.target.value)} />
            {userLoggedIn ? (
              <>
                <FaUserCircle className="text-white text-2xl" />
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 px-4 py-2 rounded-lg">Logout</button>
              </>
            ) : (
              <a href='/login'>
                <button
                  // onClick={handleLogin}
                  className="px-6 py-2 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-400">Sign-in</button>
              </a>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className="h-12 rounded-lg bg-transparent">
              {isOpen && <Country />}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0414f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" x2="4" y1="22" y2="15" />
              </svg>
            </button>
            <a href="/wishlist">
              <button className="h-12 rounded-lg bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f10404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </a>
            <a href="/cart" className="relative">
              <button className="h-12 rounded-lg bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#04caf1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </a>
          </nav>
          <nav className="flex items-center justify-center bg-gray-900 text-white p-2 relative">
            <div className="hidden md:flex space-x-6">
              <a href="/gifts" className="text-lg hover:text-gray-400"> Gift Mode</a>
              <a href="/potraites" className="text-lg hover:text-gray-400">Creative Portraits</a>
              <a href="/house" className="text-lg hover:text-gray-400">Home Favorites</a>
              <a href="/fashion" className="text-lg hover:text-gray-400">Fashion Finds</a>
              <a href="/registry" className="text-lg hover:text-gray-400">Registry</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden bg-black text-2xl">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-16 right-0 w-48 bg-gray-800 p-6 flex flex-col items-center space-y-4 rounded-lg shadow-lg z-50">
                <a href="/gifts" className="text-lg hover:text-gray-400 flex flex-row"><FiGift />Gift Mode</a>
                <a href="/potraites" className="text-lg hover:text-gray-400">Creative Portraits</a>
                <a href="/house" className="text-lg hover:text-gray-400">Home Favorites</a>
                <a href="/fashion" className="text-lg hover:text-gray-400">Fashion Finds</a>
                <a href="/registry" className="text-lg hover:text-gray-400">Registry</a>
                <button onClick={() => setMobileMenuOpen(false)} className="text-lg bg-black underline">Close</button>
              </div>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}
