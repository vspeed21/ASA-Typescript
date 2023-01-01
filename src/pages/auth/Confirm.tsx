import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import adminClient from '../../config/adminClient';
import Alert from '../../components/Alert';

interface Alert {
  msg: string,
  error?: boolean,
}

function Confirm() {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [alert, setAlert] = useState<Alert>();
  const [loading, setLoading] = useState<boolean>(false);


  const params = useParams();
  useEffect(() => {
    confirmAcc();
    async function confirmAcc() {
      try {
        setLoading(true);
        const { data } = await adminClient(`/admin/confirm/${params.token}`);
        setAlert({msg: data.msg});

        setLoading(false);
        setConfirmed(true);
      } catch (error) {
        setLoading(false);
        setAlert({
          msg: "There's an error with the link",
          error: true,
        });
      }
    }
  }, []);

  return (
    <>
      <div className="">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-red-500 font-black text-center md:text-left">
        Confirm your account and start managing {''}
          <span className="text-black">your profiles</span>
        </h1>
      </div>

      <div className="mt-8 md:mt-0 bg-white shadow-md p-8 rounded-md mx-4">
        {loading ? 'loading...' : null }
        {alert?.msg ? <Alert msg={alert.msg} error={alert.error} /> : null }
      
      {confirmed && (
        <Link to="/auth/login" className="text-gray-600 block text-center hover:text-gray-900 transition-colors duration-300">
          Iniciar sesión</Link>
        )}
      </div>
    </>
  )
}

export default Confirm
