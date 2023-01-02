import { createContext } from "react";

export const AuthContext = createContext({});

interface Props {
  children: JSX.Element
}

function AuthProvider({children}: Props) {
  return (
    <AuthContext.Provider
      value={{
        hola: 'hola desde context'
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
