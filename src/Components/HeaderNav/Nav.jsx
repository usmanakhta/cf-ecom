import React, { useState, useRef, useEffect } from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Megabar1 from "../Mega-Menu/Megabar1";
import Megabar2 from "../FullScreen-Megabar/Megabar2";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categoriesRef = useRef(null);
  const menuRef = useRef(null);

  // Pages Array
  const items = [
    "Sale Page",
    "Vendor",
    "Author",
    "Shop",
    "Sale Page",
    "Vendor",
  ];

  // Reels Array
  const items2 = [
    "Shoes",
    "Shirt",
    "T-Shirt",
    "Toys & Games",
    "T-Shirt",
    "Toys & Games",
  ];

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !categoriesRef.current.contains(event.target)
      ) {
        // Close both categories and menu if the click is outside both
        setIsMenuOpen(false);
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-2 bg-white md:w-[78%]">
        {/* Categories Section */}
        <div
          ref={categoriesRef}
          className="h-[2.5rem] w-[15%] bg-[#dfeaeb] rounded px-2 hidden sm:block relative cursor-pointer"
          onClick={toggleCategories}
        >
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center gap-1 shani">
              <WidgetsIcon className="text-gray-500" />
              <p className="text-gray-500 text-sm">Categories</p>
            </div>
            <KeyboardArrowDownIcon className="text-gray-500" />
          </div>

          {/* Dropdown */}
          {isCategoriesOpen && (
            <div
              className="absolute top-[2.8rem] left-0 w-[160px] bg-white shadow-lg rounded-lg py-3 transition-transform duration-300 ease-in-out"
              style={{ zIndex: 1000 }}
            >
              <ul className="space-y-3">
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Categories <NavigateNextIcon className="ms-5" />{" "}
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Electronics <NavigateNextIcon className="ms-5" />
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Cloth
                </li>
                <li className="hover:bg-gray-100 text-gray-700 cursor-pointer px-4 py-1">
                  Car
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

        {/* Toggle Button for Mobile */}
        <div className="sm:hidden">
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-500"
            >
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
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-[0rem] left-0 w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none z-50`}
        >
          {/* Close Icon Inside Menu */}
          {isMenuOpen && (
            <div className="flex justify-end p-4 sm:hidden">
              <button onClick={closeMenus} className="text-black">
                <CloseIcon />
              </button>
            </div>
          )}

          <ul className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-[80px] px-4 py-2 sm:px-0 sm:py-5 ">
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Mega Menu <KeyboardArrowDownIcon fontSize="small" />
              </a>

              {/* MegaBar1 */}
              <Megabar1 />
            </li>

            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Full Screen Menu <KeyboardArrowDownIcon fontSize="small" />
              </a>
              {/* MegaBar2 */}
              <Megabar2 />
            </li>

            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Pages <KeyboardArrowDownIcon fontSize="small" />
              </a>

              <ul className="h-[40vh] top-[200px] w-[50%] md:w-[17%] py-3 bg-white absolute md:left-[820px] md:top-[11rem] rounded-lg shadow-2xl z-50 border page">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-100 text-gray-700 cursor-pointer px-6 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 py-2 sm:py-0">
                Reels <KeyboardArrowDownIcon fontSize="small" />
              </a>

              <ul className="h-[40vh] top-[240px] w-[50%] md:w-[17%] py-3 bg-white absolute md:left-[970px] md:top-[11rem] rounded-lg shadow-2xl z-50 border reels">
                {items2.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-100 text-gray-700 cursor-pointer px-6 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
