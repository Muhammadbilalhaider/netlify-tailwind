import {
  Banknote,
  Building2,
  Clock,
  Filter,
  MapPin,
  Search,
} from "lucide-react";
import React from "react";

const Matchjobs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start py-10 px-5 sm:px-10 lg:px-32">

      <div className="flex w-full flex-col">
        <p className="font-bold text-xl sm:text-2xl">Matched Jobs</p>
        <p className="text-sm sm:text-xs">
          Review and apply to jobs you've matched with
        </p>

        
        <div className="flex flex-row justify-center items-center py-8 gap-4 sm:flex-nowrap sm:gap-2">
          <div className="w-full sm:w-64 md:w-full flex items-center bg-white pl-2 rounded-xl">
            <span className="text-slate-400">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search Matches..."
              className="w-full p-2 lg:text-lg text-sm rounded-lg border-none outline-none"
            />
          </div>

          <div className="flex flex-row items-center bg-white p-1.5 md:px-1.5 lg:p-2.5  rounded-lg">
            <Filter size={24} className='m-0 lg:p-1 sm:p-1'/>
            <span className="text-lg text-black lg:ml-1"><p className='text-base md:text-sm'>Filter</p></span>
          </div>
        </div>

     
        <div className="flex p-3 flex-col w-full bg-white border border-gray-300 rounded-xl space-y-3">
          <span className='flex flex-row items-center space-x-6'>
          <p className="font-semibold text-gray-900 text-lg sm:text-lg">Journeyman Plumber</p>
          <span className='bg-success/5 p-1.5 rounded-full '><p className='text-xs px-1 font-medium text-success'>New Match</p></span>
          </span>
          <div className="flex flex-row items-center space-x-2 text-sm">
            <Building2 size={18} />
            <span><p className='text-gray-600'>G&C Plumbing & Heating LLC</p></span>
          </div>

          <div className="flex flex-row items-center space-x-2 text-sm">
            <MapPin size={18} />
            <span><p className='text-gray-600'>Bellingham, MA, US</p></span>
          </div>

          <div className="flex flex-row items-center space-x-2 text-sm">
            <Banknote size={18} />
            <span><p className='text-gray-600'>$72,800 - $115,000</p></span>
          </div>

          <div className="flex flex-row items-center space-x-2 text-sm">
            <Clock size={18} />
            <span><p className='text-sm text-gray-500'>Posted about 11 hours ago</p></span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full space-y-2 sm:space-y-0 sm:space-x-3">
            <button className="w-full bg-transparent border rounded-lg border-gray-500 hover:bg-slate-100 p-2">
              View Details
            </button>
            <button className="w-full bg-transparent border rounded-lg border-blue-500 hover:bg-sky-50 p-2">
              Mark as Applied
            </button>
            <button className="w-full bg-sky-700 text-white rounded-lg hover:bg-sky-800 p-2">
              Apply Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Matchjobs;
