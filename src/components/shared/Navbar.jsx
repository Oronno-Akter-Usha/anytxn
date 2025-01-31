import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[92px] pt-4 pb-6 shadow-2xl flex items-center justify-between px-8 lg:bg-white md:bg-[#1F80F0]">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Mobile Menu  */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-[#1B76E9] text-white transform mt-[92px] ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Mobile Nav Items */}
          <ul className="flex flex-col space-y-4 px-6 mt-10">
            {/* Solutions Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Solutions <IoMdArrowDropdown />
              </button>

              {dropdownOpen && (
                <ul className="mt-2 space-y-2 bg-[#165DB7] rounded-md">
                  <li className="px-4 py-2 hover:bg-[#104A94] cursor-pointer">
                    Solution 1
                  </li>
                  <li className="px-4 py-2 hover:bg-[#104A94] cursor-pointer">
                    Solution 2
                  </li>
                  <li className="px-4 py-2 hover:bg-[#104A94] cursor-pointer">
                    Solution 3
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to={"/service"} className="hover:text-gray-300">
                Service
              </NavLink>
            </li>

            <li>
              <NavLink to={"/about-us"} className="hover:text-gray-300">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/contact"}
                className="block px-4 py-2  border-white border-2 text-white text-center "
              >
                <span className="flex items-center justify-center gap-2 text-[18px] font-medium">
                  Contact Us <MdArrowForwardIos />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:gap-6">
          {/* Solutions Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-[#1B76E9]"
            >
              Solutions <IoMdArrowDropdown />
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 text-[#1B76E9] bg-white shadow-lg rounded-md">
                <li className="px-4 py-2 cursor-pointer">Solution 1</li>
                <li className="px-4 py-2 cursor-pointer">Solution 2</li>
                <li className="px-4 py-2 cursor-pointer">Solution 3</li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to={"/service"} className="text-[#1B76E9]">
              Service
            </NavLink>
          </li>

          <li>
            <NavLink to={"/about-us"} className="text-[#1B76E9]">
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Contact Button  */}
        <NavLink
          to={"/contact"}
          className="hidden md:block px-4 py-2 bg-orange-400 text-white text-[18px] font-medium"
        >
          <span className="flex items-center justify-center gap-2">
            Contact Us <MdArrowForwardIos />
          </span>
        </NavLink>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose /> : <MdMenu />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
