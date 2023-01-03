import FormAcc from "../../components/FormAcc"
import ProfileList from "../../components/ProfileList"
import useProfile from "../../hooks/useProfile"
import { ContextProfileProps } from "../../context/types";

function AdminAccounts() {
  const { profiles } = useProfile() as ContextProfileProps;

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/2 lg:w-2/5">
        <FormAcc/>
      </div>

      <div className="md:w-1/2 lg:w-3/5 overflow-y-auto md:h-screen">
      <p className="text-2xl font-bold text-center my-5 md:my-0 rounded-md">
        {profiles?.length ? 'Manage your' : "There isn't profiles yet. Add one to start "}
        <span className="text-indigo-600 font-bold">{profiles?.length ? ' profiles' : 'managing'}</span>
      </p>
        <ProfileList/>
      </div>
    </div>
  )
}

export default AdminAccounts