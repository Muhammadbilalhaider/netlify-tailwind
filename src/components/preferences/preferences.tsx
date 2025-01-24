
import React, { useState } from 'react'
import { Briefcase, Building2, Code, Locate, LocateFixed, MapPin, Settings } from 'lucide-react'


const Preferences = () => {
  const [progressValue, setProgressValue] = useState(25);
  return (
    <div className="w-full flex flex-col justify-center items-start pb-24 py-10 px-5 sm:px-10 lg:px-48">

      <div className='flex flex-col py-4 w-full rounded-md shadow-md bg-white'>

        <div className='flex flex-col w-full p-4 pl-10'>
          <p className='text-2xl font-bold '>Job Preferences</p>
          <p className='text-gray-500 '>Customize your job search criteria to find the perfect match</p>
        </div>
        <hr className='border w-full '></hr>

        <div className='flex flex-col border mt-6 m-8 rounded-md p-4'>
          <div className='flex space-x-1 items-center text-sky-700 flex-row'>
            <Briefcase size={20} />
            <p className='font-semibold text-lg'>Job Title Preferences</p>
          </div>
          <div className='flex flex-col  space-y-2 mt-5'>
            <input className='font-semibold  text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='Desired Job Titles'/>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. Software Engineer, Frontend Developer'/>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='Separate multiple titles with commas'/>
            
          </div>


          <div className='flex flex-col space-y-2 mt-5'>
            <p className='font-semibold text-sm text-gray-700'>Excluded Words from Titles</p>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. Lead, Technical, Intern'/>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='Jobs containing these words will be filtered out'/>
            </div>

        </div>

        <div className='flex flex-col border mt-4 m-8 rounded-md p-4'>
          <div className='flex space-x-1 text-green-900 items-center flex-row'>
            <Building2 size={20} />
            <p className='font-semibold text-lg'>Company Preferences</p>
          </div>
          <div className='flex flex-col  space-y-2 mt-5'>
            <p className='font-semibold text-sm text-gray-800'>Excluded Companies</p>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. Company A, Company B'/>
       
            <p className='text-sm text-gray-700'>Jobs from these companies will be filtered out</p>
          </div>

        </div>


        <div className='flex flex-col border mt-4 m-8 rounded-md p-4'>
          <div className='flex space-x-1 text-yellow-600 items-center flex-row'>
            <MapPin size={20} />
            <p className='font-semibold text-lg'>Location Preferences</p>
          </div>
          <div className='flex flex-col  space-y-2 mt-5'>
            <p className='font-semibold text-sm text-gray-800'>Cities</p>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. New York, San Francisco'/>
            <p className='text-sm text-gray-700'>Jobs from these companies will be filtered out</p>
          </div>

          <div className='flex flex-col w-full mt-5'>
            <p className='text-sm font-medium'>
              Search Radius: {progressValue} miles
            </p>
            <span className='w-full relative h-1 bg-transparent justify-center'>
              <hr className='p-1 bg-gray-200 opacity-65 w-full absolute top-1.5 rounded-lg z-0'></hr>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-5 appearance-none bg-none z-20 cursor-pointer"
                style={{
                  background: 'transparent', 
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto', 
                }}
              />
            </span>
            <div className='flex w-full justify-between mt-3'>
              <p>0</p>
              <p>25</p>
              <p>50</p>
            </div>

          </div>

          <div className='flex flex-col  mt-2 my-2 py-1'>
            <p>Work Type</p>
            <div className='flex flex-col mt-2 space-y-2'>

              <span className='flex flex-row space-x-2'>
                <input type='checkbox' />
                <p className='text-sm text-gray-600'>Remote</p>
              </span>
              <span className='flex flex-row space-x-2'>
                <input type='checkbox' />
                <p className='text-sm text-gray-600'>
                  Hybrid</p>
              </span>
            </div>

          </div>

        </div>

        <div className='flex flex-col border mt-6 m-8 rounded-md p-4'>
          <div className='flex space-x-1 items-center text-emerald-600 flex-row'>
            <Code size={20} />
            <p className='font-semibold text-lg'>Technology Preferences</p>
          </div>
          <div className='flex flex-col  space-y-2 mt-5'>
            <p className='font-semibold text-sm text-gray-800'>Required Technologies</p>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. React, TypeScript'/>
          
            <p className='text-sm text-gray-700'>Only show jobs that include these technologies</p>
          </div>


          <div className='flex flex-col space-y-2 mt-5'>
            <p className='font-semibold text-sm text-gray-700'>Excluded Technologies</p>
            <input className='font-semibold text-sm text-gray-800 p-1.5 rounded-lg border' placeholder='e.g. PHP, WordPress'/>
            <p className='text-sm text-gray-700'>Filter out jobs with these technologies</p>
          </div>

        </div>


        <div className='flex flex-col mt-6 m-4 rounded-md p-4'>
          <button className='w-full p-2 rounded-md bg-sky-700 text-white'>Save Preferences</button>
        </div>

      </div>
    </div>
  )
}

export default Preferences