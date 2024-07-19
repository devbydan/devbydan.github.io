import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Daniel Murphy </span>
            but people call me <span className="purple"> Dan</span> or <span className="purple"> Danny </span> for short :)
            <br />
            I am currently pursuing a Master's in Computer Science at UC Riverside
            <br />
            My current role is <span className="purple"> Data Scientist </span> for Sunscape Eyewear in Irvine, CA
            <br />
            <br />
            Outside of my professional life, here are some of my prominent hobbies
          </p>
          <ul>
            <li className="about-activity">
            <span className="purple">Martial Arts</span> (Kung Fu, Wing Chun, Jiu-Jitsu)
            </li>
            <li className="about-activity">
            <span className="purple">Attending Conventions</span> (SCaLE, All Things Open, Comic-Con, ...)
            </li>
            <li className="about-activity">
            <span className="purple">Freelance Tutoring</span> (Programming, Mathematics, Science)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The saddest thing in life is wasted talent."{" "}
          </p>
          <footer className="blockquote-footer">A Bronx Tale (1993)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
