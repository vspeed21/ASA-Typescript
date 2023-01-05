import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import { Passwords } from "../../context/types";
import useAuth from "../../hooks/useAuth";

interface Alert {
  msg: string, 
  error?: boolean,
}

function ChangePassword() {
  const [passwords, setPasswords] = useState<Passwords>({
    current: '',
    new: '',
  });
  const [alert, setAlert] = useState<Alert>();

  const { changePassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(Object.values(passwords).includes('')) {
      setAlert({
        msg: 'All fields are required',
        error: true,
      });
      setTimeout(() => {
        setAlert({
          msg: '',
        });
      }, 3000);
      return;
    }
    
    const data = await changePassword(passwords) as unknown;
    setAlert({
      msg: data as string,
      error: true,
    });
    setPasswords({
      current: '',
      new: '',
    });
  }

  return (
    <>
      <Link 
        to="/admin/profile-info"
        className="text-gray-700 opacity-80 hover:opacity-100 transition-all hover:text-gray-800 text-lg duration-300 hover:underline text-center md:text-left inline-block my-4 capitalize"
      >
        Change profile info
      </Link>

      <form
        className="bg-white p-5 shadow max-w-md mx-auto"
        onSubmit={handleSubmit}
        noValidate
      >
        {alert?.msg ? <Alert msg={alert.msg} error={alert.msg === 'Password modified successfully' ? false : alert.error} /> : null}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="current"
            className="text-lg font-bold text-gray-800 uppercase"
          >
            Current Password:
          </label>

          <input
            type="password"
            id="current"
            name="current"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter your actual password"
            value={passwords.current}
            onChange={e => setPasswords({
              ...passwords,
              [e.target.name]: e.target.value
            })}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="new"
            className="text-lg font-bold text-gray-800 uppercase"
          >
            new Password:
          </label>

          <input
            type="password"
            id="new"
            name="new"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter your new password"
            value={passwords.new}
            onChange={e => setPasswords({
              ...passwords,
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

export default ChangePassword
