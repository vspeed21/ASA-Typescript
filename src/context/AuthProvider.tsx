import { createContext, useState, useEffect } from "react";
import adminClient from "../config/adminClient";
import { Admin, Passwords } from "./types";

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


  async function updateProfile(admin:Admin) {
    if(!token) return;

    try {
      const { data } = await adminClient.put(`/admin/profile/${admin._id}`, admin, config);
      return data.msg as string
    } catch (error) {
      console.log(error);
    }
  }

  async function changePassword(passwords: Passwords) {
    if(!token) return;

    try {
      const { data } = await adminClient.put('/admin/change-password', passwords, config);
      return data.msg
    } catch (error: any) {
      return error?.response?.data.msg;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        loading,
        updateProfile,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
