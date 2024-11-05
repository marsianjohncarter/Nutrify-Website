

import { useState, useEffect } from "react";

export default function Navbar(props) {
    const [selectedLink, setSelectedLink] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const { navLinks } = props;

    const handleLinkClick = (index) => {
        setSelectedLink(index);
        setIsMenuOpen(false); // Close menu on link click
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderNavLinks = () => {
        return navLinks.map((link, index) => (
            <li key={index}>
                <a
                    href={link.href}
                    onClick={() => handleLinkClick(index)}
                    className={link.current
                        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                        : "block py-2 px-3 text-white hover:text-blue-500 rounded md:bg-transparent md:p-0"}
                >
                    {link.text}
                </a>
            </li>
        ));
    };

    // Scroll effect for showing/hiding navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY && currentScrollY > 100) {
                setShowNavbar(false);
                // setIsMenuOpen(false); <- Buggy closing menu TODO: Fix
            } else {
                setShowNavbar(true);
            }
            setPrevScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <nav
            className={`bg-emerald-900 bg-opacity-20 base-font backdrop-blur-md fixed w-full z-20 top-0 start-0 transition-all ease-in-out duration-300 ${
                showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
            }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="/nutrify-icon.png"
                        className="h-8"
                        alt="Nutrify Logo"
                    />
                    <span  className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Nutrify
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a
                        href="https://apps.apple.com/au/app/nutrify-whole-food-tracker/id1664020890"
                        type="button"
                        className="bg-gradient-to-r from-emerald-700 to-green-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Get started
                    </a>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        {renderNavLinks()}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
