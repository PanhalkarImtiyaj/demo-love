import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext(undefined);

/**
 * ThemeProvider — Wrap your app with this to enable dark/light mode.
 * Usage: <ThemeProvider> <App /> </ThemeProvider>
 */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    // Read saved preference from localStorage first
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme class to <html> element for CSS variables
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  const setTheme    = (newTheme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme — Custom hook to access theme context.
 * Usage: const { theme, toggleTheme } = useTheme();
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>');
  return context;
}
