import { createContext, useState, useEffect } from "react";
import adminClient from "../config/adminClient";

export const AuthContext = createContext({});

interface Props {
  children: JSX.Element
}

function AuthProvider({children}: Props) {
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState<boolean>(true);

  const token = localStorage.getItem('tokenasa');
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    validateUser();
    async function validateUser() {
      if(!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await adminClient('/profile/profileList', config);
        setAuth(data);
      } catch (error) {
        console.log(error);
        setAuth({});
      }
      setLoading(false)
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider