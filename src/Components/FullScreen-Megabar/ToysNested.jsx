import React from 'react'
import { FaTshirt } from "react-icons/fa";
import { RiShirtFill } from "react-icons/ri";
import { GiSonicShoes } from "react-icons/gi";
import { PiTShirtBold } from "react-icons/pi";

function ToysNested() {

 const categories = [
    {
      title: "Men's Fashion",
      items: [
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
      ],
    },
    {
      title: "Women's Fashion",
      items: [
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
      ],
    },
    {
      title: "Girl's Fashion",
      items: [
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
        { icon: <FaTshirt />, label: "T-Shirt" },
        { icon: <RiShirtFill />, label: "Formal-Shirt" },
        { icon: <FaTshirt />, label: "Shirt" },
        { icon: <GiSonicShoes />, label: "Shoes" },
        { icon: <PiTShirtBold />, label: "Jeans Pent" },
      ],
    },
  ];

  return (
    <>
    
    <div className="h-auto sm:py-5 md:py-5 w-[80%] left-[100px] absolute md:left-[230px] top-0 nestedmega1">
      {categories.map((category, index) => (
        <div key={index}>
          <header className="text-gray-800 font-medium p-8">{category.title}</header>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 px-4">
            {category.items.map((item, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    </>
  )
}

export default ToysNested