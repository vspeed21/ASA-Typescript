
function SignUp() {
  return (
    <>
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-red-500 font-black text-center md:text-left">
        Sign up and start managing {''}
          <span className="text-black">your profiles</span>
        </h1>
      </div>

      <div className="mt-8 md:mt-0">
        <form
          className="bg-white shadow-md p-5 rounded-md mx-4"
          noValidate
        >
          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="name"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              Name:
            </label>

            <input
              type="text"
              id="name"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="email"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              email:
            </label>

            <input
              type="email"
              id="email"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="password"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              password:
            </label>

            <input
              type="password"
              id="password"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="repetir-password"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              repeat password:
            </label>

            <input
              type="password"
              id="repetir-password"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Repeat your password"
            />
          </div>

          <div className="flex md:justify-end mt-6">
            <input
              type="submit"
              value="signup"
              className="bg-blue-600 py-1 px-5 text-center w-full md:w-auto text-white uppercase rounded-md text-lg font-bold hover:cursor-pointer hover:bg-blue-700 transition-colors duration-300"
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
