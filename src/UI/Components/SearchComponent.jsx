/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export default function SearchComponent({ searchProduct, SearchUser }) {
    return (
        <div className="relative w-96">
            <input
                className="border-2 h-12 w-full pl-4 pr-12 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                type="text"
                placeholder="Search for Etsy Products..."
                value={searchProduct}
                onChange={SearchUser}
            />
            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600">
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </button>
        </div>
    );
}

       