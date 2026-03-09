import { FC } from 'react';
import '../styles/components/Footer.css';

interface FooterProps {
  year?: number;
}

const Footer: FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">
            GitHub
          </a>
          <span className="divider">•</span>
          <a href="#" className="footer-link">
            LinkedIn
          </a>
          <span className="divider">•</span>
          <a href="#" className="footer-link">
            Twitter
          </a>
          <span className="divider">•</span>
          <a href="mailto:hello@example.com" className="footer-link">
            Email
          </a>
        </div>

        <p className="copyright">
          © {year} Aayush Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
