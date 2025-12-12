import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { Pagination } from '../components/Pagination';
import { Header } from '../components/Header'
import { Blogs } from '../components/Blogs'

export const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  // const { setTag, fetchBlogPosts } = useContext(AppContext);
  const tag = location.pathname.split("/").at(-1);

  return (

    <div>
      <Header />
      <div className='w-[640px] mx-auto mt-16 flex justify-between items-center'>
        <button
          className='rounded-md border px-4 py-1 cursor-pointer'
          onClick={() => navigation(-1)}>
          Back
        </button>
        <h2 className='font-bold'>
          Blogs Tagged <span className='underline'>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>


  )
}
