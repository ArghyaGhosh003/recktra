export default function Contact() {
  return (
    <div
      className="overflow-hidden ml-12
      mr-12 py-24 sm:py-32"
      style={{
        background: "linear-gradient(to right, #4e54c8, #8f94fb)", // Blue to Purple gradient
        borderRadius: "30px", // Slightly more rounded edges
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-30 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            alt="Product screenshot"
            src="/contact.jpg"
            className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />

          <div className=" lg:max-w-lg">
            <div>
              <div className=" lg:pr-8 lg:pt-4">
                <h1 className="croissant-one-regular font-bold text-center  text-pretty text-4xl">
                  Talk to us
                </h1>
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="ml-px block pl-4 text-sm/6 font-bold text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="block w-full rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="ml-px block pl-4 text-sm/6 font-bold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="Email"
                    name="Email"
                    type="text"
                    placeholder="example@email.com"
                    className="block w-full rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="mt-2">
                <label
                  htmlFor="about"
                  className="ml-px block pl-4 text-sm/6 font-bold text-gray-900"
                >
                  Write a few sentences
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    placeholder="how can we help ?"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <a className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
