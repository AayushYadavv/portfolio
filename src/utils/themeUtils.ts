import { Theme } from '../types/index';

export const getStoredTheme = (): Theme => {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return 'light';
};

export const setStoredTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
};

export const toggleTheme = (currentTheme: Theme): Theme => {
  return currentTheme === 'light' ? 'dark' : 'light';
};
