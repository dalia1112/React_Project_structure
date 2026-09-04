import React from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>      
      {children}    
    </>


  );
};

export default AppProvider