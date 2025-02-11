import React from 'react';

export default function SearchComponent({ searchProduct, SearchUser }) {
    return (
            <div className="search-bar">
                <input
                    className='border-2 relative h-12 w-96 rounded-lg'
                    type="text"
                    placeholder="Search for Esty Products..."
                    value={searchProduct}
                    onChange={SearchUser}
                />
                 <button type="button" className="border-2 absolute h-12 w-12 text-white bg-orange-600 rounded-lg "><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
    );
}
{/* <input type="text" placeholder=' Search ' className='relative h-12 w-96 rounded-md border-2'/> */}
       