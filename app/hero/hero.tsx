import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="grid max-w-2xl gap-x-16 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="mt-23">
              <h1 className="gradient-text text-5xl font-semibold tracking-tight sm:text-7xl">
                We’re changing the way people connect
              </h1>

              <p className="mt-6 text-lg font-small text-black sm:text-xl/relaxed">
                Work with top-tier talent who’ve helped build and scale products
                at: Replo (YC S21), Virtually (YC S20), Osmind (YC S20), FIRST
                (YC W19), Whalesync (YC S21).
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <Image
                alt="Hero Image"
                src="/hero.png"
                width={800}
                height={600}
                className="w-full max-w-xl rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
