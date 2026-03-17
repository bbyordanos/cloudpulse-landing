import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./St.css";
import Login from "./components/Login";

import React, { useState } from "react";
function Header({ setShowLogin }) {
  return (
    <Navbar expand="lg" fixed="top" className="head">
      <Container id="head">
        <Navbar.Brand
          href="#home"
          style={{
            fontWeight: "bolder",
            letterSpacing: "2px",
            marginRight: "300px",
            marginLeft: "50px",
            fontSize: "1.5em",
          }}
          onClick={() => {
            document.getElementById("body").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          CLOUDPULSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                fontSize: "1.1em",
              }}
              onClick={() => {
                document.getElementById("built").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                fontSize: "1.1em",
              }}
              onClick={() => {
                document.getElementById("global").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Reviwes
            </Nav.Link>
            <Nav.Link
              href="#link"
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                fontSize: "1.1em",
              }}
              onClick={() => {
                document.getElementById("ghos").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Security
            </Nav.Link>
            <Nav.Link
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                marginLeft: "400px",
                fontSize: "1.1em",
                cursor: "pointer",
              }}
              onClick={() => setShowLogin(true)}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const Body = () => {
  const [moveCount, setMoveCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [caught, setCaught] = useState(false);

  const handleMouseEnter = () => {
    if (moveCount < 5 && !caught) {
      const randomX = Math.floor(Math.random() * 400 - 200);
      const randomY = Math.floor(Math.random() * 300 - 150);

      setPosition({ x: randomX, y: randomY });
      setMoveCount((prev) => prev + 1);
    }
  };

  const handleClick = () => {
    if (moveCount >= 5 && !caught) {
      setCaught(true);
      alert("Success! Trial Started.");
    }
  };

  return (
    <div className="c" id="body" style={{ display: "flex", height: "634px" }}>
      <div className="b" style={{ width: "50%" }}>
        <div
          className="one"
          style={{
            fontWeight: "bold",
            fontSize: "4em",
            marginLeft: "80px",
            marginTop: "110px",
          }}
        >
          Build fast. Catch us if you can.
        </div>

        <div
          className="two"
          style={{
            marginLeft: "80px",
            marginTop: "10px",
            fontSize: "1.4em",
          }}
        >
          CloudPulse provides high-performance infrastructure for teams that
          move fast. Scale your next big idea with our elusive, ultra-low
          latency network.
        </div>

        <Button
          type="button"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          style={{
            color: "#ffffff",
            backgroundColor: "#0a0a2a",
            marginLeft: "80px",
            marginTop: "15px",
            fontSize: "1.4em",
            padding: "15px 40px",
            borderRadius: "10px",
            fontWeight: "bold",
            position: "relative",
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: "transform 0.2s ease",
          }}
        >
          {caught ? "Caught Me!" : "Start Free Trial"}
        </Button>
      </div>

      <div
        className="float-image"
        style={{ marginLeft: "130px", marginTop: "120px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60"
          alt="My Image"
          style={{
            width: "450px",
            height: "350px",
            borderRadius: "40px",
          }}
        />
      </div>
    </div>
  );
};
const Built = () => {
  return (
    <div className="d" id="built">
      <div className="e">Built for Modern Tech</div>
      <div className="grid" style={{ display: "flex" }}>
        <div className="native" style={{ width: "20%", marginLeft: "200px" }}>
          <div
            className="f"
            style={{ fontSize: "1.7em", fontWeight: "bold", color: "white" }}
          >
            Native NVMe
          </div>
          <div className="g" style={{ fontSize: "1.1em", marginTop: "20px" }}>
            Experience blazing fast I/O performance with pure NVMe SSD storage
            on all instances.
          </div>
        </div>
        <div className="golbal" style={{ width: "20%", marginLeft: "100px" }}>
          <div
            className="h"
            style={{ fontSize: "1.7em", fontWeight: "bold", color: "white" }}
          >
            Global Edge
          </div>
          <div className="i" style={{ fontSize: "1.1em", marginTop: "20px" }}>
            Deliver content statically or dynamically from 40+ global locations
            instantly.
          </div>
        </div>
        <div className="auto" style={{ width: "20%", marginLeft: "100px" }}>
          <div
            className="j"
            style={{ fontSize: "1.7em", fontWeight: "bold", color: "white" }}
          >
            Auto-Scale
          </div>
          <div className="k" style={{ fontSize: "1.1em", marginTop: "20px" }}>
            Our network adapts to your traffic spikes in real-time, completely
            serverless.
          </div>
        </div>
      </div>
    </div>
  );
};
const Global = () => {
  const boxes = [
    {
      className: "uptime",
      name: "Amanuel T.",
      review:
        "CLOUDPULSE completely transformed our hosting experience. The speed and uptime are incredible. Highly recommended!",
    },
    {
      className: "support",
      name: "Sara M.",
      review:
        "Their customer support is fast and professional. Anytime we had an issue, CLOUDPULSE solved it immediately.",
    },
    {
      className: "edge",
      name: "Daniel K.",
      review:
        "Scaling our traffic during peak times is now effortless. CLOUDPULSE handles everything automatically.",
    },
    {
      className: "simple",
      name: "Hanna L.",
      review:
        "Very simple dashboard and easy deployment process. Perfect for developers and startups.",
    },
    {
      className: "cloud",
      name: "Michael R.",
      review:
        "Reliable, secure, and extremely fast. CLOUDPULSE is the best cloud platform we’ve used so far.",
    },
  ];

  const duplicatedBoxes = [...boxes, ...boxes];

  return (
    <div className="l" id="global">
      <div className="m">What Our Clients Say</div>
      <div className="slider">
        {duplicatedBoxes.map((box, idx) => (
          <div className={box.className} key={idx}>
            <div className="title">{box.name}</div>
            <div className="desc">{box.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Ghost = () => {
  return (
    <div className="ghost" id="ghos">
      <div className="aa">Ghost Security Protocols</div>
      <div className="bb">
        Advanced, invisible threat detection that neutralizes attacks silently.
      </div>
      <button
        className="my-button"
        onMouseEnter={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Active Shield
      </button>
      <div className="cc">© 2026 CloudPulse Inc.</div>
    </div>
  );
};

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Header setShowLogin={setShowLogin} />
      <Body />
      <Built />
      <Global />
      <Ghost />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default App;
