import React from 'react'
import training from './data/Training.json'

const Training = () => {
  return (
    <>
      <div className="container training" id="training">
        <h1>Training</h1>
        <div className="training-container">
          {training.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="tra-items text-center my-4"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="left">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right">
                    <h2>{data.role}</h2>
                    <h4>
                      <span style={{ color: "yellowgreen" }}>
                        {data.startDate} {data.endDate}
                      </span>{" "}
                      <span style={{ color: "yellow" }}>{data.location}</span>
                    </h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Training
