import { Banknote, Building2, Clock, Filter, MapPin, Rocket, Search } from 'lucide-react'
import React from 'react'

const Applied = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start py-10 px-32'>

      <div className='px-3 flex w-full flex-col'>
        <p className='flex font-bold text-2xl'>Application Tracker</p>
        <p className='text-gray-500'>Review and apply to jobs you've matched with</p>
      </div>

      <div className='flex p-3 flex-col justify-center w-full px-7 mt-10 bg-white border border-gray-300  rounded-xl'>
        <p className='font-bold text-lg'>Journeyman Plumber
        </p>

        <div className='flex flex-row items-center space-x-2 py-1 mt-3'>
          <Building2 size={18} />
          <span>G&C Plumbing & Heating LLC</span>
        </div>

        <div className='flex flex-row items-center space-x-2 py-1'>
          <MapPin size={18} />
          <span>Bellingham, MA, US</span>
        </div>

        <div className='flex flex-row items-center space-x-2 py-1'>
          <Clock size={18} />
          <span>Applied</span>
        </div>
        <div className="relative w-full mb-4">

        <div className='flex bottom-40 mt-5 w-full'>
          <hr className="border-gray-700 w-full border-1 opacity-70 absolute top-1/2 " ></hr>
        </div>
        <div className="flex flex-row justify-between items-center w-full relative z-10">
          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 h-14 border-8 bg-white text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Applied</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 bg-white h-14 border-8 text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Rejected</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 bg-white h-14 border-8 text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Ghosted</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 h-14 bg-white border-8 text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Phone Screen</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 h-14 bg-white border-8 text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Interview</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <span className="flex flex-col w-14 h-14 border-8  bg-white text-sky-700 border-sky-900 rounded-full bg-transparent  items-center justify-center">
              < Rocket size={24} />
            </span>
            <span >Offer</span>
          </div>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Applied