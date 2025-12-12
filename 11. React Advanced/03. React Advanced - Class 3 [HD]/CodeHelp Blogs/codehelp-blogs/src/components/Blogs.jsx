import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
import { BlogDetails } from './BlogDetails'

export const Blogs = () => {

  const { posts, loading } = useContext(AppContext);
  return (
    <div className='flex justify-center items-center'>
      <div className='w-11/12 max-w-[640px] h-screen flex flex-col mt-10 mb-25'>
        {
          loading ?
            (<Spinner />) :
            (
              posts.length === 0 ?
                (<div className="min-h-[80vh] w-full flex justify-center items-center">
                  <p className="text-center font-bold text-3xl">No Post Found</p>
                </div>) :
                posts.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))
            )
        }
      </div>
    </div>

  )
}
