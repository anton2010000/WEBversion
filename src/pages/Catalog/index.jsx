import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useOutletContext } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "t-short",
    imageSrc: "uploads/product.jpeg",
    price: 35,
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee 2",
    imageSrc: "uploads/product.jpeg",
    price: 400,
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee 3",
    imageSrc: "uploads/product.jpeg",
    price: 1000,
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee 4",
    imageSrc: "uploads/product.jpeg",
    price: 1000,
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee 5",
    imageSrc: "uploads/product.jpeg",
    price: 100,
    color: "Black",
  },
  {
    id: 6,
    name: "Basic Tee 6",
    imageSrc: "uploads/product.jpeg",
    price: 75,
    color: "Black",
  },
  {
    id: 7,
    name: "Basic Tee 7",
    imageSrc: "uploads/product.jpeg",
    price: 40,
    color: "Black",
  },
  {
    id: 8,
    name: "Basic Tee 8",
    imageSrc: "uploads/product.jpeg",
    price: 180,
    color: "Black",
  },
  {
    id: 9,
    name: "Basic Tee 9",
    imageSrc: "uploads/product.jpeg",
    price: 211,
    color: "Black",
  },
  {
    id: 10,
    name: "Basic Tee 10",
    imageSrc: "uploads/product.jpeg",
    price: 655,
    color: "Black",
  },
];

export default function Catalog() {
  const [cart, addToCart] = useOutletContext();

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
              className="group relative bg-bg-color rounded-md overflow-hidden"
            >
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
                  className="w-16 flex justify-center text-button-text-color bg-button-color text-button-text-color focus:outline-none font-medium rounded-lg text-sm py-2.5"
                >
                  {cart.find((item) => item.product.id == product.id) ? (
                    <CheckIcon className="h-5 mx-auto" />
                  ) : (
                    product.price + " руб"
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
