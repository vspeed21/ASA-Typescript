import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ContextAuthProps } from "../context/types";

function useAuth() {
  return useContext(AuthContext) as ContextAuthProps;
}

export default useAuth