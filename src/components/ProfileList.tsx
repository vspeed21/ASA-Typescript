import useProfile from "../hooks/useProfile"
import { ContextProfileProps } from "../context/types";
import ProfileAcc from "./Profile";

function ProfileList() {

  const { profiles } = useProfile() as ContextProfileProps;
  return (
    <div className="mt-7 md:mt-16">
      {profiles?.map(profile => (
        <ProfileAcc
          key={profile._id}
          profile={profile}
        />
      ))}
    </div>
  )
}

export default ProfileList
