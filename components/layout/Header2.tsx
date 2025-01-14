'use client'
import React, { useState } from "react";

const Header2 = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);

    const toggleDropdown = (dropdown:never) => {
        if (dropdown === "pages") {
            setIsPagesOpen(!isPagesOpen);
            setIsBlogOpen(false); // Close other dropdowns
        } else if (dropdown === "blog") {
            setIsBlogOpen(!isBlogOpen);
            setIsPagesOpen(false); // Close other dropdowns
        }
    };

    return (
        <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between sm:px-10 px-4 py-3 gap-4 w-full max-w-screen-xl mx-auto">
                {/* Logo */}
                <a href="javascript:void(0)" className="max-sm:hidden">
                    <img
                        src="https://readymadeui.com/readymadeui.svg"
                        alt="logo"
                        className="w-32"
                    />
                </a>
                <a href="javascript:void(0)" className="hidden max-sm:block">
                    <img
                        src="https://readymadeui.com/readymadeui-short.svg"
                        alt="logo"
                        className="w-9"
                    />
                </a>

                {/* Menu */}
                <div id="collapseMenu" className="max-lg:hidden lg:!block">
                    <ul className="lg:flex lg:gap-x-10">
                        <li className="max-lg:border-b max-lg:py-3">
                            <a
                                href="javascript:void(0)"
                                className="hover:text-blue-600 text-[15px] font-bold text-blue-600 block"
                            >
                                Home
                            </a>
                        </li>
                        {/* Pages Dropdown */}
                        <li className="relative max-lg:border-b max-lg:py-3">
                            <button
                                onClick={() => toggleDropdown("pages")}
                                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                            >
                                Pages
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    className="ml-1 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                            {isPagesOpen && (
                                <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 -left-6 min-w-[250px] z-50 px-6 py-4">
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Sign up
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Blog Dropdown */}
                        <li className="relative max-lg:border-b max-lg:py-3">
                            <button
                                onClick={() => toggleDropdown("blog")}
                                className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                            >
                                Blog
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16px"
                                    height="16px"
                                    className="ml-1 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                        data-name="16"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                            {isBlogOpen && (
                                <ul className="absolute shadow-lg bg-white space-y-3 lg:top-5 -left-6 min-w-[250px] z-50 px-6 py-4">
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Foods
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Sale
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Marketing
                                        </a>
                                    </li>
                                    <li className="border-b py-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                                        >
                                            Investment
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header2;
