import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-300 p-4 rounded-xl flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-700 text-5xl font-bold">
          {price.price}
        </span>
        <span className="text-2xl font-bold">/month</span>
      </h2>
      <h5 className="text-2xl font-bold my-6 text-center">{price.name}</h5>
      <p className="text-2xl font-bold underline my-3">Features: </p>
      {price.features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}
      <button className="w-full mt-auto bottom-0 hover:bg-blue-600 bg-cyan-500  rounded-lg py-2">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
