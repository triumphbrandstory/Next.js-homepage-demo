'use client';
import mobileLogo from '@/@assets/images/logo-mobile.svg';
import logo from '@/@assets/images/logo.svg';
import LayoutContainer from '@/@components/layout/LayoutContainer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <nav className="bg-dark-bg mt-4 lg:mt-9 relative z-50">
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
                            className="font-semibold text-light-gray hover:text-cyan-400 transition-colors duration-300"
                        >
                            About us
                        </Link>
                        <Link
                            href="#contact"
                            className="font-semibold text-light-gray hover:text-cyan-400 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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

                {/* Mobile Menu Full Screen */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-dark-bg z-40">
                        {/* Header with Logo and Close Button */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <Image
                                src={mobileLogo.src}
                                alt="mobile-logo-image"
                                className="w-[120px]"
                                width={120}
                                height={120}
                            />
                            <button
                                className="text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                onClick={toggleMobileMenu}
                                aria-label="Close mobile menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col items-center justify-center h-full -mt-20">
                            <div className="flex flex-col space-y-8 text-center">
                                <a
                                    href="#about"
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium text-2xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About us
                                </a>
                                <a
                                    href="#contact"
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium text-2xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </LayoutContainer>
        </nav>
    );
};

export default Navbar;