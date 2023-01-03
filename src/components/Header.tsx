import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-gray-700 text-white p-5">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <h1 className='text-white text-xl text-center md:text-left'>
          Administrador streaming account - {''}
          <span className='text-red-500 font-bold'>ASA</span>
        </h1>

        <nav className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 mt-4 md:mt-0'>
          {location.pathname !== '/' ? (
            <Link
            to="/"
            className='text-gray-400 uppercase hover:text-gray-100 transition-colors duration-300'
          >
            Accounts
          </Link>
          ): null}

          <Link
            to="/admin/profile"
            className="text-gray-400 uppercase hover:text-gray-100 transition-colors duration-300"
          >
            profile
          </Link>
          <button
            type="button"
            className="text-gray-400 uppercase hover:text-gray-100 transition-colors duration-300"
            // onClick={logOut}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header