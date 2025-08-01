'use client';
import mobileLogo from '@/@assets/images/logo-mobile.svg';
import logo from '@/@assets/images/logo.svg';
import LayoutContainer from '@/@components/layout/LayoutContainer';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-dark-bg mt-4 lg:mt-9">
            <LayoutContainer className="!justify-between" isMobileMenuOpen={isMobileMenuOpen}>
                <div className="flex items-start justify-between w-full">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl md:text-2xl">
                        {/* Desktop Logo */}
                        <Image
                            src={logo.src}
                            alt="logo-image"
                            className="hidden md:block w-[170px]"
                            width={170}
                            height={170}
                        />
                        {/* Mobile Logo */}
                        <Image
                            src={mobileLogo.src}
                            alt="mobile-logo-image"
                            className="md:hidden w-[120px] ml-[90%]"
                            width={120}
                            height={120}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10 text-[18px]">
                        <Link
                            href="#about"
                            className="font-semibold text-light-gray hover:text-cyan-400"
                        >
                            About us
                        </Link>
                        <Link
                            href="#contact"
                            className="font-semibold text-light-gray hover:text-cyan-400"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-4 pt-4">
                            <a
                                href="#about"
                                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About us
                            </a>
                            <a
                                href="#contact"
                                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </LayoutContainer>
        </nav>
    );
};

export default Navbar;