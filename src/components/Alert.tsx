interface IProps {
  msg: string,
  error?: boolean
}

function Alert({msg, error}:IProps) {
  return <p className={`text-center my-2 border-l-4 py-1 font-bold ${error ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'}`}>{msg}</p>
}

export default Alert
