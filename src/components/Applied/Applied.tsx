import React, { useState } from 'react'
import { Banknote, Book, BookA, BookCheck, BookCopy, BookDown, Building2, Clock, FileText, Filter, Ghost, MapPin, NotebookTabsIcon, NotepadText, NotepadTextDashed, PartyPopper, Phone, PhoneCall, Rocket, Search, Skull, Users } from 'lucide-react'


const Applied = () => {

  const [tracker, setTracker] = useState(null)

  const stages = [
    { name: 'Applied', icon: <Rocket size={20} /> },
    { name: 'Rejected', icon: <Skull size={20} /> },
    { name: 'Ghosted', icon: <Ghost size={20} /> },
    { name: 'Phone Screen', icon: <Phone size={20} /> },
    { name: 'Interview', icon: <Users size={20} /> },
    { name: 'Offer', icon: <PartyPopper size={20} /> },
  ];

  const handleChangeTracker = (index: number) => {
    setTracker(index)
  }

  return (
    <div className='w-full flex flex-col justify-center items-start py-10 px-4 sm:px-10 lg:px-32'>

      <div className='px-3 flex w-full flex-col'>
        <p className='font-bold text-xl text-gray-900 md:text-2xl'>Application Tracker</p>
        <p className='text-gray-500 mt-1 text-sm md:text-base'>
          Review and apply to jobs you've matched with
        </p>
      </div>

      <div className='flex flex-col justify-center w-full mt-10 bg-white border border-gray-300 rounded-xl px-5 py-7 sm:px-7 md:py-10'>
        <div className='flex flex-row md:justify-between sm:justify-center'>
          <p className='font-semibold text-gray-900 text-lg md:text-xl'>Journeyman Plumber</p>
          <div className='flex flex-row items-center justify-center space-x-2 border rounded-md px-0 py-0 lg:px-3 lg:py-1.5 hover:bg-slate-100 cursor-pointer'>
            <FileText size={20} />
            <p className='font text-xs w-full'>Add Notes</p>
          </div>
        </div>

        <div className='flex flex-row items-center space-x-2 py-1 mt-3'>
          <Building2 size={18} />
          <span className='text-sm text-gray-600 md:text-base'>G&C Plumbing & Heating LLC</span>
        </div>

        <div className='flex flex-row items-center space-x-2 py-1'>
          <MapPin size={18} />
          <span className='text-sm text-gray-600 md:text-base'>Bellingham, MA, US</span>
        </div>

        <div className='flex flex-row items-center space-x-2 py-1'>
          <Clock size={18} />
          <span className='text-sm text-gray-500 md:text-base'>Applied</span>
        </div>

        <div className="relative w-full mb-4">
          <div className='flex w-full mt-5'>
            <hr className="border-gray-400 w-full border opacity-70 absolute top-1/2" />
          </div>

          <div className="flex flex-row justify-between items-center w-full relative z-10">
            {stages.map((stage, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleChangeTracker(index)}
              >
                <span
                  className={`flex flex-col lg:w-14 md:w-12 md:h-12 lg:h-14 w-6 h-6 rounded-full items-center justify-center 
                    ${tracker === index 
                      ? (index === 0 
                        ? 'lg:border-8 md:border-4 border-8 border-sky-800 bg-white text-[#247BAF]' 
                        : index === 1 
                        ? 'lg:border-8 md:border-4 border-8 border-red-500 bg-white text-[#F24D4F]' 
                        : index === 2 
                        ? 'lg:border-8 md:border-4 border-8 border-[#E0E1E0] bg-white text-[#E0E1E0]' 
                        : index === 3 
                        ? 'lg:border-8 md:border-4 border-8 border-[#FFE066] bg-white text-[#FFE066]' 
                        : index === 4 
                        ? 'lg:border-8 md:border-4 border-8 border-[#247BAF] bg-white text-[#247BAF]' 
                        : index === 5 
                        ? 'lg:border-8 md:border-4 border-8 border-[#217346] bg-white text-[#217346]' 
                        : ''
                      ) 
                    : 'lg:border-2 md:border-4 border-4 border-gray-400 bg-white text-sky-700'
                  }`}>
                  {stage.icon}
                </span>
                <span
        className={`lg:text-base text-[7px] sm:text-sm ${
          tracker === index 
            ? (index === 0 
              ? 'text-[#247BAF]' 
              : index === 1 
              ? 'text-[#F24D4F]' 
              : index === 2 
              ? 'text-[#E0E1E0]' 
              : index === 3 
              ? 'text-[#FFE066]' 
              : index === 4 
              ? 'text-[#247BAF]' 
              : index === 5 
              ? 'text-[#217346]' 
              : ''
            ) 
            : 'text-gray-500'
        }`}
      >
                  {stage.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Applied