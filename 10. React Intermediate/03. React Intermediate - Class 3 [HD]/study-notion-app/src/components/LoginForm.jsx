import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log('Printing the form data');
        console.log(formData);
        navigate("/dashboard")
    }

    return (

        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'>
                    Email Address <sup className='text-red-800'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter Email ID'
                    name='email'
                    className='bg-[#041b2e] rounded-lg text-blue-200 w-full p-3 '>
                </input>
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'>
                    Passowrd <sup className='text-red-800'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-[#041b2e] rounded-lg text-blue-200 w-full p-3 '>
                </input>

                <span
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible className="text-2xl" fill="#afb2bf" />) :
                        (<AiOutlineEye className="text-2xl" fill="#afb2bf" />)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-400 max-w-max ml-auto'>
                        Forgot Passoword</p>
                </Link>

                <button className='w-full bg-yellow-300 rounded-lg text-black font-semibold px-3 py-2 mt-8'>
                    Sign In
                </button>
            </label>
        </form>
    )
}




