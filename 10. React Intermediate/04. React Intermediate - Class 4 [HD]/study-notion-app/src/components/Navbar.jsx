import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify'

export const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center py-4 w-11/12 max-w-[1160px] mx-auto'>
      <Link to="/">
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'></img>
      </Link>

      <nav>
        <ul className="text-white flex gap-x-6">
          <li> <Link to='/'>Home</Link> </li>
          <li> <Link to='/'>About</Link> </li>
          <li> <Link to='/'>Contact</Link> </li>
        </ul>
      </nav>

      {/* Login SignUp Logout Dashboard */}

      <div className='flex items-center gap-x-4'>
        {!isLoggedIn &&
          <Link to="/login">
            <button className='bg-[#000A13] text-white py-1 px-3 rounded-lg border border-[#b4c6d6]'>
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/signup">
            <button className='bg-[#000A13] text-white py-1 px-3 rounded-lg border border-[#b4c6d6]'>
              Sign Up
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/">
            <button onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}
              className='bg-[#000A13] text-white py-1 px-3 rounded-lg border border-[#b4c6d6]'
            >
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-[#000A13] text-white py-1 px-3 rounded-lg border border-[#b4c6d6]'>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}
