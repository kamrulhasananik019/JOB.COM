import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../LocalSt/LocalStorage';
import '../Header/Header'
import PageHeader from '../PageHeader/PageHeader';
const CartView = () => {
    const { id } = useParams();
    const [job, setJob] = useState([]);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('../fake.json');
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const details = job.find((singleData) => singleData.id === parseInt(id));

    const handleAddLst = (id) => {
      addToDb(id)
    };
      

    return (
        <div>
            {details && (
                <div>
                    <div>
                    <PageHeader title={'Job Description'}></PageHeader></div>

                    <div className='grid grid-cols-1 md:grid-cols-3 m-10 gap-5'>
                        <div className='text-lg col-span-1 '>
                            <h1 className='py-3'>
                                <span className='font-bold '>Job Description
                                </span> : {details.JobDescription}</h1>

                            <p className='py-3'>
                                <span className='font-bold'>Job Responsibility :
                                </span> {details.JobResponsibility} </p>

                            <p className='py-3'> <span className='font-bold'>Educational Requirements :
                            </span> <br /> {details.EducationalRequirements} </p>
                            <p> <span className='font-bold'>Experiences :
                            </span> <br /> {details.Experience} </p>
                        </div>
                        <div className='col-span-1'>

                        </div>
                        <div className='text-lg col-span-1 relative'>
                            <div className=' bg-indigo-100 p-10 rounded-lg'>
                                <h2 className='job-title lg:text-2xl pt-3'>Job Details</h2>
                                <hr className='w-80 border-indigo-200 my-4' />
                                <p><span className='job-details-custom-2 lg:text-lg'>Salary :</span> <span className='job-details-custom lg:text-lg'>{details.Salary}</span></p>
                                <p><span className='job-details-custom-2 lg:text-lg'>Job Title :</span> <span className='job-details-custom lg:text-lg'>{details.jobTitle}</span></p>
                                <h2 className='job-title lg:text-2xl pt-5'>Contact Information</h2>
                                <hr className='w-80 border-indigo-200 my-4' />
                                <p><span className='job-details-custom-2 lg:text-lg'>Phone :</span> <span className='job-details-custom lg:text-lg'>{details.phone}</span></p>
                                <p><span className='job-details-custom-2 lg:text-lg'>Email :</span> <span className='job-details-custom lg:text-lg'>{details.email}</span></p>
                                <p><span className='job-details-custom-2 lg:text-lg'>Address :</span> <span className='job-details-custom lg:text-lg'>{details.address}</span></p>
                                <button onClick={()=>handleAddLst(details.id)} className='custom-btn w-100 px-16 my-4 '>Apply Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CartView;
