import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Banknote, Building2, Calendar, Heart, MapPin, X } from 'lucide-react';

const JobFeed = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const datePickerRef = useRef<DatePicker | null>(null);


    const keyResponsibilities = [
        "Run service calls for residential customers.",
        "Perform faucet and toilet repairs or replacements.",
        "Conduct water heater maintenance and installations.",
        "Handle boiler maintenance and installations.",
        "Diagnose and resolve various plumbing issues.",
        "Build relationships with a loyal customer base.",
    ];

    const keyRequirements = [
        "Valid Journeyman Plumbing License (MA).",
        "Valid Driver’s License.",
        "A customer-focused attitude and commitment to quality work.",
    ];

    const handleCalClick = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true)
        }
    }

    return (
        <div className="flex w-full flex-col items-center mt-10 mb-52 px-4 md:px-8">
        <div 
          className="flex p-3 flex-wrap justify-center items-center py-2 rounded-lg mb-3 bg-transparent hover:bg-white cursor-pointer space-y-2 sm:space-y-0 sm:space-x-3"
          onClick={handleCalClick}
        >
          <span className="text-blue-500">
            <Calendar size={18} />
          </span>
          <DatePicker
            className="w-36 text-black bg-transparent text-center cursor-pointer"
            ref={datePickerRef}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Date"
            dateFormat="MMMM d, yyyy"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          <input 
            type="text" 
            placeholder="10 jobs" 
            value="10 Jobs"
            className="w-16 text-sm bg-[#c8d6e9] bg-opacity-50 rounded-2xl text-blue-400 text-center outline-none border-none cursor-pointer"
          />
        </div>
      
        <div className="flex flex-col p-5 items-start bg-white w-full md:w-10/12 lg:w-8/12 shadow-lg rounded-lg">
          {/* Job Title */}
          <div className="mb-4">
            <h5 className="text-black font-bold mb-2">Journeyman Plumber</h5>
          </div>
      
          {/* Job Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex items-center">
              <span className="text-blue-500">
                <Building2 size={18} />
              </span>
              <p className="text-base ml-2">G&C Plumbing & Heating LLC</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-700">
                <MapPin size={18} />
              </span>
              <p className="text-base ml-2">Bellingham, MA, US</p>
            </div>
            <div className="flex items-center">
              <span className="text-orange-500">
                <Banknote size={18} />
              </span>
              <p className="text-base ml-2">$72,800 - $115,000</p>
            </div>
            <div className="flex items-center">
              <Banknote size={18} />
              <p className="text-base ml-2">$72,800 - $115,000</p>
            </div>
          </div>
      
          {/* Separator */}
          <div className="w-full py-6 mt-6">
            <hr className="border border-gray-400 opacity-40" />
          </div>
      
          {/* About Section */}
          <p className="text-lg font-semibold mb-2">About G&C Plumbing & Heating LLC</p>
          <p className="text-gray-700 leading-relaxed">
            G&C Plumbing & Heating is a company dedicated to providing exceptional plumbing services while fostering a supportive and growth-oriented work environment.
          </p>
      
          {/* Separator */}
          <div className="w-full py-6">
            <hr className="border border-gray-400 opacity-40" />
          </div>
      
          {/* Position Overview */}
          <p className="text-lg font-semibold mb-2">Position Overview</p>
          <p className="text-gray-700 leading-relaxed">
            The Journeyman Plumber will provide top-notch plumbing services to residential customers, focusing on service calls and maintenance. The role offers growth opportunities, competitive pay, and a supportive team culture.
          </p>
      
          {/* Key Responsibilities */}
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Key Responsibilities</p>
            <ul className="list-disc ml-5 space-y-3">
              {keyResponsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
      
          {/* Requirements */}
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Requirements</p>
            <ul className="list-disc ml-5 space-y-3">
              {keyRequirements.map((requirement, index) => (
                <li key={index} className="text-gray-700 leading-relaxed">
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
      
          {/* Soft Skills */}
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Soft Skills</p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-[#F3E4D5] p-2 rounded-lg">
                <p className="text-[#F0874B] text-center">Customer-focused attitude</p>
              </div>
              <div className="bg-[#F3E4D5] p-2 rounded-lg">
                <p className="text-[#F0874B] text-center">Commitment to quality work</p>
              </div>
            </div>
          </div>
        </div>
      
        {/* Footer Action Buttons */}
        <div className="fixed bottom-16 flex justify-center w-full space-x-6">
          <div className="p-4 border-2 hover:text-white border-[#f83b22] hover:bg-[#f83b22] text-[#f83b22] rounded-full cursor-pointer hover:scale-110 transition-transform">
            <X size={30} />
          </div>
          <div className="p-4 border-2 hover:text-white border-[#038134] text-[#038134] hover:bg-[#038134] rounded-full cursor-pointer hover:scale-110 transition-transform">
            <Heart size={30} />
          </div>
        </div>
      </div>
      
    );
};

export default JobFeed;
