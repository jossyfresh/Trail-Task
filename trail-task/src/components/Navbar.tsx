import { useState } from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/logo.png";
import dropdownicon from "../assets/dropdownicon.png";
import dropdown from "../assets/dropdown.png";
import Marquees from "./Marquee";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col w-full bg-primary gap-3 ">
      {/* first row of the navbar */}
      <div className="flex flex-row justify-between px-5 py-5">
        {/* left corner */}
        <div className="flex gap-3 items-center py-2  my-auto">
          {/* logo */}
          <img src={logo} alt="a" className="" />
          <img src={dropdownicon} alt="" className="h-7 font-[800]" />
        </div>
        {/* middle */}
        <div className="hidden xl:flex xl:items-center xl:visible">
          <ul className="flex flex-row gap-5 text-[#A39FD2]">
            <li className="flex flex-row items-center gap-1.5">
              <a href="#">Features</a>
              <img src={dropdown} alt="" />
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li className="flex flex-row items-center gap-1.5">
              <a href="#">Company</a>
              <img src={dropdown} alt="" />
            </li>
            <li className="flex flex-row items-center gap-1.5">
              <a href="#">Resources</a>
              <img src={dropdown} alt="" />
            </li>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>

        {/* right corner */}
        <div className="hidden xl:flex xl:flex-row xl:gap-5 xl:items-center">
          <button className="px-2.5 py-2 bg-buttonPrimary text-white rounded-md font-sans">
            Create Landscape
          </button>
          <button className="px-2.5 py-2 border-[2px] border-white rounded-md font-[500] text-white">
            Discover Landscape
          </button>
        </div>
        <div className="lg:flex xl:hidden">
          {" "}
          {/* Visible only on small screens */}
          <button onClick={toggleMenu} className="text-2xl p-2">
            {isOpen ? (
              <Icon icon="mdi:close" color="white" fontSize={24} /> // Icon when menu is open
            ) : (
              <Icon icon="ooui:menu" color="white" fontSize={24} /> // Icon when menu is closed (default)
            )}
          </button>
        </div>
      </div>
      {/* second row fo the navbar */}
      <div className="w-full pb-5">
        <Marquees />
      </div>
      {isOpen && (
        <div className="flex flex-col gap-5 items-center xl:hidden">
          <ul className="flex flex-col w-full gap-5 text-[#A39FD2] ">
            <li className="flex flex-row items-center gap-1.5 px-10">
              <a href="#">Features</a>
              <img src={dropdown} alt="" />
            </li>
            <hr />
            <li className="px-10">
              <a href="#">Pricing</a>
            </li>
            <hr />
            <li className="flex flex-row items-center gap-1.5 px-10">
              <a href="#">Company</a>
              <img src={dropdown} alt="" />
            </li>
            <hr color="#373458" />
            <li className="flex flex-row items-center gap-1.5 px-10">
              <a href="#">Resources</a>
              <img src={dropdown} alt="" />
            </li>
            <hr />
            <li className="px-10">
              <a href="#">Enterprise</a>
            </li>
            <hr />
            <li className="px-10">
              <a href="#">Login</a>
            </li>
            <hr />
          </ul>
          <div className="flex flex-col w-full gap-5 items-center xl:hidden px-5 py-4">
            <button className="px-2.5 py-2 w-full bg-buttonPrimary text-white rounded-md font-sans">
              Create Landscape
            </button>
            <button className="px-2.5 py-2 w-full border-[2px] border-white rounded-md font-[500] text-white">
              Discover Landscape
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
