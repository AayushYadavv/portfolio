import { project1Styles as styles } from "../styles";

interface HeroSectionProps {
  tags: string;
  title: string;
  subtitle: string;
}

const HeroSection = ({ tags, title, subtitle }: HeroSectionProps) => {
  return (
    <>
      <div style={styles.tags}>{tags}</div>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.subtitle}>{subtitle}</p>
    </>
  );
};

export default HeroSection;
