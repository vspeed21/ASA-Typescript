export type Admin = {
  _id: string,
  name: string,
  email: string,
  password: string,
  token: string | null,
  confirmed: boolean
}

export type Profile = {
  _id?: string,
  name: string,
  screen: string,
  pin?: number,
  deadline: string,
}

export type ContextProfileProps = {
  saveProfile: (profile: Profile) => void
  profiles: Profile[]
  setProfile: (profile: Profile) => void
  profile: Profile,
}

export type ContextAuthProps = {
  auth: Admin,
  loading: boolean,
}