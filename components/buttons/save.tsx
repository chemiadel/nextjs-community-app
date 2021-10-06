import {useState, useEffect} from 'react'
import fetcher from '../../lib/fetcher'

const Save = ({pid, init} : {pid: string, init: boolean | null}) => {
    const [value, setValue]=useState(init)

    function toggleSave(){
        fetcher(`mutation {
            toggleSave (pid: "${pid}")
          }`).then(data=>setValue(data.toggleSave))
    }

    return <button onClick={toggleSave} className={
      `inline-flex items-center h-10 w-10 rounded-full text-base
      bg-gray-50 
      border border-gray-300
      focus:outline-none hover:bg-gray-100`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="m-auto h-6 w-4" fill={value?"currentColor":"none"} viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
 </svg>
      </button>
  
  }
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
</svg> */}
  export default Save