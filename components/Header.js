"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosArrowDown ,IoIosArrowUp} from "react-icons/io";

const Header = ({ locname = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Remove router-related logic and directly handle paths with locname
  const basePath = locname === 'bangalore' ? '/bangalore' : '';
  useEffect(() => {
  if (isOpen) {
    // prevent background scroll
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none'; // improves mobile behavior
  } else {
    // restore scroll
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }

  // cleanup on unmount
  return () => {
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  };
}, [isOpen]);

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="border-b-2 border-gray-200 px-5 md:px-12 lg:px-20 py-4 flex justify-between items-center">
      {/* <Link href={`${basePath || '/'}`} aria-label="Home">
        <Image
          className="h-12 w-40 lg:scale-110 scale-75"
          src="/Dozzy123.webp"
          alt="Dozzy App For Farmhouse Booking"
          width={1000}
          height={1000}
        />
      </Link>

      <nav className="hidden lg:block text-black lg:mt-2 xl:pl-56" aria-label="Primary Navigation">
        <ul className="flex gap-8 xl:gap-12 font-semibold xl:text-lg lg:text-base">
          <li><Link href={`${locname.length ? `/${locname}` : '/'}`} className="hover:text-blue-400 hover:underline">Home</Link></li>
          <li><Link href={`${basePath}/blog`} className="hover:text-blue-400 hover:underline">Blog</Link></li>
          <li><Link href={`${basePath}/about`} className="hover:text-blue-400 hover:underline">About Us</Link></li>
          <li><Link href={`${basePath}/contact-us`} className="hover:text-blue-400 hover:underline">Contact Us</Link></li>
        </ul>
      </nav>

      <address className="hidden lg:block not-italic text-black text-right py-2">
        <p className="text-sm lg:text-3xl text-[#556EE6] font-bold">For Booking-- help</p>
        <a href="tel:9111911162" className="flex items-center gap-1 lg:gap-2 font-bold text-sm lg:text-3xl cursor-pointer">
          <FiPhoneCall className="size-3 lg:size-6" />
          9111-9111-62
        </a>
      </address> */}
      <Link href="/" aria-label="Home">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col leading-tight">
            <span className="text-pink-500 text-xs font-bold tracking-wide">30 MIN DELIVERY</span>
            <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 group-hover:text-black transition">
              Hyderabad <IoIosArrowDown size={20}/>
            </span>
          </div>
        </div>
      </Link>
      {/* LOGO */}
      <Link href="/" className="relative text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group">
        Zu<span className="text-pink-500">Get</span>
      </Link>

      <ul className="lg:flex gap-x-12 hidden  pl-4 text-black font-semibold text-sm">
        <li><Link className='hover:border-b-2 hover:border-b-green-300' href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link className='hover:border-b-2 hover:border-b-green-300' href="/shops" onClick={() => setIsOpen(false)}>Shops</Link></li>
        <li><Link className='hover:border-b-2 hover:border-b-green-300' href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
        <li><Link className='hover:border-b-2 hover:border-b-green-300' href="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
      </ul>


      <div className="lg:hidden block pt-2">
        <button
          ref={buttonRef}
          className="z-40 text-pink-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {!isOpen ? (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 9.586 6.707 4.293a1 1 0 1 0-1.414 1.414L10.586 11l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 12.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 11l5.293-5.293a1 1 0 0 0 0-1.414z" />
            </svg>
          )}
        </button>
      </div>

      <nav
        ref={menuRef}
        aria-label="Mobile Navigation"
        className={`
    fixed top-[70px] right-0 z-50
    h-[calc(100vh-70px)]
    w-[85%] sm:w-[70%]
    bg-white/80 backdrop-blur-xl
    border-l border-gray-200
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        {/* Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-transparent to-emerald-200/30 pointer-events-none" />

        <div className="relative p-6 flex flex-col h-full">

          {/* Logo */}
          <Link href="/" aria-label="Home" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-3 pb-6">
              <p className="text-3xl font-extrabold tracking-tight text-gray-900">
                Zu<span className="text-pink-500">Get</span>
              </p>
            </div>
          </Link>

          {/* Nav Links */}
          <ul className="flex flex-col gap-4 border-t border-gray-200 pt-6 text-lg font-semibold">
            {[
              { name: "Home", link: "/" },
              { name: "Shops", link: "/shops" },
              { name: "About Us", link: "/about-us" },
              { name: "Contact Us", link: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
              group flex items-center justify-between
              text-gray-800
              transition-all duration-300
              hover:text-pink-500
            "
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {item.name}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Delivery Highlight */}
          <div className="mt-8 rounded-2xl bg-linear-to-r from-green-500 to-emerald-500 p-5 text-white shadow-lg">
            <p className="text-sm uppercase tracking-wide opacity-90">
              Fast Delivery
            </p>
            <p className="text-xl font-bold mt-1">
              Fashion at your door in minutes ⚡
            </p>
          </div>

          {/* Help Section */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Need help?</p>
            <a
              href="tel:9111911162"
              className="text-2xl font-extrabold text-pink-500 hover:underline"
            >
              9111-9111-62
            </a>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;
