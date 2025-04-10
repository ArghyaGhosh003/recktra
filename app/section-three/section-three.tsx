import Image from "next/image";

export default function SectionThree() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="mt-14 lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your Success is Our Mission
              </p>

              <p className="mt-6 text-2xl text-gray-600">
                Crafted by Founders, for Founders
              </p>
              <p className="mt-6 text-lg/7 text-gray-600">
                Our goal isn’t just to provide a product—but to serve as your
                strategic partner, ensuring you’re equipped to avoid the
                pitfalls we’ve overcome.
              </p>
            </div>
          </div>

          <div className="relative w-full h-[30rem] sm:h-[36rem] md:-ml-4 lg:-ml-0">
            <Image
              alt="Product screenshot"
              src="/Section-three.png"
              fill
              className="rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
