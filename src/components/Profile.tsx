import { Profile } from "../context/types"

interface Props {
  profile: Profile,
}

function ProfileAcc({profile}: Props) {
  return (
    <div className="bg-white shadow p-5 flex flex-col gap-1">
      <p className="text-gray-700 font-bold">
        Profile Owner: {''}
        <span className="capitalize font-normal">{profile.name}</span>
      </p>

      <p className="text-gray-700 font-bold">
        Screen name: {''}
        <span className="capitalize font-normal">{profile.screen}</span>
      </p>

      <p className="text-gray-700 font-bold">
        Screen Pin: {''}
        <span className="capitalize font-normal">{profile.pin}</span>
      </p>

      <p className="text-gray-700 font-bold">
        Deadline: {''}
        <span className="capitalize font-normal">{profile.deadline}</span>
      </p>

      <div className="flex mt-3 justify-evenly md:justify-end">
        <button
          type="button"
          className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-800 font-bold transition-colors duration-300"
        >
          Update
        </button>
        <button
          type="button"
          className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-800 font-bold transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProfileAcc