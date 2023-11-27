import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Login';

const Header = () => {
  const [active, setActive] = useState('');


  const handleLoginClick = () => {
    // Your login logic here
    console.log('Login clicked');
  };

  return (
    <>
      <nav className='stick top-0 container py-4 px-20 max-w-full shadow-sm text-black '>
        <div className='flex items-center justify-between'>
          <h1 className='w-36 text-2xl'>myShoes</h1>

          <div className='flex text-sm space-x-10'>
            <a href='#'>HOMME</a>
            <a href='#'>FEMME</a>
            <a href='#'>ENFANT</a>

            <div>
              <input className='h-7' type='search' placeholder='recherche' />
              <button className='h-7 w-8'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </div>

            <Link to='login' onClick={handleLoginClick}>
              <i className='fa-solid fa-user'></i>
            </Link>
            <a href='#'>
              <i className='fa-regular fa-heart'></i>
            </a>
            <a href='#'>
              <i className='fa-solid fa-cart-shopping'></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
