import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buildings from "../../Assets/Projects/buildings.png";
import editor from "../../Assets/Projects/editor.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import portfolio from "../../Assets/Projects/portfolio.png";

import todo from "../../Assets/Projects/todo.png";
import organic from "../../Assets/Projects/organic.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio to share my skills and knowledge with recruiters. 
              Build with react.js, Node.js, express.js and CSS3. 
              Have sections like about, skills, projects and resume which allows to view my bio."
              ghLink="https://github.com/ChaitanyaEmani/portfolio"
              demoLink="https://my-portfolio-theta-rust-28.vercel.app/"
            />
          </Col>
          
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="User Management System"
              description="The User-Management-System project is a web application for managing users.
               It uses Node.js, Express, and MongoDB, and includes features for adding, editing, and deleting users."
              ghLink="https://github.com/ChaitanyaEmani/User-Management-System"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>" */}
            

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildings}
              isBlog={false}
              title="Buildings design"
              description="This website showcases innovative building designs. It highlights services such as architecture, interior design, and garden and outdoor planning.
The site features an overview of completed projects, details the company’s working process, and introduces the team of experts. 
It aims to provide experience-driven excellence in architectural services."
              ghLink="https://github.com/ChaitanyaEmani/buildings-design"
              demoLink="https://website-emani-chaitanyas-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={organic}
              isBlog={false}
              title="Organic Products"
              description="Developed a visually appealing frontend for an organic product website, delivering 90% better user experience.
              This project enhances and promotes the organic products to save our health."
              ghLink="https://github.com/ChaitanyaEmani/Ecommerce"
              demoLink="https://organic-product.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Image Editor"
              description="This project is designed to edit the images. I have added several functionalities 
              like rotate, flip, blur, emboss, edge enhance, crop, resize, and some sliders like Brightness, contrast, Sharpness and Color in the project to edit our images."
              ghLink="https://github.com/ChaitanyaEmani/Image-Editor/blob/main/imageditor.py"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="This project aims to develop a Netflix clone using HTML and CSS. The project includes a header section with a navigation bar, a feature section highlighting key features, an FAQ section for essential information, and a footer with contact details and links. The result is a highly interactive website that aims to improve user experience by 10%."
              ghLink="https://github.com/ChaitanyaEmani/Netflix"
              demoLink="https://netflix-clone-umber-three.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="This project is a web application for managing tasks.  It allows users to add, edit, and delete tasks using HTML, CSS, and JavaScript.
              The HTML includes input fields and buttons, while JavaScript handles task operations through DOM manipulation and event listeners."
              ghLink="https://github.com/ChaitanyaEmani/To-Do-List"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
