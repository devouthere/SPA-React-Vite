// src/tests/Navbar.test.jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Necessário para testar componentes com Link
import Navbar from '../components/Navbar';

// Descreve um grupo de testes para o componente Navbar.
describe('Navbar', () => {
  // Teste para verificar se o componente Navbar é renderizado corretamente.
  it('should render Navbar component', () => {
    // Renderiza o Navbar dentro de um BrowserRouter, pois ele usa <Link>.
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Verifica se o título da aplicação está presente.
    expect(screen.getByText('Minha SPA 🚀')).toBeInTheDocument();
    // Verifica se os links de navegação estão presentes.
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  // Teste para verificar se os links possuem os atributos href corretos.
  it('should have correct navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Obtém os links pelo texto e verifica seus atributos 'href'.
    expect(screen.getByText('Início').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Sobre').closest('a')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Contato').closest('a')).toHaveAttribute('href', '/contact');
  });
});
