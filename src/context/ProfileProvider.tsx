import { createContext, useEffect, useState } from "react";
import adminClient from "../config/adminClient";
import { Profile } from "./types";

interface Props {
  children: JSX.Element
}

export const ProfileContext = createContext({});

function ProfileProvider({children}: Props) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [profile, setProfile] = useState<Partial<Profile>>({});
  
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
  }, [profile]);

  async function saveProfile(profile: Profile) {
    if(profile?._id) {
      try {
        const { data } = await adminClient.put(`/profile/${profile._id}`, profile, config);
        const profilesUpdated = profiles?.map(pro => pro._id === data._id  ? data : pro);
        setProfiles(profilesUpdated);
      } catch (error) {
        console.log(error);
      }
    }else{
      try {
        const { data } = await adminClient.post('/profile', profile, config);
        setProfiles([data.profile, ...profiles]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        saveProfile,
        profiles,
        setProfile,
        profile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider;