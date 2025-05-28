"use client";

import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white px-6 py-6 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">MyPortfolio</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#about" className="hover:text-blue-600">About</a></li>
                    <li><a href="#notes" className="hover:text-blue-600">Notes | Blog</a></li>
                    <li><a href="#photo" className="hover:text-blue-600">Photograps</a></li>
                </ul>

                {/* Mobile Menu Icon */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FontAwesomeIcon icon="fa-solid fa-x" /> : "anan"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2"> onClick={toggleMenu}
                    <ul className="flex flex-col space-y-4 px-4 text-gray-700 font-medium">
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#notes" onClick={toggleMenu}>Notes | Blog</a></li>
                        <li><a href="#photo" onClick={toggleMenu}>Photograps</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
