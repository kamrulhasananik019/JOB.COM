import React from 'react';
import man from '../../assets/All Images/P3OLGJ1 copy 1.png';
import '../Header/Header.css'

const Head = () => {
    return (
       <section className='my-15 bg-violet-50'>
         <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='cols p-14 text-center lg:text-start ' > 
                <h1 className='text-3xl lg:text-8xl'>
                    One Step Closer To Your <span className='text-indigo-400'> Dream Job</span>
                </h1> 
                <p className='py-5 text-2xl'>Explore thousands of job opportunities with 
                    all the information you need. Its your future. 
                    Come find it. Manage all your job application from
                     start to finish.</p>
                     <button className='custom-btn text-3xl p-5 '>Get Started</button>
            </div>
            <div className='cols'>
                <img src={man} alt="" />
            </div>
            
        </div>
       </section>
    );
};

export default Head;
