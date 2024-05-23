export function Avatar() {
  return (
    <div className="flex items-center ml-4 mt-4">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
        <a href="mailto:javi.martin.montes@gmail.com" ><img src="src/imagenes/yo.jpg" alt="Avatar" className="object-cover w-full h-full" /></a>
      </div>
      <h1 className="mt-2 ml-3 lg:ml-4 text-base lg:text-lg font-bold hover:text-sky-700 transition duration-500"><a href="mailto:javi.martin.montes@gmail.com">Javier Martin</a></h1>
    </div>
  );
}
