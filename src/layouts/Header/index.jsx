import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import Cart from "../Cart";
import Logo from "../../components/Logo";

export default function Header({ cart, onCartRemove }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileMenuOpen(false), [location]);

  return (
    <header className="bg-bg-color">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-end p-6 lg:px-8 gap-6"
        aria-label="Global"
      >
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:-translate-x-0"
        >
          <Logo />
        </Link>
        <Popover.Group className="hidden mx-auto lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-link-color"
          >
            Главная
          </Link>
          <Link
            to="/catalog"
            className="text-sm font-semibold leading-6 text-link-color"
          >
            Каталог
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-link-color"
          >
            О нас
          </Link>
        </Popover.Group>
        <Cart cart={cart} onCartRemove={onCartRemove} />
        <div className="flex gap-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-link-color"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-link-color" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bg-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-link-color"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-center">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-link-color"
                >
                  Главная
                </Link>
                <Link
                  to="/catalog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-link-color"
                >
                  Каталог
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-link-color"
                >
                  О нас
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
