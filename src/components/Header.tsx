function Header() {
  const handleClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <header className="bg-gradient-to-br from-[#2b6cb0] to-[#4299e1] shadow-lg mt-0 mb-8">
      <div className="max-w-8xl mx-auto px-6 py-8 text-center shadow-lg py-30">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 p-4">
          ¡Transforma tu Negocio con el Bono Digital SIN IVA!
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 p-4">
          Todo
          <span className="text-black">
            {" "}Gratis{" "}
          </span>
           para ti
        </h1>
        <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto p-2">
          Gestionamos tu subvención del Kit Digital en Canarias. Cubrimos servicios clave como creación de página web, tienda online, redes sociales y un ordenador.
        </p>
        <button
          onClick={handleClick}
          className="bg-white text-[#2b6cb0] py-3 px-6 rounded-lg hover:bg-white/90 transition-all font-medium"
        >
          Alta Kit Digital
        </button>
      </div>
    </header>
  );
}

export default Header;