import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../LocalSt/LocalStorage';
import { Dropdown, Card, Button } from 'flowbite-react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import '../Header/Header'
import PageHeader from '../PageHeader/PageHeader';
const AppliedJobs = () => {
  const jobCart = useLoaderData();
  const savedJobs = getShoppingCart();
  const [fill, setFill] = useState('');

  const appliedJobs = [];

  for (const jobId in savedJobs) {
    const job = jobCart ? jobCart.find(
        (singleData) => singleData.id === parseInt(jobId)) : "";
    appliedJobs.push(job);
  }

  console.log(fill);

  return (
    <section>
       <div>
       <PageHeader title={'Applied Jobs'}></PageHeader></div>

      <div className='flex lg:justify-end relative lg:right-96 lg:top-11'>
        <Dropdown label="Filter">
          <Dropdown.Item onClick={() => setFill('Onsite')}>Remote</Dropdown.Item>
          <Dropdown.Item onClick={() => setFill('Remote')}>Onsite</Dropdown.Item>
        </Dropdown>
      </div>
      <div className='text-2xl'>
        {appliedJobs.filter(item => fill === '' ? item : item.jobSchedule.includes(fill))
          .map(job => (
            <div className="w-3/6 lg:m-16 relative lg:left-96" key={job.id}>
      
                <div className='lg:flex justify-around gap-x-4'>
                  <img className='w-40 rounded-lg' src={job.img} alt=""/>
                  <div>
                    <p className='cart-title lg:text-xl'>{job.jobTitle}</p>
                    <p className='company-name-style-3 lg:text-lg'>{job.companyName}</p>
                    <div className='flex lg:my-4 lg:gap-4  '>
                      <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                      >
                        {job.jobType}
                      </Button>
                      <Button
                        outline={true}
                        gradientDuoTone="purpleToBlue"
                      >
                        {job.jobSchedule}
                      </Button>
                    </div>
                    <div className='flex lg:gap-4 custom-color'>
                      <div className='flex'>
                      <MapPinIcon className="h-6 w-6" />
                        <p className='company-name-style-3 lg:text-lg'>{job.address}</p>
                      </div>
                      <div className='flex'>
                      <CurrencyDollarIcon className="h-6 w-6" />
                        <p className='company-name-style-3 lg:text-lg'> Salary : {job.Salary}</p>
                      </div>
                    </div>
                  </div>
                  <Button className='lg:mt-14' gradientDuoTone="purpleToBlue">
                    View Details
                  </Button>
                </div>
              
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default AppliedJobs;
