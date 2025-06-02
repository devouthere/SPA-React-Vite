// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// O componente principal da aplicação.
// Define a estrutura global, incluindo a barra de navegação e as rotas.
// As classes Tailwind CSS são usadas para estilização responsiva.
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Barra de navegação */}
      <Navbar />

      {/* Conteúdo principal da aplicação, onde as rotas são renderizadas */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />
          {/* Rota para a página Sobre */}
          <Route path="/about" element={<About />} />
          {/* Rota para a página de Contato */}
          <Route path="/contact" element={<Contact />} />
          {/* Rota para qualquer caminho não encontrado (opcional, pode ser uma página 404) */}
          <Route path="*" element={<h1 className="text-2xl font-bold text-center text-gray-800">404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>

      {/* Rodapé simples */}
      <footer className="bg-gray-800 text-white p-4 text-center text-sm rounded-t-lg">
        <p>&copy; {new Date().getFullYear()} SPA React + Vite. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
