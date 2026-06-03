import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    // Glob ricorsivi: 'node_modules' (stringa secca) NON escludeva i node_modules
    // annidati (es. .claude/worktrees/*/node_modules), facendo girare i test
    // vendored di terze parti (msw) che richiedono jsdom. Esclusi anche worktrees.
    exclude: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/.claude/**'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
});
