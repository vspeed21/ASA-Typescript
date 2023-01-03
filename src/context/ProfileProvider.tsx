import { createContext, useEffect, useState } from "react";
import adminClient from "../config/adminClient";
import { Profile } from "./types";

interface Props {
  children: JSX.Element
}

export const ProfileContext = createContext({});

function AuthProvider({children}: Props) {
  
  const token = localStorage.getItem('tokenasa');
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }

  async function saveProfile(profile: Profile) {
    try {
      const { data } = await adminClient.post('/profile', profile, config);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        saveProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default AuthProvider;