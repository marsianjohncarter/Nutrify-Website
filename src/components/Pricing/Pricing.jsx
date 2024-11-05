export default function Pricing() {
    return (
<section>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-slate-800">
        Pricing Plans
      </h2>
      <p className="mb-5 font-light sm:text-xl text-gray-600">
        Nutrify is free to use with premium features $29.99 per year or $3.99 per
        month.
      </p>
    </div>
    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
      {/* Pricing Card */}
      <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg border-gray-600 xl:p-8 text-white hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
        <p className="font-light sm:text-lg text-gray-400">
          Best option for personal use.
        </p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">Free!</span>
        </div>
        {/* List */}
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>

        </ul>
        <a
          href="#"
          className="text-white hover:text-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Get started
        </a>
      </div>
      <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-gradient-to-r to-gray-600 from-gray-800 rounded-lg border-gray-600 xl:p-8 text-white hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="mb-4 text-2xl font-semibold">Pro</h3>
        <p className="font-light sm:text-lg text-gray-400">
          Best option for extensive feature set.
        </p>
        <div className="my-8">
        <div className="items-baseline">
          <span className="mr-2 text-5xl font-extrabold">$3.99</span>
          <span className="text-gray-400">/month</span>

        </div>
        </div>

        
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>

        </ul>
        <a
          href="#"
          className="text-white hover:text-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Get started
        </a>
        <hr className="text-slate-600 my-8"></hr>

        <div className="my-8">
        <div className="items-baseline">
          <span className="mr-2 text-5xl font-extrabold">$29.99</span>
          <span className="text-gray-400">/year</span>
          <br />

        <em className='text-slate-400'>You save ~50% from the monthly price</em>

        </div>
        </div>

        
        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Individual configuration</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>No setup, or hidden fees</span>
          </li>

        </ul>
        <a
          href="#"
          className="text-white hover:text-blue-500 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Get started
        </a>
      </div>

    </div>
  </div>
</section>

    );
}