// src/pages/Contact.jsx
import React from 'react'; // Importa React para usar React.memo

// Componente da página de Contato.
// Apresenta informações de contato e um formulário de exemplo.
// Utiliza classes Tailwind CSS para layout e estilização.
// React.memo é usado para evitar re-renderizações desnecessárias se as props não mudarem.
const Contact = React.memo(function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-4">
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6 animate-fade-in-down">
        Entre em Contato
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8 animate-fade-in-up">
        Ficou com alguma dúvida ou quer saber mais sobre o projeto? Preencha o formulário
        abaixo ou utilize as informações de contato.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 mb-2">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
              placeholder="Sua mensagem aqui..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
        <div className="mt-8 text-gray-600 text-lg">
          <p>Ou entre em contato diretamente:</p>
          <p>Email: <a href="mailto:contato@exemplo.com" className="text-purple-600 hover:underline">contato@exemplo.com</a></p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
      </div>
    </div>
  );
});

export default Contact;
