import React, { useState } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 bg-white md:w-[80%]">
        {/* Categories Section */}
        <div className="h-[2.5rem] w-[15%] bg-[#dfeaeb] rounded px-2 hidden sm:block">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-1">
              <WidgetsIcon className="text-gray-500" />
              <p className="text-gray-500 text-sm">Categories</p>
            </div>
            <NavigateNextIcon className="text-gray-500" />
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="sm:hidden">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="text-gray-500">
              <div className="flex gap-1">
                <MenuIcon /> <p>All Categories</p>
              </div>
            </button>
          )}
        </div>

        {/* Icons */}
        <div className="flex gap-2 sm:hidden">
          <AccountCircleIcon className="text-gray-400 text-2xl sm:text-3xl" />
          <ShoppingBagIcon className="text-gray-400 text-2xl sm:text-3xl" />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-[0rem] left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none z-50`}
        >
          {/* Close Icon Inside Menu */}
          {isMenuOpen && (
            <div className="flex justify-end p-4 sm:hidden">
              <button onClick={toggleMenu} className="text-black">
                <CloseIcon />
              </button>
            </div>
          )}

          <ul className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-[80px] px-4 py-2 sm:px-0 sm:py-0">
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Home <KeyboardArrowDownIcon fontSize="small" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Full Screen Menu <KeyboardArrowDownIcon fontSize="small" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Pages <KeyboardArrowDownIcon fontSize="small" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                User Account <KeyboardArrowDownIcon fontSize="small" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Reels <KeyboardArrowDownIcon fontSize="small" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
