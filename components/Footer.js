import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 text-gray-700">

      {/* Decorative Background Blur (Speed / Delivery Feel) */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Zu<span className="text-pink-500">Get</span>
            </h3>
            <p className="text-lg lg:text-xl font-semibold text-gray-800 leading-snug">
              Your city’s fashion,
              <span className="text-pink-500"> delivered fast</span>
            </p>
            <p className="mt-3 text-sm text-gray-500">
              With ❤️ from Hyderabad
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-pink-500 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Track Order", "Returns"].map((item) => (
                <li
                  key={item}
                  className="hover:text-pink-500 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li className="hover:text-pink-500 transition hover:translate-x-1">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="hover:text-pink-500 transition hover:translate-x-1">
                <Link href="/privacy-policy-merchant">
                  Privacy Policy Merchant
                </Link>
              </li>
              <li className="hover:text-pink-500 transition hover:translate-x-1">
                <Link href="/privacy-policy-delivery">
                  Privacy Policy Delivery Partner
                </Link>
              </li>
              <li className="hover:text-pink-500 transition hover:translate-x-1 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-pink-500 transition hover:translate-x-1 cursor-pointer">
                Cookie Policy
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2025 ZuGet. Fast fashion delivery, redefined.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
