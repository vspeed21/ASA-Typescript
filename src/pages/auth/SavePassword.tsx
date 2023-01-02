import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import adminClient from '../../config/adminClient';
import Alert from '../../components/Alert';

interface Alert {
  msg: string,
  error?: boolean,
}

function SavePassword() {
  const [password, setPassword] = useState<string>('');
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [alert, setAlert] = useState<Alert>();

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const { data } = await adminClient(`/admin/verify-token/${params.token}`);
        setAlert({
          msg: data.msg,
        });
      } catch (error: any) {
        setAlert({
          msg: "There's an error with the link",
          error: true,
        });
      }
    }
    checkToken()
  }, []);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.id === 'password' && e.target.value.length < 8) {
      setValid(false);
      setValidPassword(true);
      return;
    }
    setValidPassword(false);
    setValid(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const { data } = await adminClient.post(`/admin/save-password/${params.token}`, {password});
      setAlert({
        msg: data.msg,
      });
      setPassword('');
      setValid(false)
      setValidPassword(false);

      setTimeout(() => {
        navigate('/auth/login');
      }, 3000);

    } catch (error: any) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  }

  return (
    <>
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-red-500 font-black text-center md:text-left">
          Reset your password to {''}
          <span className="text-black">your profiles</span>
        </h1>
      </div>

      <div className="mt-8 md:mt-0">
        <form
          className="bg-white shadow-md p-8 rounded-md mx-4"
          noValidate
          onSubmit={handleSubmit}
        >
          {alert?.msg ? <Alert msg={alert.msg} error={alert.error} /> : null }
          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="password"
              className="text-lg font-bold text-gray-800 uppercase"
            >
              new password:
            </label>

            <input
              type="password"
              id="password"
              className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
              placeholder="Enter your new password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onInput={handleInput}
            />

            {validPassword ? <Alert msg="Short password" error={true} /> : null}
          </div>

          <div className="flex md:justify-end mt-6">
            <input
              type="submit"
              value="Reset"
              disabled={valid ? false : true}
              className={` py-1 px-5 text-center w-full md:w-auto text-white uppercase rounded-md text-lg font-bold   transition-colors duration-300 ${!valid ? 'bg-blue-200 hover:cursor-not-allowed' : 'bg-blue-600  hover:bg-blue-700 hover:cursor-pointer'}`}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SavePassword
