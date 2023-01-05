import { createContext, useEffect, useState } from "react";
import swal from "sweetalert";
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
  }, []);

  async function saveProfile(profile: Profile) {
    if(profile?._id) {
      try {
        const { data } = await adminClient.put(`/profile/${profile._id}`, profile, config);
        const profilesUpdated = profiles?.map(pro => pro._id === data._id  ? data : pro);
        setProfiles(profilesUpdated);
        setProfile({});
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

  function deleteProfile(id?:string | null) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover profile information",
      icon: "warning",
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if(willDelete) {
        await adminClient.delete(`/profile/${id}`, config);
        const newProfiles = profiles.filter(pro => pro._id !== id);
        setProfiles(newProfiles);
      }
    });
  }

  return (
    <ProfileContext.Provider
      value={{
        saveProfile,
        profiles,
        setProfile,
        profile,
        deleteProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider;