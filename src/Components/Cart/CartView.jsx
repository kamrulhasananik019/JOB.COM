import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CartView = () => {
    const { id } = useParams();
    const [job, setJob] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('../../../public/fake.json');
                const data = await res.json();
                setJob(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const details = job.find((singleData) => singleData.id === parseInt(id));


    return (
        <div>
            {details && (
                <div>
                    <div><span className='bg-indigo-400 
                    
                    text-center p-96'>fello</span></div>
                    <h2>{details.jobTitle}</h2>
                    <p>{details.companyName}</p>
                    {/* Display other properties here */}
                </div>
            )}
        </div>
    );
};

export default CartView;
