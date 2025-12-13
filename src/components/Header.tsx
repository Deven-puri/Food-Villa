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
    <div className="flex justify-between items-center bg-yellow-100 shadow-lg p-4 relative z-10">
      <div className="flex items-center">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="w-12 h-12 object-contain"
          style={{ maxWidth: "48px", maxHeight: "48px" }}
        />
      </div>
      <div>
        <ul className="flex gap-6 items-center list-none text-lg">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="px-4 py-2 border border-black rounded cursor-pointer hover:bg-pink-300"
              onClick={() => {
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");
              }}
            >
              {buttonName}
            </button>
          </li>
          <li> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
