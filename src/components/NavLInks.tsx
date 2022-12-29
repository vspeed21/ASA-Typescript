import { Link } from 'react-router-dom'

interface IProps {
  url1: string,
  text1: string,
  url2: string,
  text2: string,
}

function NavLInks({url1, text1, url2, text2}: IProps) {
  return (
    <nav className='flex flex-col justify-center lg:flex-row lg:justify-around text-center lg:text-left mt-4 gap-3 lg:gap-0'>
      <Link 
        to={`/auth/${url1}`}
        className="text-gray-8000 opacity-90 hover:opacity-100 transition-opacity hover:underline"
      >
        {text1}
      </Link>

      <Link 
        to={`/auth/${url2}`}
        className="text-gray-8000 opacity-90 hover:opacity-100 transition-opacity hover:underline"
      >
        {text2}
      </Link>
    </nav>
  )
}

export default NavLInks
