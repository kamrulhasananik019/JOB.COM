import React from "react";
import "./Header.css";
import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
     <div className="sticky top-0">
           <Navbar className=" bg-violet-100" fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/%22%3E">
                <span className="web-name-font self-center whitespace-nowrap text-xl font-semibold dark:text-white">
             JOB.COM
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <button className="custom-btn lg:text-2xl px-2 lg:p-5">Start Applying</button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
            >
            Home
            </NavLink>
                <NavLink to="/statistics"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Statistics
            </NavLink>
                <NavLink 
                to="/applied-jobs"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Applied Jobs
            </NavLink>
                <NavLink 
                to="/blog"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Blog
            </NavLink>
            </Navbar.Collapse>
        </Navbar>
     </div>
    );
};

export default Header;