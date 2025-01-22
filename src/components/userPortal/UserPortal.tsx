import { Ban, CheckCircle2, ClipboardList, PhoneCall } from 'lucide-react';
import React from 'react';

const UserPortal = () => {
  const stats = [
    {
      name: 'Total Applications',
      totalNumber:'25',
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
        <p className="font-semibold text-2xl text-gray-800">Account Settings</p>
        <p className="text-gray-600">Manage your profile and account settings</p>
      </div>
  
      <hr className="border w-full mt-6" />
      <div className="flex flex-col mx-8 mt-6">
        <p className="text-gray-800 font-semibold text-2xl">Application Statistics</p>
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
              <p className="text-center mt-2 text-sm">{value.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default UserPortal;
