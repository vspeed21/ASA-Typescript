import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="container mx-auto md:grid md:grid-cols-2 items-center mt-20 gap-20">
      <Outlet/>
    </div>
  )
}

export default AuthLayout