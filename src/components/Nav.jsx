import React, { useState,useContext } from "react";

import { headerLogo } from "../assets/images";

import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

import appContext from "../context/context";

const Nav = () => {
  const { active, setActive } = useContext(appContext);

  // const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <header className="padding-x py-8 fixed z-30 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} onClick={() => setActive(item.label)}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg font-semibold ${
                  active === item.label ? "text-coral-red" : "text-slate-gray"
                } hover:text-coral-red`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-50`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((item, index) => (
                <li
                  key={item.label}
                  className={`font-montserrat font-medium cursor-pointer text-[16px] ${
                    active === item.label ? "text-white" : "text-slate-gray"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(item.label);
                    setToggle(!toggle);
                  }}
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
