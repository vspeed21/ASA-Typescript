import FormAcc from "../../components/FormAcc"
import ProfileList from "../../components/ProfileList"

function AdminAccounts() {
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/2 lg:w-2/5">
        <FormAcc/>
      </div>

      <div className="md:w-1/2 lg:w-3/5 overflow-y-auto">
      {/* <p className="text-2xl font-bold text-center my-5 md:my-0 rounded-md">
        {accounts.length ? 'Administra tus' : 'No hay perfiles aún agrega uno y '}
        <span className="text-indigo-600 font-bold">{accounts.length ? ' perfiles' : 'administralos'}</span>
      </p>
        <ShowAccounts/> */}

        <ProfileList/>
      </div>
    </div>
  )
}

export default AdminAccounts