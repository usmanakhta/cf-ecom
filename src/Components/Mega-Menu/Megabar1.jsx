import React from 'react'
import './Megabar1.css';

function Megabar1() {

  const menuData = [
    {
      title: "Home",
      items: Array(8).fill("Home"),
      bgColor: "#f6f9fc", // Optional background color
    },
    {
      title: "User Account",
      items: Array(8).fill("Home"),
    },
    {
      title: "Vendor Account",
      items: Array(8).fill("Home"),
      bgColor: "#f6f9fc",
    },
    {
      title: "Sale Page",
      items: Array(8).fill("Home"),
    },
  ];


  return (
    <>
    
    <div className="h-auto w-[100%] left-0 md:w-[70%] bg-white rounded-xl z-50 shadow-xl border absolute md:left-[200px] top-[178px] mega">
              <div className="flex justify-between">
      {menuData.map((menu, index) => (
        <ul
          key={index}
          className={`w-[23%] py-5 space-y-5 ${
            menu.bgColor ? `bg-[${menu.bgColor}]` : ""
          }`}
        >
          <li className="font-medium text-gray-700 cursor-pointer px-6 py-2">
            {menu.title}
          </li>
          {menu.items.map((item, idx) => (
            <li
              key={idx}
              className="hover:bg-gray-100 text-gray-700 cursor-pointer px-6 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
              </div>
    
    </>
  )
}

export default Megabar1