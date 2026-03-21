import { useState } from "react";
import { project1Styles as styles } from "../pages/project1/styles";

interface ImagePlaceholderProps {
  label: string;
  height?: number;
}

const ImagePlaceholder = ({ label, height = 400 }: ImagePlaceholderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ ...styles.imagePlaceholder(isHovered), height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </div>
  );
};

export default ImagePlaceholder;
