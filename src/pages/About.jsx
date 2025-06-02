// src/pages/About.jsx
import React from 'react';

// Componente da página "Sobre".
// Fornece informações sobre o projeto e seus objetivos.
// Utiliza classes Tailwind CSS para layout e estilização.
function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-4">
      <h1 className="text-5xl font-extrabold text-green-700 mb-6 animate-fade-in-down">
        Sobre Este Projeto
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
        Este projeto foi desenvolvido como uma demonstração de habilidades em desenvolvimento
        front-end moderno, utilizando as tecnologias React e Vite. O foco principal é a
        implementação de uma Single Page Application (SPA) com navegação eficiente e uma
        experiência de usuário aprimorada.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Objetivos</h2>
        <ul className="list-disc list-inside text-left text-lg text-gray-600 space-y-2">
          <li>Demonstrar o uso do React Router para navegação dinâmica.</li>
          <li>Praticar a componentização e a reutilização de código.</li>
          <li>Criar um layout responsivo que se adapta a diferentes tamanhos de tela.</li>
          <li>Fornecer um exemplo claro de um projeto React moderno.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
