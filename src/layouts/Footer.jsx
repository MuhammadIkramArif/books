import { Link, NavLink } from "react-router-dom";
import Container from "../components/utils/Container";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <Container>
        <div className="flex flex-wrap gap-3 justify-between">
          <div>
            <Link to="/" className="flex items-center justify-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Books
              </span>
            </Link>
          </div>

          <nav className="flex flex-wrap gap-8">
            {navigation.main.map((item) => (
              <div key={item.name}>
                <NavLink
                  end
                  to={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-blue-700 nav-link"
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>

        {/* <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p> */}
      </Container>
    </footer>
  );
}
