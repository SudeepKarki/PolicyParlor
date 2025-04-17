function BannerSearch() {
  return (
    <div className="w-full rounded-3xl">
      <div className="bg-white rounded-full py-0 p-4 flex flex-row items-center justify-between">
        <div className="relative w-1/4 px-3">
          <select
            className="w-full appearance-none bg-transparent py-3 px-2 text-gray-800 font-medium focus:outline-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select Product
            </option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="h-24 w-px bg-gray-200"></div>

        <div className="relative w-1/4 px-3">
          <select
            className="w-full appearance-none bg-transparent py-3 px-2 text-gray-800 font-medium focus:outline-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select Policy
            </option>
            <option value="policy1">Policy 1</option>
            <option value="policy2">Policy 2</option>
            <option value="policy3">Policy 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="h-24 w-px bg-gray-200"></div>

        <div className="relative w-1/4 px-3">
          <select
            className="w-full appearance-none bg-transparent py-3 px-2 text-gray-800 font-medium focus:outline-none cursor-pointer"
            defaultValue=""
          >
            <option value="" disabled>
              Select Policy
            </option>
            <option value="policy1">Policy 1</option>
            <option value="policy2">Policy 2</option>
            <option value="policy3">Policy 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="h-24 w-px bg-gray-200"></div>

        <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-4 px-8 rounded-full transition duration-300 w-1/4 ml-3">
          Check Now
        </button>
      </div>
    </div>
  );
}

export default BannerSearch;
