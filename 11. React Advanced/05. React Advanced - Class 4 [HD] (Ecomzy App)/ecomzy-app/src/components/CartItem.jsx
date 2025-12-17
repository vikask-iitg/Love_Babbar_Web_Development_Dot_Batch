import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { remove } from '../redux/Slices/CartSlice';

export const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className='mt-20'>
      <div>
        <div className="flex gap-10 mt-10">
          <div>
            <img src={item.image} className='w-50' />
          </div>

          <div>
            <h1
              className='text-gray-700 font-semibold text-lg 
        text-left w-80'
            >{item.title}</h1>

            <h1
              className='w-80 text-gray-400 font-normal text-[15px] text-left mt-5'
            >{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>

            <div className="flex justify-between mt-5">

              <p
                className='text-green-600 font-bold'
              >${item.price}</p>

              <div
                className='w-8 h-8 text-red-700 bg-red-200 rounded-full 
            font-semibold text-[12px] flex justify-center items-center'
                onClick={removeFromCart}>
                <MdDelete className='text-[15px]' />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='h-0.5 w-150 bg-gray-500 mt-8 mb-5'></div>
    </div>
  )
}


