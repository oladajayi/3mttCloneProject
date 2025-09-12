import React, { useState } from "react";
import FellowImage from "../../assets/RegisterImages/FellowImage.png";
import AlcImage from "../../assets/RegisterImages/AlcImage.png";
import GovDevImage from "../../assets/RegisterImages/GovDevImage.png";

const Register = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const RegisterAs = [
    {
      img: FellowImage,
      portfolio: "As a Fellow",
      details: "I want to register to learn new tech skills",
    },
    {
      img: AlcImage,
      portfolio: "As an Applied Learning Cluster",
      details: "I am registering as an organization",
    },
    {
      img: GovDevImage,
      portfolio: "As a Dev in Government",
      details: "Registering as a government developer",
    },
  ];

  return (
    <>
      <div className=" p-5" style={{background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)"}}>
        <h1>Register to Join 3MTT</h1>
        <p className="m-4">Hurray, get ready to learn new skills 👋</p>
        <div className="d-flex justify-content-between align-items-start flex-wrap mt-5">
          {RegisterAs.map((personality, index) => (
            <div
              key ={index + 1}
              className="text-center mx-2 flex-fill border rounded shadow-sm"
              style={{ minWidth: "280px", maxWidth: "320px" }} // keeps cards consistent
            >
              <img
                src={personality.img}
                alt={personality.portfolio}
                style={{ width: "100%", height: "auto" }}
                className="mb-3"
              />
              <h5>{personality.portfolio}</h5>
              <div className="d-flex justify-content-between align-items-start p-3">
                <p className="mb-0">{personality.details}</p>
                <button
                  className={`btn ms-2 ${
                    activeIndex === index
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <i
                    className="fa fa-arrow-down"
                    style={{ transform: "rotate(-45deg)" }}
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show Next button only when one card is active */}
      {activeIndex !== null && (
        <div className="text-center">
          <button className="btn btn-success m-4 p-2" style={{ width: "15%" }}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Register;
