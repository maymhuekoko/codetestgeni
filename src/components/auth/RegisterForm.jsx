import React, { useState } from 'react'
import {ImSpinner3} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const RegisterForm = () => {
  const [isPending,setIsPending] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [comfirmPassword, setComfimPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
        const response = axios.post('https://cms.ourcarediary.com/api/register',{
            name,email,password,c_password:comfirmPassword
        }).then(function(response){
            Swal.fire({
              title: "Success",
              text: "successfully Register!",
              icon: "success",
              confirmButtonText: "OK",
            }).then(function () {
              navigate('/auth/login');
              })
          }).catch(error =>{
            Swal.fire({
              title: "Error",
              text: "Something Wrong!",
              icon: "error",
              confirmButtonText: "CANCEL",
            })
        })
  }


  return (
    <div className='fixed inset-0 dark:bg-primary bg-white -z-10 flex justify-center items-center'>
      <div className='dark:text-white text-primary max-w-screen-lg mx-auto items-center  shadow-lg '>
          <form  className='dark:bg-secondary bg-white rounded p-6 space-y-6 w-96' onSubmit={handleRegister}>
          <h1 className=' dark:text-white text-primary font-semibold text-center text-xl'>Registeration</h1>
          <div className="flex flex-col-reverse">
            <input
            id="name"
            name="name"
            type='text'
            className=' bg-transparent rounded dark:border-dark-subtle border-light-subtle border-2 p-1 dark:focus:border-white focus:border-primary w-full text-lg outline-none transition peer'
            placeholder="mg mg..."
            onChange={(e)=>setName(e.target.value)}
            />
            <label htmlFor="name" 
            className=' dark:text-dark-subtle text-light-subtle font-semifold transition self-start dark:peer-focus:text-white peer-focus:text-primary'>Name</label>
          </div>
          <div className="flex flex-col-reverse">
            <input
            id="email"
            name="email"
            type='email'
            className=' bg-transparent rounded dark:border-dark-subtle border-light-subtle border-2 p-1 dark:focus:border-white focus:border-primary w-full text-lg outline-none transition peer'
            placeholder="john@gmail.com"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="email" 
            className=' dark:text-dark-subtle text-light-subtle font-semifold transition self-start dark:peer-focus:text-white peer-focus:text-primary'>Email</label>
          </div>
          <div className="flex flex-col-reverse">
            <input
            id="password"
            name="password"
            type='password'
            className=' bg-transparent rounded dark:border-dark-subtle border-light-subtle border-2 p-1 dark:focus:border-white focus:border-primary w-full text-lg outline-none transition peer'
            placeholder="********"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="password" 
            className=' dark:text-dark-subtle text-light-subtle font-semifold transition self-start dark:peer-focus:text-white peer-focus:text-primary'>Password</label>
          </div>
          <div className="flex flex-col-reverse">
            <input
            id="comfirm_password"
            name="comfirm_password"
            type='password'
            className=' bg-transparent rounded dark:border-dark-subtle border-light-subtle border-2 p-1 dark:focus:border-white focus:border-primary w-full text-lg outline-none transition peer'
            placeholder="********"
            onChange={(e)=>setComfimPassword(e.target.value)}
            />
            <label htmlFor="comfirm_password" 
            className=' dark:text-dark-subtle text-light-subtle font-semifold transition self-start dark:peer-focus:text-white peer-focus:text-primary'>Comfirm Password</label>
          </div>
          <button
            type="submit" 
            className='w-full rounded dark:bg-white bg-primary dark:text-secondary text-white 
            hover:bg-opacity-90 font-semibold text-lg transition cursor-pointer p-1 h-10 flex items-center justify-center' 
            >
              Register
            </button>
              <div className="flex justify-end">
              <Link className='dark:text-dark-subtle text-light-subtle dark:hover:text-white hover:text-primary transition' to="/auth/login">Log In</Link>
              </div>
          </form>
      </div>
   </div>
  )
}

export default RegisterForm