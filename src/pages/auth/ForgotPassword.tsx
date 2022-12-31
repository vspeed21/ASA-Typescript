import { FormEvent, useState } from "react";

import Alert from "../../components/Alert";
import NavLInks from "../../components/NavLInks";
import adminClient from "../../config/adminClient";
import validateEmail from "../../helpers/validateEmail";

interface Alert {
  msg: string,
  error?: boolean,
}

function ForgotPassword() {

  const [email, setEmail] = useState<string>('')
  const [alert, setAlert] = useState<Alert>();

  const handleSubmit = async (e: FormEvent):Promise<void> => {
    e.preventDefault();

    if(validateEmail(email)) {
      setAlert({
        msg: 'Invalid email address',
        error: true,
      });
      setTimeout(() => {
        setAlert({msg: ''});
      }, 4000);
      return;
    }

    try {
      const {data} = await adminClient.post("/admin/forgot-password", {email});
      setAlert({msg: data.msg,});

    } catch (error: any) {
      setAlert({
        msg: error?.response.data.msg,
        error: true,
      });
    }

  }

  return (
    <>
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-red-500 font-black text-center md:text-left">
        Don't lose your profiles {''}
          <span className="text-black">restore access to your account!</span>
        </h1>
      </div>

      <div className="mt-8 md:mt-0">
        <form
          className="bg-white shadow-md p-8 rounded-md mx-4"
          noValidate
          onSubmit={handleSubmit}
        >
          {alert?.msg ? <Alert msg={alert.msg} error={alert.error}/> : null}

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
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="flex md:justify-end mt-6">
            <input
              type="submit"
              value="send email"
              className="py-1 px-5 text-center w-full md:w-auto text-white uppercase rounded-md text-lg font-bold   transition-colors duration-300 bg-blue-600  hover:bg-blue-700 hover:cursor-pointer"
            />
          </div>
        </form>

        <NavLInks
          url1="login"
          text1="Already have an account? Login"
          url2="signup"
          text2="Don't have an account? Sign Up"
        />
      </div>
    </>
  )
}

export default ForgotPassword
