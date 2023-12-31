import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import '../Header/Header';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const { id, img, jobTitle, companyName, address, Salary, jobType, jobSchedule } = props.ct;


    return (
        <div className='border border-indigo-600 p-5'>
            <img src={img} className='w-72 ' alt="" />
            <div className=' '>
                <h2 className='text-4xl py-3'>{jobTitle}</h2>
                <p className='text-slate-400 text-lg'>{companyName}</p>
                <div className='flex gap-3 py-2'>
                    <div className='w-30 p-2 font-bold border-2 rounded-lg border-indigo-500 text-indigo-500'>
                        <p>{jobSchedule}</p>
                    </div>
                    <div className='w-32 p-2 font-bold text-center rounded-lg border-2 border-indigo-500 text-indigo-500'>
                        <p>{jobType}</p>
                    </div>
                </div>
                <div className='flex my-2 text-slate-400 font-bold'>
                    <MapPinIcon className="h-6 w-6" /><p className='pr-5'>{address}</p>
                    <CurrencyDollarIcon className="h-6 w-6" /><p>{Salary}</p>
                </div>
                <Link to={`CartView/${id}`}><button  className='custom-btn p-4'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
