"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "../components";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <motion.nav  
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8"
    >
      <div className="nav-gradient" />

      <div className="flexBetween">
        <a href="/" className="logo-text">
          Light
        </a>

        <div className="hidden lg:flex gap-7">
          <ul className="flex items-center">
            <li className="relative">
              <a
                href="#home"
                className={`px-8 font-medium hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "home" && "active-nav"
                }`}
                onClick={() => setActiveMenu("home")}
              >
                Home
              </a>
              {activeMenu === "home" && (
                <div className="w-[20px] pt-2 border-b-4 border-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
            </li>
            <li className="relative">
              <a
                href="#company"
                className={`px-8 font-medium hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "company" && "active-nav"
                }`}
                onClick={() => setActiveMenu("company")}
              >
                Company
              </a>
              {activeMenu === "company" && (
                <div className="w-[20px] pt-2 border-b-4 border-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
            </li>
            <li className="relative">
              <a
                href="#features"
                className={`px-8 font-medium hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "features" && "active-nav"
                }`}
                onClick={() => setActiveMenu("features")}
              >
                Features
              </a>
              {activeMenu === "features" && (
                <div className="w-[20px] pt-2 border-b-4 border-white absolute left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              )}
            </li>
          </ul>
          <Button containerStyles="px-5 py-2" title="Sign Up" />
        </div>

        <img
          src="/icons/menu.svg"
          alt="menu"
          className="block lg:hidden w-[22px] h-[22px] object-cover cursor-pointer hover:opacity-70 transition-opacity duration-300"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
