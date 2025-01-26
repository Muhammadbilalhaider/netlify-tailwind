import { Search } from 'lucide-react';
import React from 'react';

const SkippedJob = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start py-10 px-4 sm:px-8 lg:px-20 xl:px-32 space-y-6">

      {/* Header Section */}
      <div className="flex w-full flex-col space-y-2">
      <p className='lg:text-2xl font-bold text-lg text-gray-900'>Skipped Jobs</p>
      <p className='text-gray-500 mt-1 text-xs lg:text-base'>
          Review jobs you've skipped - you can always change your mind!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <div className="w-full sm:w-64 md:w-full flex items-center bg-white pl-3 rounded-xl ">
          <span className="text-slate-400">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search Skipped Jobs..."
            className="w-full p-2 text-sm sm:text-base lg:text-lg rounded-lg border-none outline-none"
          />
        </div>
      </div>

      {/* Jobs Table */}
      <div className="flex flex-col bg-gray-50 rounded-lg shadow-md w-full">
        {/* Table Header */}
        <div className="hidden sm:flex flex-row justify-between px-4 md:text-sm sm:px-8 py-3 bg-gray-50 rounded-t-lg text-sm sm:text-base lg:text-lg font-medium text-gray-800">
          <span className='font-medium text-sm text-gray-600'>Job Title</span>
          <span className='font-medium text-sm text-gray-600'>Company</span>
          <span className='font-medium text-sm text-gray-600'>Skipped</span>
          <span className='font-medium text-sm text-gray-600'>Actions</span>
        </div>
        <hr className="border-gray-300 opacity-40" />

        {/* Job Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 rounded-md py-3 bg-white space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto">
            <p className="font-medium lg:text-base text-sm text-gray-900">Journeyman Plumber</p>
            <p className='text-gray-500 font-medium text-sm'>Bellingham, MA, US</p>
          </div>
          <div className="w-full sm:w-auto text-gray-900 text-sm">
            <p className='lg:text-base text-sm'>G&C Plumbing & Heating LLC</p>
          </div>
          <div className="w-full sm:w-auto text-xs md:text-xs sm:text-base text-gray-500">
            <p className='lg:text-base text-xs'>About 21 hours ago</p>
          </div>
          <div className="flex flex-row lg:gap-2 gap-1 w-full md:text-xs sm:w-auto justify-start sm:justify-center">
            <button className="bg-transparent border md:text-xs border-gray-300 text-sm sm:text-base p-1 rounded-lg px-3 hover:bg-gray-100">
              Un-skip
            </button>
            <button className="bg-sky-800 md:text-xs text-white text-sm sm:text-base p-1 rounded-lg px-3 hover:bg-sky-700">
              Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkippedJob;
