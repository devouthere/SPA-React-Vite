// src/tests/Home.test.jsx
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

// Descreve um grupo de testes para o componente Home.
describe('Home', () => {
  // Teste para verificar se o componente Home é renderizado corretamente.
  it('should render Home component with welcome message', () => {
    // Renderiza o componente Home.
    render(<Home />);

    // Verifica se o título de boas-vindas está presente.
    expect(screen.getByText('Bem-vindo à Nossa SPA!')).toBeInTheDocument();
    // Verifica se o texto de descrição principal está presente.
    expect(screen.getByText(/Esta é uma demonstração de uma Single Page Application/i)).toBeInTheDocument();
    // Verifica se o título da seção "Recursos Principais" está presente.
    expect(screen.getByText('Recursos Principais')).toBeInTheDocument();
  });

  // Teste para verificar se a lista de recursos principais está presente.
  it('should display key features', () => {
    render(<Home />);

    // Verifica se os itens da lista de recursos estão presentes.
    expect(screen.getByText('Navegação instantânea sem recarregar a página.')).toBeInTheDocument();
    expect(screen.getByText('Componentes reutilizáveis para uma arquitetura modular.')).toBeInTheDocument();
    expect(screen.getByText('Design responsivo para todos os dispositivos.')).toBeInTheDocument();
    expect(screen.getByText('Configuração otimizada com Vite para desenvolvimento rápido.')).toBeInTheDocument();
  });
});
