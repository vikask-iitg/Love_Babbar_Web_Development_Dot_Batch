import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';

export const Blogs = () => {

  const { posts, loading } = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[640px] h-screen py-1 flex flex-col gap-y-7 mt-10 mb-15 justify-center items-center'>
      {
        loading ?
          (<Spinner />) :
          (
            posts.length === 0 ?
              (<div>
                <p>No Post Found</p>
              </div>) :
              posts.map((post) => (
                <div key={post.id}>
                  <p className='font-bold text-xl'>{post.title}</p>
                  <p className='text-[10px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                  </p>
                  <p className='text-[10px]'>Posted on {post.date}</p>
                  <p className='text-[14px] mt-2.5'>{post.content}</p>
                  <div className='flex gap-3'>
                    {post.tags.map((tag, index) => {
                      return <span key={index} className='text-blue-500 underline font-bold text-xs'>{`#${tag}`}</span>
                    })}
                  </div>
                </div>
              ))
          )
      }

    </div>
  )
}
