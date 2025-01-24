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
      color: 'text-success',
      bgColor: 'bg-success-light',
    },
    {
      name: 'Total Follow Up',
      icon: PhoneCall,
      color: 'text-accent-secondary',
      bgColor: 'bg-accent-light',
    },
    {
      name: 'Total Skips',
      icon: Ban,
      color: 'text-danger',
      bgColor: 'bg-danger-light',
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-start pb-24 py-10 px-5 sm:px-10 lg:px-48">
      <div className="flex flex-col py-4 w-full rounded-md shadow-md bg-white">
        <div className="flex flex-col mx-8">
          <p className="font-semibold text-2xl text-neutral-dark">Account Settings</p>
          <p className="text-gray-500">Manage your profile and account settings</p>
        </div>

        <hr className="border w-full mt-6" />
        <div className="flex flex-col mx-8 mt-6">
          <p className="text-neutral-dark font-semibold text-2xl">Application Statistics</p>
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

                <p className="text-center mt-2 text-sm font-semibold">{value.totalNumber}</p>
                <p className="text-center mt-2 text-gray-500 text-sm">{value.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mx-8">
          <div className='flex flex-row justify-between mt-8 w-full'>

            <p className='text-2xl text-neutral-dark font-bold'>Profile Information</p>
            <p className='text-primary'> Edit Profile</p>
          </div>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-full gap-x-3'>
          <span className='flex flex-col mt-4 space-y-1'>
            <p>Name</p>
            <input className='type=text text-base text-gray-800 p-2 rounded-lg border' placeholder='John Doe'/>
            
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
            <p>Email</p>
            <input className=' text-base text-gray-800 p-2 rounded-lg border' placeholder='john@gmail.com'/>
           
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
            <p>Address</p>
            <input className=' text-base text-gray-800 p-2 rounded-lg border' placeholder='Address'/>
           
          </span>
          <span className='flex flex-col mt-4 space-y-1'>
            <p>Phone</p>
            <input className=' text-base text-gray-800 p-2 rounded-lg border' placeholder='+1 000 000 00'/>
         
          
          </span>
          </div>
        </div>
        <hr className='flex w-full border mt-4'></hr>
        <div className='flex flex-col px-8 mt-4'>
        <p className='text-2xl text-neutral-dark font-bold'>Change Password</p>
          <span className='flex flex-col w-full space-y-2 mt-2'>
            <label className='text-gray-600'>Current Password</label>
            <input type='password' className='w-full border p-2 rounded-md' placeholder='Current Password'/>
          </span>
         
          <span className='flex flex-col w-full space-y-2 mt-2'>
            <label className='text-gray-600'>New Password</label>
            <input type='password' className='w-full border p-2 rounded-md' placeholder='New Password'/>
          </span>
          <span className='flex flex-col w-full space-y-2 mt-2'>
            <label className='text-gray-600'>Current Password</label>
            <input type='password' className='w-full border p-2 rounded-md' placeholder='Confirm Password'/>
          </span>
          <button className='w-full bg-primary text-white p-1.5 rounded-md mt-5'>Update Password</button>
        </div>
      </div>
    </div>

  );
};

export default UserPortal;
