import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;