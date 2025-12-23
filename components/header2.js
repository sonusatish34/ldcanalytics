"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiPhoneCall } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

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
      <Link href="/" aria-label="Home">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex flex-col leading-tight">
            <span className="text-pink-500 text-xs font-bold tracking-wide">30 MIN DELIVERY</span>
            <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 group-hover:text-black transition">
              Hyderabad
            </span>
          </div>
        </div>
      </Link>

      {/* LOGO */}
      <Link href="/" className="relative text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group">
        Zu<span className="text-pink-500">Get</span>
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-3xl text-gray-800 hover:text-black transition"
      >
        {isOpen ? (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 9.586 6.707 4.293a1 1 0 1 0-1.414 1.414L10.586 11l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 12.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 11l5.293-5.293a1 1 0 0 0 0-1.414z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        )}
      </button>

      {/* Mobile Navigation */}
      <nav
        ref={menuRef}
        className={`fixed top-20 right-0 w-4/5 sm:w-2/3 h-full bg-white shadow-lg border-l border-gray-300 z-50 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-label="Mobile Navigation"
      >
        <div className="p-6 relative border">
          <Link href="/" aria-label="Home">
            <div className="flex gap-3 items-center pb-4">
              <span className="text-2xl font-bold text-gray-800">ZuGet</span>
            </div>
          </Link>

          <ul className="flex flex-col gap-3 border-t-2 pt-4 pl-4 text-black font-semibold">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/shops" onClick={() => setIsOpen(false)}>Shops</Link></li>
            <li><Link href="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li><Link href="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
          </ul>

          <section className="border-t-2 border-gray-200 pt-4 pl-4 mt-4">
            <p className="text-sm text-gray-500">Booking Help</p>
            <a href="tel:9111911162" className="text-xl font-bold text-pink-500">9111-9111-62</a>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Header;
