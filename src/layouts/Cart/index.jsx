import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function Cart({ cart = [], onCartRemove }) {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(
      cart.reduce((sum, item) => {
        sum += item.count;
        return sum;
      }, 0)
    );
    setTotal(
      cart.reduce((sum, item) => {
        sum += item.count * item.product.price;
        return sum;
      }, 0)
    );
  }, [cart]);

  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-link-color relative"
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open cart</span>
        <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
        {cart.length > 0 && (
          <div className="flex items-center justify-center absolute top-0 right-0 h-5 w-5 rounded-xl bg-rose-500 text-sm/[8px] text-text-color">
            {count}
          </div>
        )}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col bg-bg-color shadow-xl">
                      <div className="flex flex-col flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-text-color">
                            Корзина
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-link-color"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        {cart.length > 0 && (
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {cart.map(({ product, count }) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.imageSrc}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-text-color">
                                          <h3>{product.name}</h3>
                                          <p className="ml-4">
                                            {product.price} руб
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-text-color">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-text-color">
                                          Количество: {count}
                                        </p>

                                        <div className="flex">
                                          <button
                                            onClick={() =>
                                              onCartRemove(product.id)
                                            }
                                            type="button"
                                            className="font-medium text-link-color"
                                          >
                                            Удалить
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {cart.length == 0 && (
                          <div className="flex justify-center items-center grow text-text-color">
                            В корзине ничего нет
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-text-color">
                          <p>Итого</p>
                          <p>{total} руб</p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
