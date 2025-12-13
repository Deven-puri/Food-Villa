import React, { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [buttonName, setButtonName] = useState("Login");
  /* if o dependency array then useEffect us called on every rendering of the componsent */
  /* if empty dependency array then useEffect is called only once after the first rendering of the component */
  const onlineStatus = useOnlineStatus();

  // subscribing to the store using a Selector
  const cartItems = useSelector((store: any) => store.cart.items);

  useEffect(() => {
    console.log("useEffect called");
  }, [buttonName]);
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="flex justify-between items-center bg-yellow-100 shadow-lg p-2 sm:p-4 relative z-10">
      <div className="flex items-center">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
          style={{ maxWidth: "48px", maxHeight: "48px" }}
        />
      </div>
      <div className="overflow-x-auto">
        <ul className="flex gap-2 sm:gap-4 md:gap-6 items-center list-none text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
          <li className="hidden md:block">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hidden lg:block">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">
              <span className="hidden sm:inline">
                Cart - ({cartItems.length} items)
              </span>
              <span className="sm:hidden">🛒 ({cartItems.length})</span>
            </Link>
          </li>
          <li>
            <button
              className="px-2 py-1 sm:px-4 sm:py-2 border border-black rounded cursor-pointer hover:bg-pink-300"
              onClick={() => {
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");
              }}
            >
              {buttonName}
            </button>
          </li>
          <li className="hidden md:block"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
