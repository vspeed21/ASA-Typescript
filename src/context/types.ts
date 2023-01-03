export type Admin = {
  _id: string,
  name: string,
  email: string,
  password: string,
  token: string | null,
  confirmed: boolean
}

export type ContextAuthProps = {
  auth: Admin,
  loading: boolean,
}