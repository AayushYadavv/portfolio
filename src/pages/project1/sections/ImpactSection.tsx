import { project1Styles as styles } from "../styles";

const ImpactSection = () => {
  return (
    <>
      {/* Team Successes */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Team Successes</h2>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Converted Barcadia into a customer for AgentAnalytics
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Supported funding discussions leading to investment from Artha Ventures
          </li>
        </ul>
      </section>

      {/* Design Impact */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Design Impact</h2>
        <div style={styles.impactGrid}>
          <div style={styles.impactCard}>
            <h3 style={styles.impactTitle}>Internal Impact</h3>
            <p style={styles.impactText}>
              Led the foundational UX direction for Waveflow Studio, translating complex AI workflow capabilities into a structured and usable product experience that guided early product development.
            </p>
          </div>
          <div style={styles.impactCard}>
            <h3 style={styles.impactTitle}>External Impact</h3>
            <p style={styles.impactText}>
              Independently pitched product pitches to organizations such as Barcadia, Volkswagen, IPoS and DBS, demonstrating the platform’s potential through prototypes and workflow use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Major Takeaways */}
      <section style={{ ...styles.section, marginBottom: "40px" }}>
        <h2 style={styles.sectionTitle}>Major Takeaways</h2>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Sketching through ambiguity helps uncover direction and shape early ideas
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            A structured design process improves clarity and product outcomes
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Breaking complex systems into smaller steps improves execution
          </li>
        </ul>
      </section>
    </>
  );
};

export default ImpactSection;
