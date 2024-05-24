import computerImage from '../imagenes/ordenador-home.jpg';

export function Home() {
  return (
    <div className="text-2xl">
      <div 
        className="relative" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${computerImage})`, // Fondo oscuro
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '1.5rem 2rem',
          color: 'white', // Texto blanco
        }}
      >      
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center animate-fadeIn">
          <h1 className="font-bold text-4xl lg:text-7xl">JAVIER MARTIN</h1> {/* Quitamos el color de texto, será blanco por defecto */}
          <h5 className="text-gray-200 mt-6"> {/* Color de texto gris claro */}
            Un desarrollador junior de páginas web, programas y SPA creadas vía JS, REACT y otros lenguajes de programación.
          </h5>
          <div className="mt-6 animate-bounce">
            <a href="#projects">
              <button className="py-3 px-8 font-bold bg-sky-600 rounded-md shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50">
                PROYECTOS
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
