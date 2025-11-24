import React from 'react'
import frameImage from '../assets/frame.png'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

export const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
      <div className='w-11/12 max-w-[450px]'>
        <h1
          className='text-white font-semibold text-[1.875rem] leading-snug '>
          {title}</h1>
        <p className='text=[1.125rem] leading[1.625rem] mt-4'>
          <span className='text-white'>{desc1}</span>
          <br />
          <span className='text-blue-200 italic'>{desc2}</span>
        </p>
        {formType === "signup" ?
          (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>) :
          (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='h-[0.5px] w-full bg-white'></div>
          <p className='text-white font-medium leading[1.375rem]'>OR</p>
          <div className='h-[0.5px] w-full bg-white'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-lg 
        font-medium text-blue-100 border border-white px-3 py-2 gap-x-2 mt-6 cursor-pointer'>
          <FcGoogle></FcGoogle>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage} alt='Pattern' width={558} height={504} loading='lazy'></img>
        <img src={image} alt='Students' width={558} height={490} loading='lazy'
          className='absolute -top-4 right-4'></img>
      </div>
    </div>
  )
}
