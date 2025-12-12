import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='w-full shadow-md py-2 fixed top-0 bg-white'>
      <header className='text-center'>
        <h1 className='text-xl font-bold uppercase'>CodeHelp Blogs</h1>
      </header>
    </div>
  )
}
