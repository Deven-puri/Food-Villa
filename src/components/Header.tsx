import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store: any) => store.cart.items);
  const location = useLocation();

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-md px-3 sm:px-6 py-2 relative z-10">
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img
          src={LOGO_URL}
          alt="Logo"
          className="w-7 h-7 sm:w-9 sm:h-9 object-contain transition-transform hover:scale-110"
        />
      </div>
      <div className="overflow-x-auto">
        <ul className="flex gap-3 sm:gap-4 md:gap-5 items-center list-none text-xs sm:text-sm md:text-base whitespace-nowrap">
          <li className="hidden md:flex items-center gap-1 text-gray-600">
            <span>{onlineStatus ? "✅" : "🔴"}</span>
            <span className="text-xs">Online</span>
          </li>
          <li>
            <Link
              to="/"
              className={`px-2 py-1 rounded-md transition-colors ${
                isActive("/")
                  ? "bg-yellow-400 text-yellow-900 font-semibold"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-2 py-1 rounded-md transition-colors ${
                isActive("/about")
                  ? "bg-yellow-400 text-yellow-900 font-semibold"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`px-2 py-1 rounded-md transition-colors ${
                isActive("/contact")
                  ? "bg-yellow-400 text-yellow-900 font-semibold"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className={`px-2 py-1 rounded-md transition-colors ${
                isActive("/grocery")
                  ? "bg-yellow-400 text-yellow-900 font-semibold"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`px-2 py-1 rounded-md transition-colors font-semibold ${
                isActive("/cart")
                  ? "bg-yellow-400 text-yellow-900"
                  : "text-gray-700 hover:bg-yellow-200"
              }`}
            >
              <span className="hidden sm:inline">Cart ({cartItems.length})</span>
              <span className="sm:hidden">🛒 ({cartItems.length})</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
