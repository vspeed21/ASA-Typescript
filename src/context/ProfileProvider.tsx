import { createContext, useEffect, useState } from "react";
import adminClient from "../config/adminClient";
import { Profile } from "./types";

interface Props {
  children: JSX.Element
}

export const ProfileContext = createContext({});

function AuthProvider({children}: Props) {

  return (
    <ProfileContext.Provider
      value={{
        
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default AuthProvider;