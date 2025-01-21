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
        <div className="flex w-full flex-col items-center mt-10 mb-52">



            <div className='flex p-3 flex-row justify-center py-2 rounded-lg mb-3 bg-transparent items-center hover:bg-white cursor-pointer'
                onClick={handleCalClick} >
                <span className='text-blue-500'><Calendar size={18} /></span>
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
                <input type='text' placeholder='10 jobs' value='10 Jobs'
                    className="w-16 text-sm bg-[#c8d6e9] bg-opacity-50 rounded-2xl text-blue-400 bg-transparent text-center outline-none border-none cursor-pointer" />
            </div>



            <div className="flex flex-col p-5 items-start bg-white w-8/12 md:w-7/10 shadow-lg rounded-lg">

                <div className="mb-4">
                    <h5 className="text-black font-bold mb-2">Journeyman Plumber</h5>
                </div>


                <div className="flex justify-between items-start w-8/12">
                    <div className="flex items-center min-w-[150px]">
                       <span className='text-blue-500'><Building2 size={18} /></span> 
                        <p className="text-base ml-2 whitespace-nowrap">G&C Plumbing & Heating LLC</p>
                    </div>
                    <div className="flex items-center min-w-[150px]">
                        <span className='text-green-700'><MapPin size={18} /></span>
                        <p className="text-base ml-2 whitespace-nowrap">Bellingham, MA, US</p>
                    </div>
                </div>


                <div className="flex justify-between items-start w-8/12 mt-4">
                    <div className="flex items-center min-w-[150px]">
                       <span className='text-orange-500'> <Banknote size={18} /></span>
                        <p className="text-base ml-2 whitespace-nowrap">$72,800 - $115,000</p>
                    </div>
                    <div className="flex items-center min-w-[150px]">
                        <Banknote size={18} />
                        <p className="text-base ml-2 whitespace-nowrap">$72,800 - $115,000</p>
                    </div>
                </div>


             

                <div className="w-full py-6 mt-10 opacity-40">
                    <hr className="border border-gray-400 w-full" />
                </div>


                <p className="text-lg font-semibold mb-1">About G&C Plumbing & Heating LLC</p>
                <p className="text-gray-700 leading-relaxed">
                    G&C Plumbing & Heating is a company dedicated to providing exceptional plumbing services while fostering a supportive and growth-oriented work environment.
                </p>

                <div className="w-full py-6 ">
                    <hr className="border border-gray-400 w-full opacity-40" />
                </div>

                <p className="text-lg font-semibold ">Position Overview</p>
                <p className="text-gray-700 leading-relaxed">
                    The Journeyman Plumber will provide top-notch plumbing services to residential customers, focusing on service calls and maintenance. The role offers growth opportunities, competitive pay, and a supportive team culture.
                </p>

                {/* Key Responsibilities */}
                <div className="text-lg font-semibold mb-1 mt-3">Key Responsibilities</div>
                <ul className="list-disc ml-2 pl-5 sm:pl-2 space-y-3">
                    {keyResponsibilities.map((responsibility, index) => (
                        <li key={index} className="text-gray-700 leading-relaxed">
                            {responsibility}
                        </li>
                    ))}
                </ul>



                {/* Requirements */}
                <p className="text-lg font-semibold mb-1 mt-3">Requirements</p>
                <ul className="list-disc ml-2 sm:pl-2 space-y-3">
                    {keyRequirements.map((requirement, index) => (
                        <li className="mb-3" key={index}>{requirement}</li>
                    ))}
                </ul>
                {/* Soft Skills */}
                <p className="text-lg font-semibold mb-1 mt-3">Soft Skills</p>
                <div className="flex flex-wrap mt-1">
                    <div className="bg-[#F3E4D5] p-2 rounded-lg mr-2 mb-2">
                        <p className="text-[#F0874B] text-center">Customer-focused attitude</p>
                    </div>
                    <div className="bg-[#F3E4D5] p-2 rounded-lg mr-2 mb-2">
                        <p className="text-[#F0874B] text-center">Commitment to quality work</p>
                    </div>
                </div>

                <p className="text-lg font-semibold mb-1 mt-3">Required Technologies</p>
            </div>


            <div className="fixed bottom-12 shadow-lg py-4">
                <div className='flex flex-row space-x-6 '>
                    <div className="p-4 border-2 border-[#e95123] hover:bg-[#e95123] text-[#e95123] transition-transform duration-400 hover:text-white hover:scale-110 rounded-full cursor-pointer">
                        <X size={30} />
                    </div>
                    <div className="p-4 border-2 text-[#038134] border-[#038134] hover:bg-[#038134] transition-transform duration-400 rounded-full cursor-pointer hover:scale-110 hover:text-white">
                        <Heart size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFeed;
