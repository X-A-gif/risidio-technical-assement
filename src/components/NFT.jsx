import React from "react";
import Card from "./Card";

const ExampleComponent = () => {
    const randomPrice = Math.floor(Math.random() * 100) + 1;

    const cardData = [
        {
          artistName: "John Smith",
          imageUrl: "https://source.unsplash.com/random/400x400",
          price: Math.floor(Math.random() * 100) + 1,
        },
        {
          artistName: "Jane Doe",
          imageUrl: "https://source.unsplash.com/random/400x400",
          price: Math.floor(Math.random() * 100) + 1,
        },
        {
          artistName: "Bob Johnson",
          imageUrl: "https://source.unsplash.com/random/400x400",
          price: Math.floor(Math.random() * 100) + 1,
        },
        {
            artistName: "Bob Johnson",
            imageUrl: "https://source.unsplash.com/random/400x400",
            price: Math.floor(Math.random() * 100) + 1,
          },
          {
            artistName: "Bob Johnson",
            imageUrl: "https://source.unsplash.com/random/400x400",
            price: Math.floor(Math.random() * 100) + 1,
          },
          {
            artistName: "Bob Johnson",
            imageUrl: "https://source.unsplash.com/random/400x400",
            price: Math.floor(Math.random() * 100) + 1,
          },
          {
            artistName: "Jane Doe",
            imageUrl: "https://source.unsplash.com/random/400x400",
            price: Math.floor(Math.random() * 100) + 1,
          },
          {
            artistName: "Bob Johnson",
            imageUrl: "https://source.unsplash.com/random/400x400",
            price: Math.floor(Math.random() * 100) + 1,
          },
          {
              artistName: "Bob Johnson",
              imageUrl: "https://source.unsplash.com/random/400x400",
              price: Math.floor(Math.random() * 100) + 1,
            },
            {
              artistName: "Bob Johnson",
              imageUrl: "https://source.unsplash.com/random/400x400",
              price: Math.floor(Math.random() * 100) + 1,
            },
            {
              artistName: "Bob Johnson",
              imageUrl: "https://source.unsplash.com/random/400x400",
              price: Math.floor(Math.random() * 100) + 1,
            },
            {
              artistName: "Bob Johnson",
              imageUrl: "https://source.unsplash.com/random/400x400",
              price: Math.floor(Math.random() * 100) + 1,
            },
      ];


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {cardData.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <Card
              artistName={card.artistName}
              imageUrl={card.imageUrl}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent;
