import React from "react";
import { useCartContext } from "../contexts/CardContext";

function Card({ card }) {

  const { addToCart } = useCartContext();   


    function cartClick() {
      addToCart(card); //passed the prop "card"
      }

  return (
    <div className="bg-gray-900 max-w-sm p-5 h-150 rounded-xl shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={card.image}  // <== updated from card.url to card.image
          alt="product"
          className="object-contain mb-4 hover:scale-110 hover:rotate-2 transition-transform duration-300 cursor-pointer rounded-lg"
        />
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl text-white font-semibold">{card.title}</h2>
          <p className="text-3xl text-green-600 font-bold hover:text-green-500">
            {card.price}
          </p>
          <p className="text-xl text-gray-200">{card.description}</p>
          <button className="bg-yellow-600 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 h-10 w-28 text-lg rounded-lg transition-all duration-300 transform active:scale-95" onClick = {cartClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
