// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Info, Mail } from 'lucide-react'; // Importa ícones da lucide-react

// Componente da barra de navegação.
// Utiliza Link do React Router para navegação e Tailwind CSS para estilização.
function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Título da aplicação/marca */}
        <Link to="/" className="text-white text-3xl font-extrabold mb-4 sm:mb-0 hover:text-blue-200 transition duration-300">
          Minha SPA 🚀
        </Link>

        {/* Links de navegação */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <HomeIcon size={20} />
            <span>Início</span>
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <Info size={20} />
            <span>Sobre</span>
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
