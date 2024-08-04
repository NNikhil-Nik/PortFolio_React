import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "I am Nikhil Varshney",
        "Frontend React Developer",
        "Looking for SDE Roles",
      ],
      typeSpeed: 20,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" >
          <h1 ref={typedRef}></h1>
          <h5>Hello! I'm Nikhil Varshney. I graduated with a B.Tech from Jaypee Institute of Information Technology, Noida. I'm a frontend developer with some experience in backend as well. I love creating user-friendly web applications and solving data structures and algorithms problems. With my skills in design and coding, I aim to create smooth and effective digital experiences.</h5>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" >
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
