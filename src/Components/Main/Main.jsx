import React from 'react';
import Header from '../Header/Header';
import '../Header/Header'
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';


const Main = () => {
    const path = useLocation().pathname
    return (
        <div className={ (path === '/') && 'mx-5 lg:mx-40'}>
        { (path === '/') && <Header></Header>}
        <Outlet></Outlet>
        <div className='footer-custom-clr mt-6'>
        <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;