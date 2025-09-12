import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Partner = () => {
  return (
    <div
      className=" container hero d-flex flex-column justify-content-center align-items-center p-3 mx-6 mx-auto"
      style={{ backgroundColor: "#085830", color: "white", minHeight: "300px" }}
    >
      <h1 className="h3 fw-bold mb-2 text-center">Come partner with us</h1>
      <p className="mb-3 text-center">
        Funders, Corporates, Placement Organisations & others looking to be part
        of the programme
      </p>

      {/* Link with exact #61CE70 color */}
      <Link
        to="/hire"
        className="d-flex align-items-center gap-2 px-3 py-2 rounded text-decoration-none fw-semibold"
        style={{
          backgroundColor: "#61CE70",
          color: "white",
        }}
      >
        PARTNER WITH US
        {/* Arrow inside a white circle */}
        <span
          className="d-flex align-items-center justify-content-center rounded-circle bg-white"
          style={{ width: "30px", height: "30px", color: "#085830" }}
        >
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </div>
  );
};

export default Partner;
