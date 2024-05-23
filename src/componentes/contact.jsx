import cityImage from '../imagenes/ciudad-contacto.jpg';

export function Contact() {
  return (
    <div 
      className="relative bg-cover bg-center min-h-screen" 
      style={{ backgroundImage: `url(${cityImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-center text-4xl lg:text-6xl font-bold mb-2 text-white">CONTACTO</h2>
        <div className="flex justify-center items-center mb-6">
          <div className="border-b-4 border-sky-500 pb-2 lg:w-1/6"></div>
        </div>
        <p className="text-center text-white mb-6">
          Puedes contactar conmigo vía email o por teléfono.<br/>
          Siéntete libre de contactar y contestaré lo más rápido posible.
        </p>
        <div className="bg-white shadow-lg p-8 lg:p-16 mt-5 mx-auto lg:max-w-4xl text-left rounded-md z-10">
          <div className="flex flex-col lg:flex-row justify-around lg:justify-center space-x-0 lg:space-x-8 items-center">
            <div className="flex flex-col items-center lg:mt-0 mb-8 lg:mb-0">
              <div className="rounded-full bg-sky-100 p-4 lg:p-6">
                <a href="tel:+34640148974"><i className="fa-solid fa-phone text-4xl lg:text-6xl text-sky-600" /></a>
              </div>
              <p className="text-center mt-4">Teléfono: <a className='text-sky-600' href="tel:+34640148974">+34 640 14 89 74</a></p>
            </div>
            <div className="flex flex-col items-center lg:mt-0">
              <div className="rounded-full bg-sky-100 p-4 lg:p-6">
                <a href="mailto:javi.martin.montes@gmail.com"><i className="fa-solid fa-envelope text-4xl lg:text-6xl text-sky-600" /></a>
              </div>
              <p className="text-center mt-4">Email: <a className='text-sky-600' href="mailto:javi.martin.montes@gmail.com">javi.martin.montes@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
