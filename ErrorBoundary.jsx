// src/components/ErrorBoundary.jsx
import React from 'react';

/**
 * Componente ErrorBoundary para capturar erros em componentes filhos.
 * Isso evita que a aplicação inteira trave devido a um erro em um único componente.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Este método é chamado quando um erro é lançado em um componente filho.
  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização mostre a UI de fallback.
    return { hasError: true };
  }

  // Este método é chamado após um erro ter sido lançado.
  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erros.
    console.error("Erro capturado por ErrorBoundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI de fallback personalizada
      return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-4 bg-red-100 text-red-800 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Ocorreu um erro! 😥</h2>
          <p className="text-lg mb-2">Parece que algo deu errado ao carregar esta seção.</p>
          <p className="text-md text-red-700">Por favor, tente recarregar a página ou contate o suporte.</p>
          {/* Opcional: Mostrar detalhes do erro apenas em desenvolvimento */}
          {this.state.errorInfo && (
            <details className="mt-4 p-2 bg-red-50 rounded-md text-left text-sm whitespace-pre-wrap">
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
