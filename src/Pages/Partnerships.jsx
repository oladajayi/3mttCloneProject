import React from "react";
import GroupImage from "../../src/assets/GroupImage1.jpg"
import FellowImage from "../../src/assets/FellowImage.jpg"
import Provider from "../../src/assets/SingleImage.jpg"
import Trainer from "../../src/assets/TrainingProvider.jpg"

const Partnerships = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center"
      style={{
        background: "linear-gradient(135deg, #f0f4f8, #d9e4ec)",
      }}
    >
      <div
        className="bg-white shadow p-5 rounded w-100"
        style={{ maxWidth: "900px" , marginTop: 100,}}
      >
        {/* Header */}
        <h2 className="h4 text-success mb-3">
          Are you an experienced developer? Partner with us!
        </h2>
        <p className="text-muted mb-4">
          We’re building a community of skilled developers and innovators. By
          partnering with us, you’ll have opportunities to collaborate on
          real-world projects, mentor fellows, and contribute to impactful
          solutions. 🚀
        </p>

        {/* Benefits Section with Images */}
        <div className="row text-start align-items-center mb-4">
          <div className="col-md-6 mb-4">
            <img
              src={GroupImage}
              alt="Collaboration"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-success">
              <i className="fa fa-handshake-o me-2"></i> Collaborate
            </h6>
            <p className="text-muted">
              Work with like-minded professionals on projects that matter.
            </p>
          </div>
        </div>

        <div className="row text-start align-items-center mb-4 flex-md-row-reverse">
          <div className="col-md-6 mb-4">
            <img
              src={Provider}
              alt="Mentorship"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-success">
              <i className="fa fa-users me-2"></i> Mentor
            </h6>
            <p className="text-muted">
              Share your expertise by guiding the next generation of tech
              talent.
            </p>
          </div>
        </div>

        <div className="row text-start align-items-center mb-4">
          <div className="col-md-6 mb-4">
            <img
              src={FellowImage}
              alt="Opportunities"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-success">
              <i className="fa fa-briefcase me-2"></i> Opportunities
            </h6>
            <p className="text-muted">
              Access opportunities to grow your professional profile and
              network.
            </p>
          </div>
        </div>

        <div className="row text-start align-items-center mb-4 flex-md-row-reverse">
          <div className="col-md-6 mb-4">
            <img
              src={Trainer}
              alt="Impact"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-success">
              <i className="fa fa-globe me-2"></i> Impact
            </h6>
            <p className="text-muted">
              Contribute to solutions that make a difference in communities.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-4">
          <button className="btn btn-success px-4 py-2">
            <i className="fa fa-paper-plane me-2"></i> Express Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;
