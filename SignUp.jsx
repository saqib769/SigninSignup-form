import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    // const [firstname, setfirstname] = useState('')
    // const [lastname , setlastname] = useState('')

    const navigate = useNavigate()
   

 
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = async   (e) =>{
     e.preventDefault()
     console.log(email,password);
     try{
       await  createUserWithEmailAndPassword(auth , email , password)
        console.log("Account Created")

        navigate("/SignIn")
       
  

     } catch(err){
        console.log(err)
     }
    
    }

  return (
    <>
   
    <div className='text-center py-24 bg-slate-600 w-full h-screen'>
    
    <form onSubmit={handleSubmit}>Sign Up
        {/* <div className='py-4'>
            <input className='border-2 border-zinc-600 bg-black text-1xl p-2' type='firstname' placeholder='firstname' onChange={(e) => setfirstname(e.target.value)}></input>
        </div >

        <div className='py-4'>
            <input className='border-2 border-zinc-600 bg-black text-1xl p-2' type='lastname' placeholder='lastname' onChange={(e) => setlastname(e.target.value)}></input>
        </div> */}

        <div className='py-4'>
            <input className='border-2 border-zinc-600 bg-black text-white text-1xl p-2' type='email'  placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div className='py-4'>
            <input className='border-2 border-zinc-600 bg-black text-white text-1xl p-2' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
        </div>

    <div className='py-2'>
       <button className='text-2xl bg-black text-white py-1 px-3 font-light font-serif' type='submit'>Sign up</button> < br /> <br />
       <p>Already Registered? <a>Login</a></p>
    </div>
    </form>
    </div>
    </>
  )
}

export default SignUp