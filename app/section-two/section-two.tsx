import Image from "next/image";

export default function SectionTwo() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="relative w-full h-[30rem] sm:h-[36rem] md:-ml-4 lg:-ml-0">
            <Image
              alt="Product screenshot"
              src="/section-two.png"
              fill
              className="rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10"
              priority
            />
          </div>

          <div className="lg:pl-12 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Your Vision, Our Tech
              </p>

              <p className="mt-6 text-2xl text-gray-600">
                Great solutions don’t need to be rushed.
              </p>
              <p className="mt-6 text-lg/7 text-gray-600">
                We believe in letting our product speak for itself. Experience
                its full potential and see why so many businesses trust us to
                streamline their operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
