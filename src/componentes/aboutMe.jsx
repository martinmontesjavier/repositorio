import htmlImage from '../imagenes/html.png';
import cssImage from '../imagenes/css.png';
import jsImage from '../imagenes/js.png';
import reactImage from '../imagenes/react.png';
import wordpressImage from '../imagenes/wordpress.png';
import phpImage from '../imagenes/php.png';
import gitImage from '../imagenes/git.png';
import githubImage from '../imagenes/github.png';
import responsiveImage from '../imagenes/responsive.png';
import terminalImage from '../imagenes/terminal.png';

import javiImage from '../imagenes/yo-2.jpg';
import agujeroNegroImage from '../imagenes/agujero-negro.jpg';

export function AboutMe() {
  return (
    <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 pt-20 bg-black text-white">
      <h2 className="text-center text-4xl lg:text-6xl font-bold">A CERCA DE MI</h2>
      <div className="flex justify-center my-4">
        <div className="border-b-4 border-sky-400 w-20"></div>
      </div>
      
      <p className="mb-5 text-center">Aquí encontrarás información detallada sobre mí</p>
      
      {/* Div grande con imagen a la izquierda y texto sobre ti a la derecha */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Div izquierdo con la imagen */}
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img className="w-full rounded-lg" src={javiImage} alt="Imagen sobre mí" />
        </div>
        {/* Div derecho con el texto sobre ti */}
        <div className="lg:w-1/2 lg:pl-8">
          <div className="p-5">
            <p>Soy un <strong>Desarrollador Web Frontend</strong> especializado en la creación y gestión del Front-end de sitios web y aplicaciones web. Mi enfoque se centra en desarrollar soluciones que impulsen el éxito del producto en su conjunto. Puedes revisar algunos de mis proyectos en la sección de <strong>Proyectos</strong>.</p><br/>
            <p>Además de mi experiencia en desarrollo web, también tengo conocimientos en diseño de páginas web utilizando WordPress y habilidades en HTML y CSS con tecnologías como Bootstrap y Tailwind. También he trabajado con lenguajes como JAVA, C++, PHP, y bases de datos MySQL.</p><br/>
            <p>Me apasiona compartir mi conocimiento y experiencia en desarrollo web con la comunidad. Estoy siempre dispuesto a aprender y crecer, por lo que estoy abierto a nuevas oportunidades de empleo donde pueda contribuir y continuar desarrollándome profesionalmente. Si tienes una oportunidad que se alinee con mis habilidades y experiencia, no dudes en contactarme.</p><br/>
            <div className="flex justify-center lg:justify-start">
              <a href="#contact">
                <button className="py-3 px-8 mt-4 font-bold text-white bg-sky-600 rounded-md shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50">CONTACTA</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Div con el apartado de mis conocimientos */}
      <div className="mt-10 py-44" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${agujeroNegroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <div className="mb-10">
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-center text-white">Mis conocimientos</h3>
        </div>
        <div className="skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { src: htmlImage, alt: "HTML", label: "HTML" },
            { src: cssImage, alt: "CSS", label: "CSS" },
            { src: jsImage, alt: "JavaScript", label: "JavaScript" },
            { src: reactImage, alt: "React", label: "React" },
            { src: wordpressImage, alt: "Wordpress", label: "Wordpress" },
            { src: phpImage, alt: "PHP", label: "PHP" },
            { src: gitImage, alt: "GIT", label: "GIT" },
            { src: githubImage, alt: "Github", label: "Github" },
            { src: responsiveImage, alt: "Responsive Design", label: "Responsive Design" },
            { src: terminalImage, alt: "Terminal", label: "Terminal" },
          ].map((skill, index) => (
            <div key={index} className="bg-white border-2 border-black p-2 rounded flex flex-col justify-center items-center">
              <img className="w-20 h-20 mb-2" src={skill.src} alt={skill.alt} />
              <p className="text-sky-500 text-center font-bold">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
