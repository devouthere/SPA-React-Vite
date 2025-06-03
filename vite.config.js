// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite.
// Inclui o plugin React e a configuração para o Vitest.
export default defineConfig({
  plugins: [react()],
  test: {
    // Define o ambiente de teste como 'jsdom' para simular um navegador.
    environment: 'jsdom',
    // Define os arquivos de setup para os testes.
    setupFiles: './src/tests/setupTests.js',
    // Define os padrões de arquivos de teste a serem incluídos.
    globals: true, // Permite usar 'describe', 'it', 'expect' globalmente
  },
});
