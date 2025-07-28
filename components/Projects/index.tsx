import Container from "../Container";
import { Element } from "react-scroll";
import styles from "./Projects.module.sass";

// Number of project placeholder boxes to display
const projectBoxes = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

type Props = {};

const Projects = ({}: Props) => {
  return (
    <Element className={styles.projects} name="projects">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>
            Discover our portfolio of innovative solutions that drive business
            growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className={styles.grid}>
          {projectBoxes.map((box) => (
            <div key={box.id} className={styles.card}>
              {/* Project Image Placeholder */}
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.iconContainer}>
                    <div className={styles.iconBox}>
                      <svg
                        className={styles.icon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className={styles.iconText}>IMG</p>
                  </div>
                </div>
              </div>

              {/* Project Content Placeholder */}
              <div className={styles.content}>
                {/* Title Placeholder */}
                <div className={styles.titlePlaceholder}></div>

                {/* Description Placeholder */}
                <div className={styles.description}>
                  <div className={styles.descLine}></div>
                  <div className={`${styles.descLine} ${styles.short}`}></div>
                </div>

                {/* Technology Tags Placeholder */}
                <div className={styles.tags}>
                  <div className={`${styles.tag} ${styles.small}`}></div>
                  <div className={`${styles.tag} ${styles.medium}`}></div>
                </div>

                {/* View Project Link Placeholder */}
                <div className={styles.actionPlaceholder}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Project?</h3>
            <p className={styles.ctaDescription}>
              Let&apos;s discuss how we can bring your ideas to life with
              cutting-edge technology.
            </p>
            <button className={styles.ctaButton}>Get Started</button>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Projects;
