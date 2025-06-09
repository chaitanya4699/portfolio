import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chaitanya Kumar Reddy Padala </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            I am currently looking for<span className="purple"> opportunities. </span>
            <br />
            I am pursuing <span className="purple">Bachelor's of Technology </span> in 
            <span className="purple"> Computer Science and Engineering  </span> at 
            <span className="purple">  Bennett University. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Chaitanya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
