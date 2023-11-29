import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const [active, setActive] = useState('');

  const handleLoginClick = () => {
    console.log("Login clicked");
  };
  const handleHomeClick = () => {
    console.log("Home clicked");
  };
  const handleCartClick = () => {
    console.log("Cart clicked");
  };
  const handleFavoriteClick = () => {
    console.log("Favorite clicked")
  };

  return (
    <>
      <nav className="stick top-0 container py-4 px-20 max-w-full shadow-sm text-black ">
        <div className="flex items-center justify-between">
          <Link to="../" onClick={handleHomeClick} className="w-36 text-2xl">
            myShoes
          </Link>

          <div className="flex text-sm space-x-10">
            <Link href="#">HOMME</Link>
            <Link href="#">FEMME</Link>
            <Link href="#">ENFANT</Link>

            <div>
              <input
                className="h-7 p-4 rounded-l border-gray-200 border-2"
                type="search"
                placeholder="recherche"
              />
              <button className="h-9 w-9  bg-black text-white">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <Link to="login" onClick={handleLoginClick}>
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="favoris" onClick={handleFavoriteClick}>
              <i className="fa-regular fa-heart"></i>
            </Link>
            <Link to="cart" onClick={handleCartClick}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
