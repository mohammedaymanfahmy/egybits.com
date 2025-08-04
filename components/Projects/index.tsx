"use client";
import Container from "../Container";
import { Element } from "react-scroll";
import styles from "./Projects.module.sass";
import { projects } from "@/constants/projects";

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
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              {/* Project Image */}
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className={styles.iconText}>{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.content}>
                {/* Project Title */}
                <h3 className={styles.projectTitle}>{project.title}</h3>

                {/* Project Description */}
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className={styles.tags}>
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techTag}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Client */}
                <p className={styles.client}>Client: {project.client}</p>

                {/* View Project Link */}
                <a
                  href={`/projects?project=${project.id}`}
                  className={styles.viewProject}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Want to See More Details?</h3>
            <p className={styles.ctaDescription}>
              Explore our complete portfolio with detailed case studies,
              technologies used, and project outcomes.
            </p>
            <a href="/projects" className={styles.ctaButton}>
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Projects;
