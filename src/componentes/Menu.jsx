import React, { useState } from 'react';

export function Menu({ isSticky }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="lg:flex justify-end w-full lg:w-3/4 mt-6 space-x-12">
      <div className="lg:hidden">
        <button className={`text-3xl font-bold ${isSticky ? 'sticky-menu' : 'non-sticky-menu'} hover:text-sky-700 transition duration-500 ml-[80%]`} onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`lg:flex space-x-12 ${isOpen ? 'lg:flex-col' : 'hidden'}`}>
        <a href="#home" className={`text-lg font-bold ${isSticky ? 'sticky-menu' : 'non-sticky-menu'} hover:text-sky-700 transition duration-500 block ${activeItem === "home" ? "text-sky-700" : ""}`} onClick={() => handleItemClick("home")} style={{ marginLeft: isOpen ? "3rem" : 0 }}>HOME</a>
        <a href="#about" className={`text-lg font-bold ${isSticky ? 'sticky-menu' : 'non-sticky-menu'} hover:text-sky-700 transition duration-500 block ${activeItem === "about" ? "text-sky-700" : ""}`} onClick={() => handleItemClick("about")}>A CERCA DE MI</a>
        <a href="#projects" className={`text-lg font-bold ${isSticky ? 'sticky-menu' : 'non-sticky-menu'} hover:text-sky-700 transition duration-500 block ${activeItem === "projects" ? "text-sky-700" : ""}`} onClick={() => handleItemClick("projects")}>PROYECTOS</a>
        <a href="#contact" className={`text-lg font-bold ${isSticky ? 'sticky-menu' : 'non-sticky-menu'} hover:text-sky-700 transition duration-500 block ${activeItem === "contact" ? "text-sky-700" : ""}`} onClick={() => handleItemClick("contact")}>CONTACTO</a>
      </div>
    </div>
  );
}
