import React from "react";
import BookCard from "../../components/cards/BookCard";
import Container from "../../components/utils/Container";

const books = [
  {
    title: "Aquarius",
    imageURL:
      "http://subsolardesigns.com/odrin/demo1/wp-content/uploads/sites/8/2017/08/cover_aquarius-267x400.png",
  },
  {
    title: "Capricorn",
  },
  {
    title: "Leo",
    imageURL:
      "http://subsolardesigns.com/odrin/demo1/wp-content/uploads/sites/8/2017/08/cover_leo-684x1024.png",
  },
  {
    title: "Aquarius",
    imageURL:
      "http://subsolardesigns.com/odrin/demo1/wp-content/uploads/sites/8/2017/08/cover_aquarius-267x400.png",
  },
  {
    title: "Capricorn",
  },
  {
    title: "Leo",
    imageURL:
      "http://subsolardesigns.com/odrin/demo1/wp-content/uploads/sites/8/2017/08/cover_leo-684x1024.png",
  },
  {
    title: "Aquarius",
    imageURL:
      "http://subsolardesigns.com/odrin/demo1/wp-content/uploads/sites/8/2017/08/cover_aquarius-267x400.png",
  },
  {
    title: "Capricorn",
  },
];

const HomePage = () => {
  return (
    <main>
      <section className="mb-10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="py-16 sm:py-24 lg:py-32">
              <div className="mb-4">
                <h2 className="font-title text-3xl lg:text-4xl mb-2">
                  What books are you interested in?
                </h2>
                <p className="font-title text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum beatae cumque molestias quidem.
                </p>
              </div>
              <form noValidate>
                <div>
                  <input
                    type="search"
                    className="block w-full rounded-md py-3 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Search..."
                  />
                </div>
                <div className="mt-6 flex justify-center gap-6">
                  <button
                    type="button"
                    className="inline-flex h-full min-w-[7.5rem] items-center justify-center text-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Find
                  </button>
                  <button
                    type="button"
                    className="inline-flex h-full min-w-[7.5rem] items-center justify-center text-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Random
                  </button>
                </div>
              </form>
            </div>
          </div>
          <span>
            <img
              className="d-block h-full w-full"
              src="/assets/images/books.jpg"
              alt="..."
            />
          </span>
        </Container>
      </section>
      <section className="py-14 lg:py-24 bg-blue-100">
        <Container>
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-12">
              {books.map((item, index) => (
                <li key={`book-${index}`}>
                  <BookCard items={item} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HomePage;
