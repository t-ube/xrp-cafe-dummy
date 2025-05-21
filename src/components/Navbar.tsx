'use client';

import React from 'react';
import Image from 'next/image';

export const Navbar: React.FC = () => {

  return (
    <header className="sticky top-0 bg-[#0076FF] text-white z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Image src="/icons/xrp-saru-logo.svg" alt="Logo" height={32} width={120} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-4 text-lg">
            <a href="/collections" className="hover:text-white/90">Collections</a>
            <a href="/stats" className="hover:text-white/90">Stats</a>
            <a href="/create" className="hover:text-white/90">Create</a>
            <a href="/drops" className="hover:text-white/90">Drops</a>
          </div>
        </div>

        {/* 中央：検索 */}
        <div className="hidden md:block max-w-md w-full mx-auto">
          <input
            type="text"
            placeholder="search"
            className="w-full rounded-full px-4 py-2 bg-blue-300 text-black placeholder-black/60 outline-none"
          />
        </div>

        {/* 右：Connect Wallet ボタン風 */}
        <div className="flex-shrink-0 ml-auto">
          <button className="relative flex items-center bg-[#0076FF] border border-white/20 rounded-full px-3 py-1">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <svg width="20" height="20" stroke="white" fill="none" viewBox="0 0 24 24">
              <path d="M15 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H15C15.5523 21 16 20.5523 16 20V4C16 3.44772 15.5523 3 15 3Z" strokeWidth="2" />
              <path d="M20 7V17C20 17.5523 19.5523 18 19 18H16V6H19C19.5523 6 20 6.44772 20 7Z" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};