// DarkModeContext.tsx
'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {

  const getInitialDarkMode = () => {
    try {
      // Check local storage for saved dark mode preference on initial render
      const savedDarkMode = localStorage.getItem('darkMode');
      // Ensure a valid boolean value (true or false)
      return savedDarkMode === 'true' ? true : false;
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      // Set a default value if localStorage access fails
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState( getInitialDarkMode);

  useEffect(() => {
    // Update body class and local storage on darkMode state change
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]); // Dependency array: update only when darkMode changes

  const toggleDarkMode = () => {
    // Toggle darkMode state using a functional update
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
