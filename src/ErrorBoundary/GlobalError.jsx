import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

const GlobalError = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/dashboard');
  };

  return (
    <div className="fixed top-[48px] right-0 z-50 w-[calc(100vw-64px)] h-full flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600 mb-2">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">We're sorry, but an unexpected error has occurred.</p>
          <p className="text-gray-500 italic">{error.statusText || error.message}</p>
        </div>
        <button 
          onClick={() => handleNavigation()} 
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default GlobalError;