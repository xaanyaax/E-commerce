import React from 'react';
import Card from '../components/Card'; // make sure the path is correct

function Home() {
    const cards = [
        {
          id: 1,
          title: "Classic Cotton Tee",
          price: "$19.99",
          description: "Soft, breathable, and perfect for everyday wear.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 2,
          title: "Denim Jacket",
          price: "$49.99",
          description: "A timeless piece that pairs with everything.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 3,
          title: "Summer Dress",
          price: "$34.99",
          description: "Light and breezy, ideal for warm weather.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 4,
          title: "Cargo Pants",
          price: "$44.99",
          description: "Comfortable and functional with plenty of pockets.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 5,
          title: "Hooded Sweatshirt",
          price: "$39.99",
          description: "Stay warm and cozy with this premium hoodie.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 6,
          title: "Floral Skirt",
          price: "$29.99",
          description: "Bright floral print, flows beautifully as you walk.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 7,
          title: "Athletic Shorts",
          price: "$24.99",
          description: "Great for workouts or casual lounging.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 8,
          title: "Checked Shirt",
          price: "$27.99",
          description: "Classic checks with a modern fit.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 9,
          title: "Woolen Sweater",
          price: "$54.99",
          description: "Stay cozy and stylish this winter.",
          image: "https://picsum.photos/300/300"
        },
        {
          id: 10,
          title: "Leather Jacket",
          price: "$89.99",
          description: "Rugged style meets premium quality.",
          image: "https://picsum.photos/300/300"
        }
      ];
      

  return (
    <div className="flex flex-wrap gap-17 justify-center p-8 bg-gray-950 min-h-screen">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Home;