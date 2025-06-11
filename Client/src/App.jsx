import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="p-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
