import React from "react";
import Container from "../../components/utils/Container";

// icons
import {
  BookOpenIcon,
  ViewColumnsIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to Deploy",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BookOpenIcon,
  },
  {
    name: "SSL Certificates",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: WalletIcon,
  },
  {
    name: "Simple Queues",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ViewColumnsIcon,
  },
];

const AboutPage = () => {
  return (
    <main>
      <section className="py-16">
        <Container>
          <h2 className="font-title text-center text-4xl lg:text-5xl mb-12">
            About Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-center">
            <div className="text-gray-600">
              <p className="font-title text-xl md:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                laudantium laboriosam, reiciendis ad soluta iste optio cumque.
                Dolores sunt labore odio nostrum exercitationem deserunt
                repellat nam, vel optio, ipsa tempora.
              </p>
              <p className="font-title text-xl md:text-2xl mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                laudantium laboriosam, reiciendis ad soluta iste optio cumque.
                Dolores sunt labore odio nostrum exercitationem deserunt
                repellat nam, vel optio, ipsa tempora.
              </p>
            </div>
            <div className=" order-first lg:order-last">
              <div>
                <img
                  className="d-block h-full w-full"
                  src="/assets/images/bg-hero.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="h-full flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-blue-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 line-clamp-3 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage;
