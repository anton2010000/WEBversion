import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 9,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 10,
    name: "Basic Tee",
    imageSrc: "uploads/product.jpeg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function ProductsList({ cart = [], addToCart = () => {} }) {
  const onClickAdd = (productId) => {
    addToCart(products.find((item) => item.id == productId));
  };

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-text-color">
          Товары
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-secondary-bg-color rounded-md"
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full overflow-hidden"
                />
              </div>
              <div className="mt-4 flex justify-between p-2">
                <div>
                  <h3 className="text-sm text-text-color">{product.name}</h3>
                  <p className="mt-1 text-sm text-hint-color">
                    {product.color}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onClickAdd(product.id)}
                  className="w-16 text-button-text-color bg-button-color text-button-text-color focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  {cart.find((item) => item.product.id == product.id) ? (
                    <CheckIcon className="h-5 mx-auto" />
                  ) : (
                    product.price
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
