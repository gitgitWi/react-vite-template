import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <h1>Hello from BrowserRouter</h1>
        <h2>hello: {import.meta.env.VITE_HELLO}</h2>
      </>
    ),
  },
]);
