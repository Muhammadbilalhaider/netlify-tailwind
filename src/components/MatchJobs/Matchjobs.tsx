import { Banknote, Building2, Clock, Filter, Heading1, MapPin, Search, TicketMinusIcon, Timer, TimerIcon, TimerOffIcon } from 'lucide-react'
import React from 'react'

const Matchjobs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-start py-10 px-32'>

      <div className='flex w-full flex-col'>
        <p className='flex font-bold text-2xl'> Matched Jobs</p>
        <p>Review and apply to jobs you've matched with</p>

        <div className='flex flex-row justify-center items-center space-x-2 w-full py-8'>

          <div className='w-full flex flex-row items-center bg-white pl-2 rounded-xl'>
            <span className='text-slate-400'><Search size={20} /></span>
            <input type='text' placeholder='Search Matches...'
              className='w-full p-2 rounded-lg  border-none outline-none' />
          </div>


          <span className='flex flex-row  bg-white p-2 rounded-lg'>
            <Filter size={24} />
            <span className='text-base text-black ml-2'>Filter</span>
          </span>
        </div>

        <div className='flex p-3 flex-col justify-center w-full px-7 bg-white border border-gray-300  rounded-xl'>
          <p className='font-bold text-lg'>Journeyman Plumber
          </p>

          <div className='flex flex-row space-x-2 py-1 mt-3'>
            <Building2 size={18} />
            <span>G&C Plumbing & Heating LLC</span>
          </div>

          <div className='flex flex-row space-x-2 py-1'>
            <MapPin size={18} />
            <span>G&C Plumbing & Heating LLC</span>
          </div>

          <div className='flex flex-row space-x-2 py-1'>
            <Banknote size={18} />
            <span>G&C Plumbing & Heating LLC</span>
          </div>

          <div className='flex flex-row py-3 items-center space-x-2'>
            <span> < Clock size={18} /></span>
            <span >Posted about 11 hours ago</span>
          </div>

          <div className='flex  flex-row w-full mt-3 justify-between space-x-3'>
            <button className='w-full bg-transparent border rounded-lg border-gray-500 hover:bg-slate-100 p-2'>View Details</button>
            <button className='w-full bg-transparent border rounded-lg border-blue-500 hover:bg-sky-50  p-2'>Mark as Applied</button>
            <button className='w-full bg-transparent border rounded-lg bg-sky-700 text-white hover:bg-sky-800 p-2'>Apply Now</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Matchjobs