import React from "react";
import { CgDarkMode } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl">CodeSwap</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                    <li>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                            <CgDarkMode className="text-2xl" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
