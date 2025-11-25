import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


export const Random = () => {
  const { gif, loading, fetchData } = useGif();
  function clickHandler() {

  }

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border 
    flex flex-col items-center gap-y-3 mt-[15px]'>
      <h1 className='text-3xl underline gap-y-5 mt-[15px] uppercase 
      font-bold'>Random GIFs</h1>
      {
        loading ?
          (<Spinner></Spinner>) :
          (<img src={gif} width="450"></img>)
      }
      <button onClick={clickHandler}
        className='w-9/12 bg-yellow-500 text-lg py-2 rounded-lg font-bold cursor-pointer mb-5'>
        Generate
      </button>
    </div>
  )
}
