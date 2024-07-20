import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import starlink from "../../Assets/Projects/starlink.png";
import covid from "../../Assets/Projects/covid.png";
import recipy from "../../Assets/Projects/recipy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starlink}
              isBlog={false}
              title="Starlink Analysis"
              description="EDA project which orchestrates a holistic comparison and assessment of the reliability and performance attributes intrinsic to Wi-Fi, Ethernet, and Starlink networks within the domain of computer networks. This solution seeks to provide clarity by gathering empirical data, conducting systematic data analysis, validate inferences through comparative evaluation, and provide actionable insights to improve network performance in future work."
              ghLink="https://github.com/devbydan/starlink-analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipy}
              isBlog={false}
              title="MyReciPy"
              description="A recipe-based search engine that provides convenience to use the ingredients available, discover new recipe variations, and filter for preferences with ease. The goal is to provide a centralized location for dietary flexibility while reducing food waste, planning, and overall time spent."
              ghLink="https://github.com/devbydan/MyReciPy"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID-19 Data Analysis"
              description="Big Data project used to view quantifiable & statistical COVID-19 data from the World Health Organization and Global Data Change Lab using Apache Spark, Java and PSQL. This system is used to track information about how COVID-19 will spread; its percentages of positive, negative and inconclusive results in regions, countries, etc; predicting trends with live data, and much more."
              ghLink="https://github.com/devbydan/COVID19-Data-Analysis"          
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
