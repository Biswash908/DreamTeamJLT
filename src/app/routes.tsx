import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CatsPage } from './pages/CatsPage';
import { CatProfilePage } from './pages/CatProfilePage';
import { DonatePage } from './pages/DonatePage';
import { AdminPage } from './pages/AdminPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/cats',
    Component: CatsPage,
  },
  {
    path: '/cat/:id',
    Component: CatProfilePage,
  },
  {
    path: '/donate',
    Component: DonatePage,
  },
  {
    path: '/admin',
    Component: AdminPage,
  },
  {
    path: '*',
    Component: () => (
      <div className="flex items-center justify-center size-full">
        <div className="text-center">
          <div className="font-['Fredoka:Bold',sans-serif] text-[48px] text-[#2d3436] mb-[16px]">404</div>
          <div className="font-['Nunito:Regular',sans-serif] text-[#636e72] text-[18px] mb-[24px]">
            Page not found
          </div>
          <a href="/" className="text-[#ff6b6b] font-['Nunito:SemiBold',sans-serif] underline">
            Go back home
          </a>
        </div>
      </div>
    ),
  },
]);
