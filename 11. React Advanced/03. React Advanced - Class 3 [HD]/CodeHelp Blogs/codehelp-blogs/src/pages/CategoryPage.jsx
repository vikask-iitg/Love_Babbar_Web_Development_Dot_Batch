import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { Pagination } from '../components/Pagination';
import { Header } from '../components/Header'
import { Blogs } from '../components/Blogs'

export const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  // const { setCategory, fetchBlogPosts } = useContext(AppContext);
  const category = location.pathname.split("/").at(-1);

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
          Blogs on <span className='underline'>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}
