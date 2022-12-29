import { ChangeEvent, FormEvent, useState } from "react";
import Alert from "../../components/Alert";
import NavLInks from "../../components/NavLInks";
import validateEmail from "../../helpers/validateEmail";

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.id === 'email' && validateEmail(e.target.value)) {
      setValidEmail(true);
      return;
    }

    if (e.target.id === 'email' && !validateEmail(e.target.value)) {
      setValidEmail(false);
      return;
    }

    if (e.target.id === 'password' && e.target.value.length < 8) {
      setValidPassword(true);
      return;
    }

    if (e.target.id === 'password' && e.target.value.length >= 8) {
      setValidPassword(false);
      setValid(true)
      return;
    }
  }

  return (
    <>
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-red-500 font-black text-center md:text-left">
          Login and start managing {''}
          <span className="text-black">your profiles</span>
        </h1>
      </div>

      <div className="mt-8 md:mt-0">
        <form
          className="bg-white shadow-md p-8 rounded-md mx-4"
          noValidate
        >
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
              onInput={handleInput}
            />

            {validEmail ? <Alert msg="invalid email address" error={true} /> : null}
          </div>

          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="password"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              password:
            </label>

            <input
              type="password"
              id="password"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onInput={handleInput}
            />

            {validPassword ? <Alert msg="Short password" error={true} /> : null}
          </div>

          <div className="flex md:justify-end mt-6">
            <input
              type="submit"
              value="Login"
              disabled={valid ? false : true}
              className={` py-1 px-5 text-center w-full md:w-auto text-white uppercase rounded-md text-lg font-bold   transition-colors duration-300 ${!valid ? 'bg-blue-200 hover:cursor-not-allowed' : 'bg-blue-600  hover:bg-blue-700 hover:cursor-pointer'}`}
            />
          </div>
        </form>

        <NavLInks
          url1="signup"
          text1="Don't have an account? Sign Up"
          url2="forgot-password"
          text2="Forgot Password?"
        />
      </div>
    </>
  )
}

export default Login
