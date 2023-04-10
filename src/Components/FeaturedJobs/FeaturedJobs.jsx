import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import '../Header/Header'

const FeaturedJobs = () => {
  const [cart, setCart] = useState([]);
  const [showAll,setShowAll]=useState(false)

  useEffect(() => {
    fetch('fake.json')
      .then(res => res.json())
      .then(data => setCart(data));
  }, []);

  

const handleshowAll=()=>{
setShowAll(true)
}

  return (
    <section>
      <div className='text-center py-12'>
        <h1 className='text-4xl lg:text-5xl'>Featured Jobs</h1>
        <p className='text-md lg:text-2xl py-5'>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        {cart.slice(0,showAll ? 8 : 4).map(ct=><Cart ct={ct} key={ct.id}></Cart> )}
      
      </div>
     <div className='text-center py-5'>
     {!showAll && (<button  onClick={handleshowAll}
     className='custom-btn p-4 text-2xl'>See All Jobs </button>)}
     </div>
    </section>
  );
};

export default FeaturedJobs;
