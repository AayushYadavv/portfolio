import { project1Styles as styles } from "../styles";

interface ProjectDetailsProps {
  company: string;
  role: string;
  tenure: string;
}

const ProjectDetails = ({ company, role, tenure }: ProjectDetailsProps) => {
  return (
    <div style={styles.detailsGrid}>
      <div style={styles.detailItem}>
        <div style={styles.detailLabel}>Company</div>
        <div style={styles.detailValue}>{company}</div>
      </div>
      <div style={styles.detailItem}>
        <div style={styles.detailLabel}>Role</div>
        <div style={styles.detailValue}>{role}</div>
      </div>
      <div style={styles.detailItem}>
        <div style={styles.detailLabel}>Tenure</div>
        <div style={styles.detailValue}>{tenure}</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
