import { project1Styles as styles } from "../styles";

const CaseStudyContent = () => {
  return (
    <>
      {/* Context */}
      <section style={styles.section}>
        <div style={styles.sectionHeading}>Context</div>
        <p style={styles.paragraph}>
          Automation platforms often promise efficiency but still require significant technical expertise to use effectively. As AI-driven automation becomes more widespread, the challenge is not just building powerful systems but making them accessible.
        </p>
        <p style={styles.paragraph}>
          Waveflow Studio was envisioned as a platform that enables users to design and automate workflows using AI-powered building blocks - without requiring programming knowledge. The goal was to reduce friction in automation and empower both technical and non-technical users to build complex processes visually.
        </p>
      </section>

      {/* Role */}
      <section style={styles.section}>
        <div style={styles.sectionHeading}>Role</div>
        <p style={styles.paragraph}>
          I currently lead the end-to-end design vision for Waveflow Studio, focusing on how AI can make workflow automation intuitive, accessible, and aligned with our UX standards.
        </p>
        <p style={styles.paragraph}>
          As part of a zero-to-one product initiative, my role extended beyond product design. I conducted UX research to navigate ambiguous problem spaces, helped shape product strategy alongside leadership, and contributed to defining the roadmap and execution priorities.
        </p>
        <p style={styles.paragraph}>
          In addition to product work, I also presented the platform and its capabilities to enterprise stakeholders including Volkswagen, Barcadia, and Maruti during product demonstrations and pitches.
        </p>
      </section>

      {/* What is Waveflow Studio */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What is Waveflow Studio?</h2>
        <p style={styles.paragraph}>
          Waveflow Studio is a visual workflow automation platform designed to help users create, manage, and execute automated processes using AI.
        </p>
        <p style={styles.paragraph}>
          Similar to platforms like Make.com or n8n, the studio provides a node-based interface where users can connect services, trigger actions, and design multi-step workflows. By integrating AI capabilities directly into the workflow system, Waveflow Studio enables users to automate complex tasks while maintaining simplicity and control.
        </p>
      </section>

      {/* Problem */}
      <section style={styles.section}>
        <div style={styles.sectionHeading}>Problem</div>
        <p style={styles.paragraph}>
          While automation platforms have become increasingly powerful, they remain difficult for many users to adopt.
        </p>
        <p style={styles.paragraph}>
          Most tools require users to understand technical concepts such as APIs, logic flows, or scripting. For non-technical users, this creates a steep learning curve that prevents them from fully benefiting from automation tools.
        </p>
        <p style={styles.paragraph}>
          The challenge was to design a system that enables users with little to no coding knowledge to build, test, and manage automated workflows confidently.
        </p>
      </section>

      {/* User Journey */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>User Journey</h2>
        <img
          src="/src/assets/Project1/image1.png"
          alt="User Journey Diagram"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        />
        <div style={{
          position: "relative",
          marginTop: "16px",
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          <img
            src="/src/assets/Project1/image2.png"
            alt="User Journey Diagram 2"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
          {/* Shine border */}
          <div className="shine-border" />
        </div>
      </section>

      {/* Key Insights */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Key Insights</h2>
        <p style={styles.paragraph}>
          Through user research, we identified several key pain points and behaviors:
        </p>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Preparing and organizing files before building workflows
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Repeatedly testing workflows to verify behavior
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Troubleshooting errors without clear system feedback
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Difficulty navigating complex automation interfaces
          </li>
        </ul>
      </section>

      {/* Structuring navigation */}
      <section style={styles.section}>
        <p style={{ ...styles.paragraph, fontWeight: 600, marginBottom: "12px" }}>
          Structuring the product for intuitive navigation
        </p>
        <p style={styles.paragraph}>
          Once the pain points across different user groups became clear, the next step was to design a structure that could support the workflow creation process while keeping the platform easy to navigate. The goal was to establish an information architecture that allows users to move smoothly across different parts of the product while building and managing workflows.
        </p>
        <p style={styles.paragraph}>
          To explore this, I represented each key information component of the product using cards and mapped multiple possible structures for how these elements could be organized. I sketched four different architectural approaches to evaluate different navigation patterns within the same platform. After reviewing these structures with the team and gathering cross-functional feedback, we aligned on the architecture below as the most intuitive direction to move forward with.
        </p>
        <p style={{ ...styles.paragraph, fontWeight: 600, marginTop: "32px", marginBottom: "12px" }}>
          What this helped achieve
        </p>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Simplified navigation across complex workflow components
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Clear separation of building, testing, and monitoring stages
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Scalable structure for future features
          </li>
        </ul>
      </section>

      {/* Information Architecture */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Information Architecture</h2>
        <img
          src="/src/assets/Project1/image3.png"
          alt="Information Architecture"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        />
        <p style={{ ...styles.paragraph, fontWeight: 600, marginTop: "32px", marginBottom: "12px" }}>
          Exploring multiple interface possibilities
        </p>
        <p style={styles.paragraph}>
          After defining the information architecture, I decomposed the structure into individual screens and interaction components required for the product.
        </p>
        <p style={styles.paragraph}>
          I explored these concepts through rapid pen-and-paper sketching, allowing me to quickly test multiple layout and interaction ideas without the constraints of digital tools. This divergence phase helped generate a wide range of possibilities before narrowing down to the most promising directions.
        </p>
        <p style={styles.paragraph}>
          The sketches were later reviewed through team critiques where we evaluated the concepts and selected the approach that best supported the workflow-building experience.
        </p>
        <p style={{ ...styles.paragraph, fontWeight: 600, marginTop: "32px", marginBottom: "12px" }}>
          What this helped achieve
        </p>
        <ul style={styles.bulletList}>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Rapid exploration of multiple interface directions
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Early validation of layout and interaction patterns
          </li>
          <li style={styles.bulletItem}>
            <span style={styles.bulletDot}></span>
            Alignment with the team before moving into wireframing
          </li>
        </ul>
      </section>

      {/* Ideation Sketch */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ideation Sketch</h2>
        <img
          src="/src/assets/Project1/image4.png"
          alt="Ideation Sketch"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px",
          }}
        />
      </section>

      {/* Frameworks Design and Testing */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Frameworks Design & Testing</h2>
        <img 
          src="/src/assets/Project1/image5.png" 
          alt="Frameworks Design & Testing" 
          style={{ 
            width: "100%", 
            height: "auto", 
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px"
          }} 
        />
      </section>

      {/* Wireframing */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Wireframing</h2>
        <img 
          src="/src/assets/Project1/image6.png" 
          alt="Wireframing" 
          style={{ 
            width: "100%", 
            height: "auto", 
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px"
          }} 
        />
      </section>

      {/* Final Designs */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Final Designs</h2>
        <img
          src="/src/assets/Project1/image7.png" 
          alt="Final Designs" 
          style={{ 
            width: "100%", 
            height: "auto", 
            borderRadius: "0",
            marginTop: "32px",
            marginBottom: "16px"
          }} 
        />
      </section>


      <div style={styles.divider}></div>
    </>
  );
};

export default CaseStudyContent;
