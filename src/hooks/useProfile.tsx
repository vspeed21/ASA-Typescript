import { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";
import { ContextProfileProps } from "../context/types";

function useProfile() {
  return useContext(ProfileContext) as ContextProfileProps;
}

export default useProfile