import { ContextAuthProps } from "../context/types";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Header from "../components/Header";

function AdminLayout() {
  const { auth, loading } = useAuth() as ContextAuthProps;

  if(loading) {
    return <>loading...</>
  }

  return (
    <>
      {auth?._id ? (
        <>
          <Header/>
            <main className="container mx-3 md:mx-auto my-16">
              <Outlet/>
            </main>
          <footer className='text-center font-bold text-xl'>
            <span className="text-red-600">ASA </span>
            - Administrador de cuentas de Streaming
          </footer>
        </>
      ): <Navigate to="/auth/login" />}
    </>
  )
}

export default AdminLayout
