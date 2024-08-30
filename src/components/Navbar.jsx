import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`
            ${styles.paddingX} w-full flex items-center fixed top-z z-20 bg-primary py-2
        `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scroll(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-16 h-16 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold">
                        Achilov Timur <span className="block text-[14px] text-secondary"> Web developer</span>
                    </p>
                </Link>
                <ul className="list-none hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title
                                ? "text-white"
                                : "text-secondary"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => {
                                setActive(link.title);
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden block">
                    <button className="block w-16 h-8 relative z-20" onClick={() => setToggle(!toggle)}>
                        <span className={`bg-white  h-0.5 absolute left-0  transition-all origin-center ${toggle ? "rotate-45 w-full top-1/2 delay-150" : "top-0 w-1/2"}`}></span>
                        <span className={`bg-white w-full h-0.5 absolute left-0 top-1/2 transition-all origin-center ${toggle ? "scale-0" : "delay-150"}`}></span>
                        <span className={`bg-white  h-0.5 absolute right-0 bottom-0 transition-all origin-center ${toggle ? "-rotate-45 w-full top-1/2 delay-150" : "w-1/2"}`}></span>
                    </button>

                    <div className={`flex flex-col justify-center fixed z-10 right-0 top-0 bg-tertiary h-screen w-2/5 min-w-60 overflow-x-scroll pb-5 transition-transform ${toggle ? "" : "translate-x-full"}`}>
                        <ul className="list-none flex flex-col justify-center items-center gap-8 h-100 mt-26 px-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title
                                        ? "text-white"
                                        : "text-secondary"
                                        } hover:text-white text-[24px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={`backdrop fixed top-0 left-0 w-full h-full bg-primary z-5  transition-all ${toggle ? "opacity-55" : "opacity-0 pointer-events-none"}`} onClick={() => setToggle(!toggle)}>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
