import React from "react";

const Card = ({ artistName, imageUrl, price }) => {
  return (
    <div className="NFT mt-10 rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={artistName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{artistName}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
    </div>
  );
};

export default Card;