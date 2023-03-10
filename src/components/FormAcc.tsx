import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import Alert from "./Alert";
import useProfile from "../hooks/useProfile";

interface Alert {
  msg: string,
  error?: boolean
}

function FormAcc() {
  const [name, setName] = useState<string>('');
  const [screen, setScreen] = useState<string>('');
  const [pin, setPin] = useState<number>(0);
  const [deadline, setDeadline] = useState<string>('');
  const [_id, set_id] = useState<string | null>(null);

  const [alert, setAlert] = useState<Alert>();

  const { saveProfile, profile } = useProfile();

  useEffect(() => {
    if(profile?.name) {
      setName(profile.name)
      setScreen(profile.screen);
      setPin(profile.pin || 0);
      setDeadline(profile.deadline);
      set_id(profile._id || '');
    }
  }, [profile]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if ([name, screen, deadline].includes('')) {
      setAlert({
        msg: 'All fields are required',
        error: true,
      });
      setTimeout(() => {
        setAlert({
          msg: ''
        });
      }, 3000);
      return;
    }
    setAlert({
      msg: ''
    });

    saveProfile({name, screen, pin, deadline, _id});

    setName('');
    setScreen('');
    setPin(0);
    setDeadline('');
    set_id('');
  }

  return (
    <>
      <p className="text-2xl font-bold text-center mb-10 lg:mb-0 rounded-md">
      Add your profiles and  {''}
        <span className="text-indigo-600 font-bold">start managing them</span>
      </p>

      <form 
        className="bg-white shadow p-7 mt-7"
        onSubmit={handleSubmit}
      >
        {alert?.msg ? <Alert msg={alert.msg} error={alert?.error} /> : null}
        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="name"
            className="font-bold text-gray-800 uppercase"
          >
            Name:
          </label>

          <input
            type="text"
            id="name"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter name of the profile owner"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="screen"
            className="font-bold text-gray-800 uppercase"
          >
            screen:
          </label>

          <input
            type="text"
            id="screen"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter screen name"
            value={screen}
            onChange={e => setScreen(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="pin"
            className="font-bold text-gray-800 uppercase"
          >
            pin:
          </label>

          <input
            type="number"
            id="pin"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 placeholder:text-gray-900"
            placeholder="Enter screen pin"
            value={pin}
            onChange={e => setPin(Number(e.target.value))}
            maxLength={4}
            pattern="[0-9]*"
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              if(e.target.value.length > 4) {
                e.target.value = e.target.value.slice(0, 4);
              }
            }}
          />
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <label
            htmlFor="deadline"
            className="font-bold text-gray-800 uppercase"
          >
            payment deadline:
          </label>

          <select
            id="deadline"
            className="border bg-gray-100 p-1 pl-3 rounded focus:shadow focus:outline-blue-600 text-center hover:cursor-pointer font-semibold"
            value={deadline}
            onChange={e => setDeadline(e.target.value)}
          >
            <option value="" disabled> --Select-- </option>
            <option value="first-one"> First days of the month </option>
            <option value="quincena"> fortnightly </option>
            <option value="end-month"> End of the month </option>
          </select>
        </div>

        <input
          type="submit"
          value={`${profile?._id ? "Update Profile": "save profile"}`}
          className='py-1 px-5 text-center w-full text-white uppercase rounded-md text-lg font-bold transition-colors duration-300 mt-1 bg-blue-600  hover:bg-blue-700 hover:cursor-pointer'
        />
      </form>
    </>
  )
}

export default FormAcc
