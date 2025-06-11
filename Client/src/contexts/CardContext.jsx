import { createContext , useContext , useState } from "react";

export const CartContext = createContext();  

export const useCartContext = () => useContext(CartContext) //custom hook basically call it a wrapper

export const CartProvider = ({children}) => {

const[cartItems , setCartItems] = useState([])

const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);  //standard function to add to cart
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };
  
  const cartCount = cartItems.length;

    return(
        <CartContext.Provider value={{cartItems, addToCart , removeFromCart , cartCount}}>
            {children}
        </CartContext.Provider>
    )
}