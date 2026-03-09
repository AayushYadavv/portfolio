import { FC } from 'react';
import '../styles/components/Header.css';

interface HeaderProps {
  onThemeToggle: () => void;
  theme: 'light' | 'dark';
}

const Header: FC<HeaderProps> = ({ onThemeToggle, theme }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className="anim-fade-up-1">
            Aayush <span className="hi-word">Yadav</span>
          </h1>
          <p className="subtitle anim-fade-up-2">Designer & Developer</p>
        </div>

        <nav className="nav">
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>

      <div className="header-divider">
        <div className="scroll-line"></div>
      </div>
    </header>
  );
};

export default Header;
