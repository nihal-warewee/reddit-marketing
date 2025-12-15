"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-gray-900 sticky top-0 z-50">
            <div className="flex items-center justify-between px-6 py-3 md:px-10">

                <Image
                    src="/logo.webp"
                    alt="header-logo-png"
                    width={100}
                    height={80}
                    priority
                />

                {/* desktop menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 text-white">
                        <li className="cursor-pointer hover:text-violet-400">Solutions</li>
                        <li className="cursor-pointer hover:text-violet-400">Products</li>
                        <li className="cursor-pointer hover:text-violet-400">Services</li>
                    </ul>
                </nav>


                <button className="hidden md:block bg-violet-600 text-white rounded-lg py-2 px-5 hover:bg-violet-800 transition-colors">
                    Book a Call
                </button>


                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-gray-800 transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col item text-white px-6 py-4 gap-4">
                    <li className="hover:text-violet-400 cursor-pointer">Solutions</li>
                    <li className="hover:text-violet-400 cursor-pointer">Products</li>
                    <li className="hover:text-violet-400 cursor-pointer">Services</li>

                    <button className="mt-2 bg-violet-600 rounded-lg py-2 hover:bg-violet-800 transition-colors">
                        Book a Call
                    </button>
                </ul>
            </div>
        </header>
    );
}
