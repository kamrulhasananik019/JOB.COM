import React from 'react';
import Account from '../../assets/Icons/accounts 1.png';
import business from '../../assets/Icons/business 1.png';
import social from '../../assets/Icons/social-media 1.png';
import chip from '../../assets/Icons/chip 1.png';

const Head2 = () => {
  return (
    <section className='my-14'>
      <div className='text-center my-10'>
        <h1 className='text-4xl lg:text-6xl py-5'>Job Category List</h1>
        <p className='text-md lg:text-2xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        <div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50'>
          <img src={Account} className='mx-auto w-20 h-20' alt='' />
          <h1 className='text-xl p-2'>Account & Finance</h1>
          <p className='text-indigo-300'>300 Jobs Available</p>
        </div>
        <div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50'>
          <img src={business} className='mx-auto w-20 h-20' alt='' />
          <h1 className='text-xl p-2'>Creative Design</h1>
          <p className='text-indigo-300'>100+ Jobs Available</p>
        </div><div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50'>
          <img src={social} className='mx-auto w-20 h-20' alt='' />
          <h1 className='text-xl p-2'>Marketing & Sales</h1>
          <p className='text-indigo-300'>150 Jobs Available </p>
        </div><div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50'>
          <img src={chip} className='mx-auto w-20 h-20' alt='' />
          <h1 className='text-xl p-2'>Engineering Job</h1>
          <p className='text-indigo-300'>224 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default Head2;
