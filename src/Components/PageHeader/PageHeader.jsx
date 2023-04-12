import React from 'react';
import Header from '../Header/Header';
import './PageHeader.css'

const PageHeader = ({title}) => {
    return (
        <div>
            <div className='bg-indigo-200 px-5 pb-40 lg:px-40'>
                <Header></Header>
                <h2 className='text-center font-bold mt-20 page-title-style text-4xl'>{title}</h2>
            </div>
        </div>
    );
};

export default PageHeader;