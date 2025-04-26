"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@components";
import { navVariants } from "@utils/motion";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

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

        {/* MENU DESKTOP */}
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
          </ul>
          <Button containerStyles="px-5 py-2" title="Sign Up" />
        </div>
        
        {/* MENU MOBILE ICON */}
        {!isShowMobileMenu ?
          <Image
            src="/icons/menu.svg"
            alt="menu icon"
            width={22}
            height={22}
            sizes="100vw"
            onClick={() => setIsShowMobileMenu(true)}
            className="block lg:hidden object-cover 
              cursor-pointer hover:opacity-70 transition-opacity duration-300"
          />
        :
          <Image
            src="/icons/cross.svg"
            alt="close menu icon"
            width={22}
            height={22}
            sizes="100vw"
            onClick={() => setIsShowMobileMenu(false)}
            className="block lg:hidden object-cover 
              cursor-pointer hover:opacity-70 transition-opacity duration-300"
          />
        }
        
        {/* MENU MOBILE */}
        <div 
          className={`${isShowMobileMenu ? "glassmorphism-1 w-96" : "w-0"} 
            fixed top-0 left-0 transition-all z-50`}
        >
          <ul className="h-screen flex flex-col items-center justify-center
            gap-y-7 overflow-x-hidden overflow-y-auto"
          >
            <li>
              <a
                href="#home"
                className={`font-medium text-2xl 
                  hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "home" && "active-nav"
                }`}
                onClick={() => setActiveMenu("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className={`font-medium text-2xl
                  hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "features" && "active-nav"
                }`}
                onClick={() => setActiveMenu("features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#company"
                className={`font-medium text-2xl 
                  hover:text-purple-1 transition-colors duration-300 ${
                  activeMenu === "company" && "active-nav"
                }`}
                onClick={() => setActiveMenu("company")}
              >
                Company
              </a>
            </li>
            <li className="mt-3">
              <Button 
                containerStyles="px-5 py-3"
                textStyles="text-lg" 
                title="Sign Up" 
              />
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
