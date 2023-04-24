import { CurrencyPoundIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/dist/client/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, description, category, image, price }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        className="h-5"
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="ZAR" />
      </div>

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
