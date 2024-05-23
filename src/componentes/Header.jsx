import { Avatar } from "./avatar";
import { Menu } from "./Menu";
import React, { useState, useEffect } from 'react';

export function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex items-center justify-between p-4 ${isSticky ? 'sticky top-0 bg-gray-800 text-white shadow-lg z-50' : 'bg-black text-sky-400'}`}>
      <Avatar />
      <Menu isSticky={isSticky} />
    </header>
  );
}
