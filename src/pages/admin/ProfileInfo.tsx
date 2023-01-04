import { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";
import { Admin } from "../../context/types";
import useAuth from "../../hooks/useAuth";

interface Alert {
  msg: string,
  error?: boolean,
}

function ProfileInfo() {
  const [profileAdmin, setProfileAdmin] = useState<Admin>({
    _id: '',
    name: '',
    password: '',
    email: '',
    token: '',
    confirmed: true,
  });
  const [alert, setAlert] = useState<Alert>();

  const { updateProfile, auth } = useAuth();

  useEffect(() => {
    setProfileAdmin(auth);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = await updateProfile(profileAdmin) as unknown;
    setAlert({
      msg: data as string
    });
    setTimeout(() => {
      setAlert({
        msg: '',
      })
    }, 3000);
  }

  return (
    <>
      <Link 
        to="/admin/change-password"
        className="text-gray-700 opacity-80 hover:opacity-100 transition-all hover:text-gray-800 text-lg duration-300 hover:underline text-center md:text-left inline-block my-4"
      >
        Change Password
      </Link>

      <form
        className="bg-white p-5 shadow max-w-md mx-auto"
        onSubmit={handleSubmit}
        noValidate
      >
        {alert?.msg ? <Alert msg={alert.msg} /> : null}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="name"
            className="text-lg font-bold text-gray-800 uppercase"
          >
            Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter your name"
            value={profileAdmin.name || ''}
            onChange={e => setProfileAdmin({
              ...profileAdmin,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div className="flex flex-col gap-2 mb-3">
          <label
            htmlFor="email"
            className="text-lg font-bold text-gray-800 uppercase"
          >
            email:
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter your email"
            value={profileAdmin.email || ''}
            onChange={e => setProfileAdmin({
              ...profileAdmin,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div className="flex md:justify-end mt-6">
          <input
            type="submit"
            value="save"
            className='py-1 px-5 text-center w-full md:w-auto text-white uppercase rounded-md text-lg font-bold transition-colors duration-300 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer'
          />
        </div>
      </form>
    </>
  )
}

export default ProfileInfo