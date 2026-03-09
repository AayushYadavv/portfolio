import { FC } from 'react';
import '../styles/components/Section.css';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2 className="section-title anim-fade-up-1">{title}</h2>
        <div className="section-divider"></div>
      </div>

      <div className="section-content anim-fade-up-2">{children}</div>
    </section>
  );
};

export default Section;
