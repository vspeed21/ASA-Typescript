import { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";

function useProfile() {
  return useContext(ProfileContext);
}

export default useProfile