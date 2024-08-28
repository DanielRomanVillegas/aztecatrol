export const Map = () => {
  return (
    <div className="p-3 rounded ">
      <p className="text-lg font-bold mb-4">Ubicacion</p>
      <iframe
        className="w-full md:min-w-96 min-h-80 rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.4348548571706!2d-92.95898512391237!3d17.95849448610004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd76c9f2f447f%3A0x468aa333b4485a9c!2sCalle%20Prof.%20Gonzalo%20Le%C3%B3n%20Gonz%C3%A1lez%2C%20Sabina%2C%2086153%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1724787549508!5m2!1ses!2smx"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};
