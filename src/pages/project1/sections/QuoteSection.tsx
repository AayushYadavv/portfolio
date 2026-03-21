import { project1Styles as styles } from "../styles";

interface QuoteSectionProps {
  quote: string;
}

const QuoteSection = ({ quote }: QuoteSectionProps) => {
  return <blockquote style={styles.quote}>{quote}</blockquote>;
};

export default QuoteSection;
