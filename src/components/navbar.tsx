import { FC } from "react";
import '../styles/components/Header.css';
import { LinkedInIcon, MailIcon, PhoneIcon, MoonIcon, SunIcon } from "./icons/icons";
import { THEMES } from "../constants/themes";

interface NavbarProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ dark, setDark }) => {
  const t = dark ? THEMES.dark : THEMES.light;

  const iconLinkStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, borderRadius: '50%',
    color: t.ink2, border: `1px solid ${t.border}`,
    transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
    textDecoration: 'none',
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999,
      background: t.navBg,
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${t.border}`,
      height: 60,
      display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
      padding: '0 32px',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <a href="#" style={{ fontFamily: "'Argine', serif", fontSize: 22, fontWeight: 700, fontStyle: 'italic', color: t.ink, letterSpacing: '0.01em', textDecoration: 'none' }}>
        Bhavya
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a href="https://in.linkedin.com/in/bhavya-chaurasia" className="nav-icon-link" style={iconLinkStyle}><LinkedInIcon /></a>
        <a href="mailto:contact@bhavyachaurasia.in" className="nav-icon-link" style={iconLinkStyle}><MailIcon /></a>
        <a href="tel:+919109502001" className="nav-icon-link" style={iconLinkStyle}><PhoneIcon /></a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
        {['Work', 'About', 'Resume'].map(l => (
          <a key={l} href="#" className="nav-link" style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.04em', color: t.ink2, textDecoration: 'none', padding: '6px 12px', borderRadius: 20, transition: 'color 0.2s, background 0.2s' }}>
            {l}
          </a>
        ))}
        <button
          className="theme-toggle"
          onClick={() => setDark(d => !d)}
          style={{
            width: 36, height: 36, borderRadius: '50%',
            border: `1px solid ${t.border}`, background: t.btn, color: t.ink2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginLeft: 8, transition: 'all 0.2s',
          }}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;