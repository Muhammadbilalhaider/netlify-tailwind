import { Ban, CheckCircle2, ClipboardList, PhoneCall } from 'lucide-react';
import React from 'react';

const UserPortal = () => {
  const stats = [
    {
      name: 'Total Applications',
      totalNumber: '25',
      icon: ClipboardList,
      color: 'text-primary',
      bgColor: 'bg-primary-light',
    },
    {
      name: 'Total Applies',
      icon: CheckCircle2,
      totalNumber: '18',
      color: 'text-success',
      bgColor: 'bg-success-light',
    },
    {
      name: 'Total Follow Up',
      totalNumber: '12',
      icon: PhoneCall,
      color: 'text-accent-secondary',
      bgColor: 'bg-accent-light',
    },
    {
      name: 'Total Skips',
      icon: Ban,
      totalNumber: '7',
      color: 'text-danger',
      bgColor: 'bg-danger-light',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-start pb-24 py-10 px-5 sm:px-10 lg:px-48">
      <div className="flex flex-col py-4 w-full rounded-md shadow-md bg-white">
        <div className="flex flex-col mx-8">
          <p className="font-bold lg:text-3xl text-xl lg:text-start md:text-start text-center text-neutral-dark">Account Settings</p>
          <p className="md:text-base text-xs md:text-start lg:text-start text-center text-gray-500">Manage your profile and account settings</p>
        </div>

        <hr className="border w-full mt-6" />
        <div className="flex flex-col mx-8 mt-6">
          <p className="text-neutral-dark font-semibold lg:text-lg text-base md:text-xl lg:text-start text-center">Application Statistics</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 w-full mt-4 flex-row justify-between gap-4">
            {stats.map((value, index) => (
              <div
                key={index}
                className="flex flex-col w-full p-6 items-center justify-center rounded-md shadow-md border cursor-pointer"
              >
                <span
                  className={`flex  text-xl w-12 h-12 justify-center rounded-full items-center ${value.bgColor}`}
                >
                  <value.icon size={20} />
                </span>

                <p className="text-center mt-2 lg:text-lg md:text-lg text-sm font-semibold">{value.totalNumber}</p>
                <p className="text-center mt-2 text-gray-500 md:text-sm text-xs">{value.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:mx-8 md:mx-4 mx-3">
          <div className='flex flex-row justify-between mt-8 w-full'>

            <p className='md:text-xl lg:text-xl text-base text-neutral-dark font-semibold'>Profile Information</p>
            <p className='text-primary md:text-base text-xs'> Edit Profile</p>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full gap-x-3'>
          <span className='flex flex-col mt-4 space-y-1'>
            <p className='md:text-base lg:text-base text-sm'>Name</p>
            <input className='md:text-base text-sm lg:text-base text-gray-800 p-2 rounded-lg border' placeholder='John Doe'/>
            
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
          <p className='md:text-base lg:text-base text-sm'>Email</p>
          <input className='md:text-base text-sm lg:text-base text-gray-800 p-2 rounded-lg border' placeholder='john@gmail.com'/>
           
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
          <p className='md:text-base lg:text-base text-sm'>Address</p>
            <input className='md:text-base text-sm lg:text-base text-gray-800 p-2 rounded-lg border' placeholder='Address'/>
           
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
          <p className='md:text-base lg:text-base text-sm'>Phone</p>
            <input className='md:text-base text-sm lg:text-base text-gray-800 p-2 rounded-lg border' placeholder='+1 000 000 00'/>
         
          
          </span>
          </div>
        </div>
        <hr className='flex w-full border mt-4'></hr>
        <div className='flex flex-col md:px-8 px-4 mt-4'>
        <p className='md:text-xl lg:text-xl text-base text-neutral-dark lg:text-start text-start  font-semibold'>Change Password</p>
          <span className='flex flex-col w-full space-y-2 mt-2'>
            <p className='text-gray-600 md:text-base lg:text-base text-sm '>Current Password</p>
            <input type='password' className='w-full md:text-base text-sm border p-2 rounded-md' placeholder='Current Password'/>
          </span>
         
          <span className='flex flex-col w-full space-y-2 mt-2'>
            <p className='text-gray-600 md:text-base lg:text-base text-sm'>New Password</p>
            <input type='password' className='w-full border p-2 md:text-base text-sm rounded-md' placeholder='New Password'/>
          </span>
          <span className='flex flex-col w-full space-y-2 mt-2'>
          <p className='text-gray-600 md:text-base lg:text-base text-sm'>Current Password</p>
            <input type='password' className='w-full border p-2 md:text-base text-sm rounded-md' placeholder='Confirm Password'/>
          </span>
          <button className='w-full bg-primary text-white p-1.5 rounded-md mt-5'>Update Password</button>
        </div>
      </div>
    </div>

  );
};

export default UserPortal;
