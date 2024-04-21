import React, { useContext, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth'


function PopupSignup({onClose,onFun}) {
   const {SignUp} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;

  const onSubmit = async ({ email, password,phone,username }) => {
    if (parsedUser) {
      alert("user is already exists")
    } else {
    await  SignUp(email, password,phone,username);
    }
    onClose();
  }


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-md relative w-[400px] max-w-[90%]">
        <button onClick={onClose}  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">SignUp</h2>
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
            <label className="mb-2 text-gray-700" htmlFor="email">User Name</label>
            <input
              id="username"
              type="username"
              placeholder="Enter your username"
              className="input border border-gray-300 text-black rounded-md px-3 py-2"
              {...register("username", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input border border-gray-300 text-black rounded-md px-3 py-2"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700" htmlFor="email">Phone</label>
            <input
              id="phone"
              type="phone"
              placeholder="Enter your phone"
              className="input border border-gray-300 text-black rounded-md px-3 py-2"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input border text-black border-gray-300 rounded-md px-3 py-2"
              {...register("password", { required: true })}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">SignUp</button>
        </form>
        <button onClick={onFun} className="text-sm mt-4 text-gray-700" >Don't have an account? Sign up</button>
      </div>
    </div>
  );
}

export default PopupSignup;
