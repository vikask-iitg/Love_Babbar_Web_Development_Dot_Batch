import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


export const Tag = () => {
  const [tag, setTag] = useState('');
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border 
    flex flex-col items-center gap-y-3 mt-[15px]'>
      <h1 className='mt-[15px] text-3xl underline gap-y-5 uppercase 
      font-bold'>Random {tag} GIFs</h1>
      {
        loading ?
          (<Spinner></Spinner>) :
          (<img src={gif} width="450"></img>)
      }
      <input
        className='w-9/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-white'
        onChange={changeHandler}
        value={tag}>
      </input>

      <button onClick={clickHandler}
        className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg font-bold cursor-pointer mb-[20px]'>
        Generate
      </button>
    </div>
  )
}
