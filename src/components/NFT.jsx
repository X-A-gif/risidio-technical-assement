import React, { useState, useEffect } from "react";
import Card from "./Card";

const NFT = () => {
  const [cardsToShow, setCardsToShow] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 428) {
        setCardsToShow(3);
      } else {
        setCardsToShow(12);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateCardData = (count) => {
    const cardData = [];
    const artistNames = ["John Smith", "Jane Doe", "Bob Johnson"];
    const collectionNames = ["Super NFT", "Cool Collection", null];

    for (let i = 0; i < count; i++) {
      const randomPrice = Math.floor(Math.random() * 100) + 1;
      const randomArtistName = artistNames[Math.floor(Math.random() * artistNames.length)];
      const randomCollectionName = collectionNames[Math.floor(Math.random() * collectionNames.length)];

      cardData.push({
        artistName: randomArtistName,
        imageUrl: `https://source.unsplash.com/random/400x400?nft=${i}`,
        price: randomPrice,
        stx: randomPrice,
        collectionName: randomCollectionName,
      });
    }

    return cardData;
  };

  const cardData = generateCardData(cardsToShow);

  return (
    <div className="card-container"> 
    {cardData.map((card, index) => (
      <Card
        key={index}
        artistName={card.artistName}
        imageUrl={card.imageUrl}
        price={card.price}
        stx={card.stx}
        collectionName={card.collectionName}
      />
    ))}
</div>
  );
};

export default NFT;
