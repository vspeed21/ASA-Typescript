import { createContext, useEffect, useState } from "react";
import adminClient from "../config/adminClient";
import { Profile } from "./types";

interface Props {
  children: JSX.Element
}

export const ProfileContext = createContext({});

function ProfileProvider({children}: Props) {
  const [profiles, setProfiles] = useState<Profile[]>();
  
  const token = localStorage.getItem('tokenasa');
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    getProfiles();
    async function getProfiles() {
      try {
        const { data } = await adminClient('/profile', config);
        setProfiles(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

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
        saveProfile,
        profiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider;