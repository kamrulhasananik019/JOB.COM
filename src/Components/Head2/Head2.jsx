import React, { useEffect, useState } from 'react';


const Head2 = () => {

const [cards,setCards]=useState([]);
useEffect(()=>{
  fetch('/cards.json')
  .then(res=> res.json()
  .then(data=> setCards(data)))
},[])

  return (
    <section className='my-14'>
      <div className='text-center my-10'>
        <h1 className='text-4xl lg:text-6xl py-5'>Job Category List</h1>
        <p className='text-md lg:text-2xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
        {cards.map(cd=>  <div className='border w-56 p-8 text-center col-span-1 mx-auto bg-violet-50'>
          <img src={cd.Category_logo} className='mx-auto w-20 h-20' alt='' />
          <h1 className='text-xl p-2'>{cd.Category_name}</h1>
          <p className='text-indigo-300'>{cd.Jobs_available}</p>
        </div> )}
       
        
      </div>
    </section>
  );
};

export default Head2;
