import React, { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="hidden sm:block h-[3rem] w-full bg-[#1d284f] px-5">
        <div className="flex items-center justify-between h-[3rem]">
          {/* Left Section */}
          <div className="flex items-center justify-start gap-3 w-full sm:w-[50%]">
            <div className="h-[1.7rem] text-xs sm:text-sm w-[3.5rem] bg-[#5f5f5f] flex items-center justify-center text-center text-white rounded-2xl">
              Hot
            </div>
            <p className="text-white text-xs sm:text-sm">
              Free Express Shipping
            </p>
          </div>
          {/* Right Section */}
          <div className="flex items-center justify-end gap-3 sm:gap-5 w-full sm:w-[50%]">
            <p className="text-white text-xs sm:text-sm flex items-center gap-1">
              EN <KeyboardArrowDownIcon fontSize="small" />
            </p>
            <XIcon className="text-white hidden sm:block" />
            <FacebookIcon className="text-white text-sm sm:text-base" />
            <InstagramIcon className="text-white text-sm sm:text-base" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap justify-between items-center my-4 px-4 sm:px-8 gap-4">
        {/* Logo */}
        <div className="bg-[#1d284f] text-white rounded-2xl px-4 py-2 text-sm sm:text-base">
          Bazaarsa
        </div>

        {/* Search Bar */}
        <div
          ref={dropdownRef}
          className="h-[3rem] bg-[#ececec] flex items-center gap-2 rounded-lg px-2 sm:px-4 sm:w-[55%] relative"
        >
          <SearchIcon className="text-gray-500 text-sm sm:text-base" />
          <input
            type="text"
            placeholder="Search for.."
            className="flex-grow bg-transparent outline-none p-1 text-xs sm:text-sm"
          />
          <KeyboardVoiceIcon className="text-gray-500 text-sm sm:text-base" />
          <CollectionsIcon className="text-gray-500 text-sm sm:text-base" />
          <div
            className="bg-transparent hidden sm:block text-gray-500 text-xs sm:text-sm p-1 py-1 border-l-gray-600 border-l-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <p>
              All Categories <KeyboardArrowDownIcon />
            </p>
          </div>

          {/* Dropdown */}
          {isDropdownVisible && (
            <div
              className="absolute top-[2rem] right-0 sm:left-[570px] w-[180px] bg-white rounded-lg shadow-lg py-3 transition-transform duration-300 ease-in-out"
              style={{ zIndex: 1000 }}
            >
              <ul className="space-y-3">
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Categories
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Car
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Cloth
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Electronics
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Toys
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Shoes
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="hidden sm:block">
          <AccountCircleIcon className="text-gray-400 text-2xl sm:text-3xl" />
          <ShoppingBagIcon className="text-gray-400 text-2xl sm:text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
