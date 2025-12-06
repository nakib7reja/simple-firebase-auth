import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Header from '../components/Header';

const Root = () => {
    return (
        <div className='text-center pt-20'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;