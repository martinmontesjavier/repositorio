import React, { useState } from 'react';
import tetrisImage from '../imagenes/proyecto-tetris.png';
import ticketsImage from '../imagenes/proyecto-tickets.png';
import memoryImage from '../imagenes/proyecto-memory.png';

function Project({ title, description, imageSrc, projectUrl }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full p-4">
      <div
        className="relative h-96 lg:h-128 bg-cover bg-center rounded-lg shadow-md"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white text-2xl lg:text-8xl font-bold mb-4">{title}</h3>
            <button
              onClick={() => setExpanded(!expanded)}
              className="py-2 px-4 bg-sky-600 text-white font-bold rounded-md shadow-md hover:bg-sky-500"
            >
              {expanded ? "Ocultar" : "Ver más"}
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="mt-4 bg-white rounded-lg shadow-md p-4 lg:p-8">
          <div className="mb-4">
            <p className="text-gray-800">{description}</p>
          </div>
          <a href={projectUrl} className="block w-full text-center py-3 bg-sky-600 text-white font-bold rounded-md shadow-md hover:bg-sky-500">Ver Proyecto</a>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Tetris",
      description: "Esta es una versión mia y personalizada del legendario juego de Tetris, desarrollada completamente en JavaScript utilizando un enfoque de componentes y vistas. Inspirado en el clásico de los 80, este proyecto combina la nostalgia del juego original con la flexibilidad y la interactividad que proporcionan las tecnologías web contemporáneas.",
      imageSrc: tetrisImage,
      projectUrl: "https://tetris-definitivo.onrender.com/"
    },
    {
      title: "Gestión de tickets",
      description: "Esta es una aplicación de gestión de incidencias desarrollada en JavaScript que ofrece una solución eficiente para gestionar y resolver incidencias en cualquier entorno, desde equipos de desarrollo hasta departamentos de atención al cliente. Este proyecto, construido con un enfoque modular y orientado a componentes y vistas, proporciona herramientas específicas para cada rol dentro de la organización, facilitando la colaboración y mejorando la productividad en la resolución de problemas.",
      imageSrc: ticketsImage,
      projectUrl: "https://tickets-ounj.onrender.com/"
    },
    {
      title: "Pokemon Memory",
      description: "PokeMemory es un juego de memoria inspirado en el mundo de Pokémon, desarrollado con React.js. Este proyecto combina la nostalgia de la franquicia de Pokémon con la potencia y la flexibilidad del framework React, utilizando componentes y vistas reutilizables, contextos para la gestión del estado global, peticiones a la API de Pokémon para obtener datos y efectos y estados para una experiencia de juego dinámica y envolvente.",
      imageSrc: memoryImage,
      projectUrl: "https://memory-jwwm.onrender.com/"
    }
  ];

  return (
    <div className="container-fluid bg-black text-white mx-auto p-4 pt-10 lg:pt-24">
      <h2 className="text-center text-4xl lg:text-6xl font-bold">PROYECTOS</h2>
      <div className="flex flex-col items-center">
        <div className="border-b-4 border-b-sky-400 w-20 flex my-2"></div>
      </div>
      
      <p className="mb-5 text-center">Aquí están algunos de mis proyectos más destacados con una resumen de cada uno de ellos</p>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <Project
            key={index} 
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}
