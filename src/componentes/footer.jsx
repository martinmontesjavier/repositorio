import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Contact Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Contacto</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <i className="fa-solid fa-phone text-2xl text-sky-400" />
              <a href="tel:+34640148974" className="text-lg">+34 640 14 89 74</a>
            </li>
            <li className="flex items-center space-x-4">
              <i className="fa-solid fa-envelope text-2xl text-sky-400" />
              <a href="mailto:javi.martin.montes@gmail.com" className="text-lg">javi.martin.montes@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-lg hover:underline">Inicio</a></li>
            <li><a href="#projects" className="text-lg hover:underline">Proyectos</a></li>
            <li><a href="#about" className="text-lg hover:underline">Acerca de</a></li>
            <li><a href="#contact" className="text-lg hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Sígueme</h3>
          <div className="flex space-x-4">
            <a target="_blank" href="#" className="text-sky-400 hover:text-sky-500"><i className="fab fa-linkedin-in text-2xl"></i></a>
            <a target="_blank" href="https://github.com/martinmontesjavier?tab=repositories" className="text-sky-400 hover:text-sky-500" rel="noreferrer"><i className="fab fa-github text-2xl"></i></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 px-4">
        <p>&copy; 2024 Javier Martín Montes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}