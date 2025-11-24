import React, { useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Final Account Data")
        console.log(finalData);
        navigate("/dashboard");
    }


    return (
        <div>
            <div
                className='flex bg-[#041b2e] p-1 gap-x-1 my-6  rounded-full max-w-max'>
                <button
                    onClick={() => setAccountType("student")}
                    className={`${accountType === "student" ?
                        ("bg-black text-blue-200 ") :
                        ("bg-tranparent text-blue-50")} py-2 px-4 
                    rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button
                    onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ?
                        ("bg-black text-blue-200 ") :
                        ("bg-tranparent text-blue-50")} py-2 px-4 
                    rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                <div className='flex justify-between mt-4'>
                    <label>
                        <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'
                        >First Name <sup className='text-red-800'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='bg-[#041b2e] rounded-lg text-blue-200 w-full 
                            p-3 shadow-blue-200'>
                        </input>
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'
                        >Last Name <sup className='text-red-800'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter last Name'
                            value={formData.lastName}
                            className='bg-[#041b2e] rounded-lg text-blue-200 w-full 
                            p-3 shadow-blue-200'>
                        </input>
                    </label>
                </div>

                <div className='mt-4'>
                    <label className='w-full '>
                        <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'
                        >Email Address <sup className='text-red-800'>*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-[#041b2e] rounded-lg text-blue-200 w-full 
                        p-3 shadow-blue-200'>
                        </input>
                    </label>
                </div>

                <div className='w-full flex gap-x-4 mt-4'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'
                        >Create Password <sup className='text-red-800'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-[#041b2e] rounded-lg text-blue-200 w-full
                            p-3'>
                        </input>
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                                (<AiOutlineEyeInvisible className="text-2xl" fill="#afb2bf" />) :
                                (<AiOutlineEye className="text-2xl" fill="#afb2bf" />)}
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-blue-200 mb-1 leading-5.5'
                        >Confirm Password <sup className='text-red-800'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-[#041b2e] rounded-lg text-blue-200 w-full 
                            p-3'>
                        </input>
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ?
                                (<AiOutlineEyeInvisible className="text-2xl" fill="#afb2bf" />) :
                                (<AiOutlineEye className="text-2xl" fill="#afb2bf" />)}
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-300 rounded-lg text-black font-semibold 
                px-3 py-2 mt-8'>
                    Create Account
                </button>
            </form>
        </div>
    )
}
