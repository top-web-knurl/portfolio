import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    return (
        <nav
            className={`
            ${styles.paddingX} w-full flex items-center fixed top-z z-20 bg-primary
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
                        className="w-20 g-20 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold">
                        Разработчик веб-сайтов
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
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

                <button className="block w-16 h-8 relative" onClick={() => setToggle(!toggle)}>
                    <span className={`bg-white  h-0.5 absolute left-0  transition-all origin-center ${toggle ? "rotate-45 w-full top-1/2 delay-150" : "top-0 w-1/2"}`}></span>
                    <span className={`bg-white w-full h-0.5 absolute left-0 top-1/2 transition-all origin-center ${toggle ? "scale-0" : "delay-150"}`}></span>
                    <span className={`bg-white  h-0.5 absolute right-0 bottom-0 transition-all origin-center ${toggle ? "-rotate-45 w-full top-1/2 delay-150" : "w-1/2"}`}></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
