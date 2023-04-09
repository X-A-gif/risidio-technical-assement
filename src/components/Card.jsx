import React from "react";

const Card = ({ artistName, imageUrl, stx, price }) => {
  return (
    <div className="NFT bg-gray-200 border-8  rounded-3xl overflow-hidden shadow-lg ">
      <div className="p-4 ">
        <img className="w-full border-2 rounded-lg" src={imageUrl} alt={artistName} />
      </div>
      
      <div className="px-6">
        <p className="text-gray-700 text-sm ml-32">{stx} STX</p>
        <p className="text-gray-700 text-base ml-36">${price}</p>
      </div>
      <div>
        <div className="text-xl mb-2 mr-20 -ml-4 -mt-12">Artwork</div>
        <div className="text-sm mb-4 mr-20 -mt-2 ">By {artistName}</div>
      </div>
    </div>
  );
};

export default Card;