import React from 'react';
import { BiLocationPlus, BiLogIn, BiMusic } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { FaMusic } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { IoTrendingUpSharp } from 'react-icons/io5';

const Sidebar = () => {
  return (<div className='d-flex align-items-center z-1 overflow-auto bg-black'>
    <div className='container-fluid h-full w-1/5 min-h-screen p-5 '>
      <div className='row d-flex align-items-center'>
        <div className='col-xs-3 flex items-center font-bold text-3xl'>
          <span className='text-red-500 mr-4'><FaMusic /></span>
          <span className='text-red-500'>Dream</span>
          <span className='text-gray-50'>Music</span>
        </div>
      </div>

      <div className='mt-3 mx-2 text-cyan-100 flex flex-col justify-between min-h-screen'>
        <div>
          <p className='text-xs m-0 mt-10'>MENU</p>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><HiHome /></span>
            <span>Home</span>
          </div>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><IoTrendingUpSharp /></span>
            <span>Trends</span>
          </div>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><BiMusic /></span>
            <span>Library</span>
          </div>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><BiLocationPlus /></span>
            <span>Discover</span>
          </div>
        </div>

        <div className=''>
          <p className='text-xs m-0'>General</p>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><FiSettings /></span>
            <span>Settings</span>
          </div>
          <div className='flex items-center cursor-pointer'>
            <span className='text-red-500 mr-2'><BiLogIn /></span>
            <div className='flex' >
              <span>Log</span>
              <span> Out</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default Sidebar;
