import React from 'react';
import Header from '../Header/Header';
import '../Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
         <div className='bg-black '>
         <Footer></Footer>
         </div>

        </div>
    );
};

export default Main;