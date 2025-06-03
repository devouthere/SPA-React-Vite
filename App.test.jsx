// src/tests/App.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Descreve um grupo de testes para o componente App e suas rotas.
describe('App Routing', () => {
  // Teste para verificar se a página inicial é carregada por padrão.
  it('should render Home page by default', async () => {
    // Renderiza o componente App dentro de um BrowserRouter para simular o ambiente de navegação.
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Como as páginas são carregadas via lazy loading, usamos waitFor para aguardar o carregamento.
    await waitFor(() => {
      expect(screen.getByText('Bem-vindo à Nossa SPA!')).toBeInTheDocument();
    });
  });

  // Teste para verificar a navegação para a página "Sobre".
  it('should navigate to About page when "Sobre" link is clicked', async () => {
    const user = userEvent.setup(); // Configura o userEvent para simular interações do usuário.

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Clica no link "Sobre".
    await user.click(screen.getByText('Sobre'));

    // Aguarda até que o conteúdo da página "Sobre" seja carregado e visível.
    await waitFor(() => {
      expect(screen.getByText('Sobre Este Projeto')).toBeInTheDocument();
    });
  });

  // Teste para verificar a navegação para a página "Contato".
  it('should navigate to Contact page when "Contato" link is clicked', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Clica no link "Contato".
    await user.click(screen.getByText('Contato'));

    // Aguarda até que o conteúdo da página "Contato" seja carregado e visível.
    await waitFor(() => {
      expect(screen.getByText('Entre em Contato')).toBeInTheDocument();
    });
  });

  // Teste para verificar se a página 404 é exibida para uma rota inválida.
  it('should display 404 page for invalid route', async () => {
    // Renderiza o App com uma rota inicial inválida.
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Navega para uma URL que não existe.
    window.history.pushState({}, 'Test page', '/rota-inexistente');

    // Aguarda até que o texto da página 404 seja visível.
    await waitFor(() => {
      expect(screen.getByText('404 - Página Não Encontrada')).toBeInTheDocument();
    });
  });
});
