export type Admin = {
  _id: string,
  name: string,
  email: string,
  password: string,
  token: string | null,
  confirmed: boolean
}

export type Profile = {
  _id?: string | null,
  name: string,
  screen: string,
  pin?: number,
  deadline: string,
}

export interface Passwords {
  current: string
  new: string
}

export type ContextProfileProps = {
  saveProfile: (profile: Profile) => void
  profiles: Profile[]
  setProfile: (profile: Profile) => void
  profile: Profile,
  deleteProfile: (id: string | null) => void;
}

export type ContextAuthProps = {
  auth: Admin,
  loading: boolean,
  updateProfile: (profileAdmin: Admin) => void
  changePassword: (passwords: Passwords) => void,
  logOut: () => void
}