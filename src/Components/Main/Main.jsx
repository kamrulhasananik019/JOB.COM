import React from 'react';
import Header from '../Header/Header';
import '../Header/Header'
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className='md:container md:mx-auto cp-font'>
            <Header></Header>
           <Outlet></Outlet>
       
        </div>
    );
};

export default Main;