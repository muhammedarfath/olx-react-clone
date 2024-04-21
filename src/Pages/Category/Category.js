import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoCarSportOutline } from 'react-icons/io5';
import { CiMobile2 } from 'react-icons/ci';
import { MdAddHomeWork } from 'react-icons/md';
import { RiMotorbikeFill } from 'react-icons/ri';
import { FaArrowLeftLong } from 'react-icons/fa6';

function Category() {
  const navigate = useNavigate();

useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    console.log(parsedUser);
    if (parsedUser && parsedUser.email) {
      navigate('/post');
    }else{
        navigate("/")
    }
  }, []);

  
  return (
    <>
      <div className='w-full p-6 top-0 left-0 z-50 navbar h-18'>
        <div className='ml-5'>
          <Link to='/'>
            <FaArrowLeftLong className='text-[#002f34] cursor-pointer text-xl'/>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center mt-5'>
        <h1 className='font-bold text-2xl'>POST YOUR AD</h1>
        <div className="table-wrapper">
          <table className="w-[50rem] container border-collapse border border-gray-500 mt-5">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Column 1</th>
                <th className="border border-gray-500 p-2"></th>
              </tr>
            </thead>
            <tbody>
              {/* You can add table rows and data here */}
              <tr>
                <Link to='/sell'>
                  <td className="border p-2 flex gap-3 items-center"><IoCarSportOutline />Car </td>
                </Link>
              </tr>
              <tr>
                <td className="border p-2 flex gap-3 items-center"><CiMobile2 />Mobile</td>
              </tr>
              <tr>
                <td className="border p-2 flex gap-3 items-center"><RiMotorbikeFill /> Bike</td>
              </tr>
              <tr>
                <td className="border p-2 flex gap-3 items-center"><MdAddHomeWork />Properties</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Category;
