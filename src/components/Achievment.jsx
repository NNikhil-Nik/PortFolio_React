import React from "react";
import achievments from "./data/achievements.json";

const Achievment = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Achievments</h1>
        {achievments.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <img src={`/assets/${data.imageSrc}`} alt="Achievement" />
                </a>
                </div>
                <div className="right">
                  <h2>{data.achievement}</h2>
                  <h5 style={{ color: "yellow" }}>{data.brief}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Achievment;
