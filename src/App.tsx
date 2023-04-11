import { ReactQueryClientProvider } from '@features/providers/react-query';
import { ReactRouterProvider } from '@features/providers/react-router-dom';

export function App() {
  return (
    <ReactQueryClientProvider>
      <ReactRouterProvider />
    </ReactQueryClientProvider>
  );
}
