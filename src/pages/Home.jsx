// src/pages/Home.jsx
import React from 'react';

// Componente da página inicial.
// Exibe uma mensagem de boas-vindas e uma breve descrição.
// Utiliza classes Tailwind CSS para centralização e estilização.
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 animate-fade-in-down">
        Bem-vindo à Nossa SPA!
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
        Esta é uma demonstração de uma Single Page Application construída com React e Vite,
        apresentando navegação fluida e responsividade. Explore as outras páginas!
      </p>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Recursos Principais</h2>
        <ul className="list-disc list-inside text-left text-lg text-gray-600 space-y-2">
          <li>Navegação instantânea sem recarregar a página.</li>
          <li>Componentes reutilizáveis para uma arquitetura modular.</li>
          <li>Design responsivo para todos os dispositivos.</li>
          <li>Configuração otimizada com Vite para desenvolvimento rápido.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
