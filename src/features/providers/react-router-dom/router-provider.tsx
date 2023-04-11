import { RouterProvider } from 'react-router-dom';
import { router } from '@pages/routes';

export function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
