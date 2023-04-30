import { themes } from "@/Utils/themes";
import { getRandomValues, randomInt } from "crypto";
import React from "react";
import { CgDarkMode } from "react-icons/cg";
function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Navbar: React.FC<{ setTheme: any }> = ({ setTheme }) => {
    const themeChangeHandler = () => {
        const idx = getRndInteger(0, themes.length - 1);
        setTheme(() => themes[idx]);
        // setTheme(() => "light");
    };
    return (
        <div className="navbar bg-secondary h-24">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case  text-primary text-3xl">
                    CodeSwap
                </a>
            </div>
            <div className="flex-none">
                <ul className=" menu menu-horizontal px-1">
                    <li>
                        <button className="btn" onClick={themeChangeHandler}>
                            <CgDarkMode className="text-2xl " />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
