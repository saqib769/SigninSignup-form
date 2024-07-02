import React from 'react'
import Sidebar from './Sidebar'
import { Link , useNavigate } from 'react-router-dom'


const Homepage = () => {

  const navigate = useNavigate()
   

  const gotosignin = () => {
    navigate("/SignIn")
  }

  const  gotoabout = () => {
    navigate("/SignUp")
  }
  return (
    <>
        <div className='bg-[#129] flex justify-around ' >
            <ul className=' flex items-center justify-center gap-5 text-sm m-0 font-serif text-slate-200'>
               <li>Home</li>
               <li className=''>About Us</li>
               <li className='cursor-pointer hover:text-purple-600'>Contact</li>
            </ul>  
            <div className=' flex gap-3'>
           <button onClick={gotosignin} className=' btn'>Sign In</button> 
          <button onClick={gotoabout} className='btn'>SignUp</button>
          </div> 
        </div>

        <div>
          < Sidebar />
        </div>
        
      


</>
  )
}

export default Homepage