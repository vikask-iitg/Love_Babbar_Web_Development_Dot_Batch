import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className="flex h-screen max-w-6xl mx-auto justify-center">
      {
        cart.length > 0 ?
          (<div className='flex gap-20 w-full'>

            <div className='flex flex-col'>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                })
              }
            </div>

            <div className='flex flex-col justify-between fixed top-20 right-80 h-120'>
              <div className='mt-10'>
                <div className='uppercase text-green-800 font-bold'>Your Cart</div>
                <div className='text-[40px] uppercase text-green-800 font-bold'>Summary</div>
                <p>
                  <span className='font-bold'> Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className='font-bold'>
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>
                <button className='w-80 h-10 rounded-md bg-green-800 text-white font-bold mt-3'>
                  Checkout Now
                </button>
              </div>
            </div>

          </div>) :
          (<div className='flex flex-col justify-center items-center mt-25 font-bold'>
            <h1>Your cart is empty!</h1>
            <Link to={"/"}>
              <button className='w-30 h-8 rounded-md bg-green-700 text-white 
              font-semibold mt-3 uppercase text-[13px]'>
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  )
}

