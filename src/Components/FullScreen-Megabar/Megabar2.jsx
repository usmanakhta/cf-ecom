import React, { useState } from "react";
import "../FullScreen-Megabar/Megabar2.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Nestedmegabar from "./Nestedmegabar";
import ElectricNested from "./ElectricNested";
import BooksNested from "./BooksNested";
import SportNested from "./SportNested";
import SoftwareNested from "./SoftwareNested";
import ToysNested from "./ToysNested";

function Megabar2() {
  const [activeCategory, setActiveCategory] = useState("Fashion"); // Default to "Fashion"

  const categories = [
    { name: "Fashion", component: <Nestedmegabar /> },
    { name: "Electronics", component: <ElectricNested /> },
    { name: "Books", component: <BooksNested /> },
    { name: "Sports", component: <SportNested /> },
    { name: "Software", component: <SoftwareNested /> },
    { name: "Toys & Games", component: <ToysNested /> },
  ];

  return (
    <div
      className="h-[70vh] w-full bg-white rounded-xl overflow-hidden overflow-y-auto z-50 shadow-xl border absolute left-0 top-[178px] mega2"
      onMouseLeave={() => setActiveCategory("Fashion")} // Reset to "Fashion" when mouse leaves
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <ul className="w-[27%] md:w-[17%] bg-white border-e space-y-5 py-4 px-2 md:px-6">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`text-[14px] md:text-[16px] flex justify-between hover:bg-gray-100 rounded-lg px-1 cursor-pointer py-2 ${
                activeCategory === category.name ? "bg-gray-100 font-bold" : ""
              }`}
              onMouseEnter={() => setActiveCategory(category.name)} // Show nested content on hover
            >
              {category.name} <NavigateNextIcon />
            </li>
          ))}
        </ul>

        {/* Main Content */}
        <div className="w-full md:w-[83%] p-4">
          {categories.find((category) => category.name === activeCategory)?.component}
        </div>
      </div>
    </div>
  );
}

export default Megabar2;
