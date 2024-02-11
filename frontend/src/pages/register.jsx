import React, { useState } from 'react'

export default function register() {
    const [email, setEmail] = useState("")
    const [OTP, setOTP] = useState("")

    const handleChangeinEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeinOTP = (e) => {
        setOTP(e.target.value)
    }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='bg-gray-50 w-80 h-64 shadow-2xl flex flex-col justify-center'>
            <div className='flex justify-center flex-col items-center mb-6'>
                <h2 className='text-2xl font-semibold mb-2 text-slate-950'>Register</h2>
                <p className='underline '>Enter email ID to register your self</p>
            </div>    

            <div className='ml-10 flex flex-col'>    
                <label>Email</label>
                <input
                    content='text'
                    onChange={handleChangeinEmail}
                    className='bg-white w-56 border-black border-[1px] pl-2'
                    placeholder='email'
                    />
                <label>OTP:</label>    
                <input
                    content='text'
                    onChange={handleChangeinOTP}
                    className='bg-white w-56 border-black border-[1px] pl-2'
                    placeholder='enter otp'
                    />           
                <div className='flex flex:col justify-center items-center hover:bg-slate-900 mr-14 mt-6 shadow p-2 transition font-semibold hover:text-white'>
                    <button className=''>Verify</button>
                </div>
            </div>
            <div className='ml-10 flex mt-5'>
                
            </div>
        </div>
    </div>
  )
}
