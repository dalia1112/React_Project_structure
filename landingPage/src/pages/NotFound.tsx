import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-[#0088FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default NotFound;