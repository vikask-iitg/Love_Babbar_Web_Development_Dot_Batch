import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)] mt-4 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[640px] py-2'>
        <div className='flex gap-x-2'>
          {
            page > 1 &&
            (
              <button
                className='rounded-md border px-4 py-1'
                onClick={() => handlePageChange(page - 1)}>
                Previous
              </button>
            )
          }
          {
            page < totalPages &&
            (
              <button
                className='rounded-md border px-4 py-1'
                onClick={() => handlePageChange(page + 1)}>
                Next
              </button>
            )
          }
        </div>

        <p className='font-bold'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>

  )
} 
