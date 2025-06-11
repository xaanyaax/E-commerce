import React from 'react';
import { useCartContext } from '../contexts/CardContext'; 
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useCartContext(); // ✅ Include removeFromCart make sure u extract thrm first!!!

  const totalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96 gap-4">
          <p className="text-xl">Your Cart is Empty!</p>
          <Link to="/">
            <button className="bg-yellow-600 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 h-10 px-6 text-lg rounded-lg transition-all duration-300 transform active:scale-95">
              Shop Now!
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-md">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-green-400 font-medium">{item.price}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)} // ✅ Remove item on click
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-lg transition-all duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-6 text-2xl font-bold">
            Total: ₹{totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
