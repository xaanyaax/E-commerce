import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CardContext';

const Navbar = () => {
  const { cartCount } = useCartContext(); // ✅ Extract cartCount from context

  function searchBtn() {
    alert("Search Button Clicked!");
  }

  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo on the left */}
        <Link to="/">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              Logo
            </div>
          </div>
        </Link>

        {/* Search bar in the center */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-lg">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg leading-5 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 hover:bg-gray-800 transition-colors"
              />
            </div>

            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              onClick={searchBtn}
            >
              Search
            </button>
          </div>
        </div>

        {/* Cart icon on the right */}
        <Link to="/cart">
          <div className="flex-shrink-0">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-lg">
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
