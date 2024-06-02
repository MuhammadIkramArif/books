import React, { useState } from "react";
import Container from "../components/utils/Container";
import { Link, NavLink } from "react-router-dom";

// icons
import { Bars3Icon } from "@heroicons/react/24/solid";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="sticky top-0 z-20 bg-gray-100 border-gray-200 py-2.5 rounded dark:bg-gray-900">
      <Container>
        <div className="flex flex-wrap items-center justify-between ">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Books
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMenu(!menu)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div
            className={`w-full md:block md:w-auto ${menu ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col p-4 mt-4 space-y-6 md:space-y-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <NavLink
                    end
                    to={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-blue-700 nav-link"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
