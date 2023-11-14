import React from 'react';

const Header = () => {
  return (
    <nav className='stick top-0 container py-4 px-20 max-w-full text-white bg-slate-900'>
      <div className='flex items-center justify-between'>
        <h1 className='w-36 text-2xl'>myShoes</h1>
        
        <div className='flex text-sm space-x-10'>
          <a href="#">HOMME</a>
          <a href="#">FEMME</a>
          <a href="#">ENFANT</a>

          <div>
            <input className='h-7' type='search' placeholder='recherche'/>
            <button className='h-7 w-8'><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <a href='#'><i className="fa-solid fa-user"></i>compte</a>
          <a href='#'><i className="fa-regular fa-heart"></i>favoris</a>
          <a href='#'><i className="fa-solid fa-cart-shopping"></i>panier</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
