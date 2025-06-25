import React from "react";

const projects = [
  {
    title: "Automated Legal Document Review",
    description:
      "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
    image: "images/project-1.jpg",
    delay: "0s",
    link: "project-single.html",
  },
  {
    title: "Real-Time Financial Risk Detection",
    description:
      "Leverages AI and natural language processing to quickly analyze, classify, and extract key information from legal documents—saving time, reducing errors, and improving compliance.",
    image: "images/project-2.jpg",
    delay: "0.2s",
    link: "project-single.html",
  },
];

const Projects = () => {
  return (
    <div className="our-project">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our project</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Showcasing our AI solutions & <span>success project</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="project-item wow fadeInUp"
                data-wow-delay={project.delay}
              >
                <div className="project-item-content">
                  <h3>
                    <a href={project.link}>{project.title}</a>
                  </h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-image">
                  <a href={project.link} data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={project.image} alt={project.title} />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
