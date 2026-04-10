import { RouterProvider } from 'react-router';
import { router } from './routes';
import { DarkModeProvider } from './context/DarkModeContext';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </DarkModeProvider>
  );
}
