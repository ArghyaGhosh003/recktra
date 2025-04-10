"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component

export const testimonials = [
  {
    body: "I couldn't be happier with the results! The service exceeded my expectations, and I saw immediate improvements. Highly recommend!",
    author: {
      name: "Leslie Alexander",
      handle: "lesliealexander",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Working with this team has been an absolute pleasure. They truly understand the needs of their clients and provide top-notch solutions that make a real difference.",
    author: {
      name: "Trend Arnold",
      handle: "Trendarnold",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The performance of this product is outstanding. It works exactly as advertised and has significantly improved my workflow. I'm impressed!",
    author: {
      name: "Lindsay Walton",
      handle: "LindsayWalton",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The professionalism and expertise provided were exceptional. I was impressed with the quick turnaround and the attention to detail. Definitely a great investment!",
    author: {
      name: "Alexa Liv",
      handle: "LivAlexa",
      imageUrl:
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Trusted by founders
          </h2>
          <p className="text-balance text-1xl mt-6 font-semibold tracking-tight text-white sm:text-1xl">
            We have worked with amazing people
          </p>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:row-3 transition-opacity duration-700 ease-in-out">
                <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonials[currentIndex].body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          alt={testimonials[currentIndex].author.name}
                          src={testimonials[currentIndex].author.imageUrl}
                          fill
                          className="rounded-full bg-gray-50"
                          priority
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].author.name}
                        </div>
                        <div className="text-gray-600">
                          @{testimonials[currentIndex].author.handle}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                  <Image
                    alt="Transistor"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                    width={158}
                    height={48}
                  />
                </div>
                <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                  <Image
                    alt="Reform"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
                    width={158}
                    height={48}
                  />
                </div>
                <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                  <Image
                    alt="Tuple"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
                    width={158}
                    height={48}
                  />
                </div>
                <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1">
                  <Image
                    alt="SavvyCal"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                    width={158}
                    height={48}
                  />
                </div>
                <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
                  <Image
                    alt="Statamic"
                    src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                    width={158}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
