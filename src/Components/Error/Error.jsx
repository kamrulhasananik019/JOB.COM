import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log(status);
    return (
        <div className='text-center h-[100vh] flex flex-col items-center justify-center'>
           
            <h1 className='text-6xl font-bold'>Oops!</h1>
            <h2 className='text-5xl mt-6 font-bold'>{status ? status : "Error code not found"}</h2>
            <p className='text-3xl font-semibold mt-10'>Sorry, an unexpected error has occurred.</p>
            <p className='text-2xl mt-4'>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"><button className='bg-blue-500 text-white font-semibold px-3 py-2 rounded-lg mt-6'>Back To Homepage</button>
            </Link>
        </div>
    );
};

export default ErrorPage;