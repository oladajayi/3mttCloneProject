import React from "react";
import TrainingProvider from "../../assets/TrainingProvider.jpg";
import FellowImage from "../../assets/FellowImage.jpg";

const BuildingWorkforce = () => {
  return (
   <div className="container hero py-5 text-white">
  <div className="text-center text-lg-start mb-4 mb-lg-5">
    <h2 className="fw-bold mb-3">Build the workforce of the future</h2>
    <p className="lead">
      We are calling on individuals and training providers across Nigeria to
      apply to the first phase of the 3MTT programme.
    </p>
  </div>

  <div className="row g-4">
    {/* Training Providers Section */}
    <div className="col-12 col-lg-6 text-center">
      <img
        src={TrainingProvider}
        alt="3MTT Training Provider"
        className="img-fluid rounded w-100"
      />
      <h3 className="mt-3">For Training Providers</h3>
      <p>
        Organisations looking to join our pool of training providers to train 3
        million fellows across Nigeria as we design an optimal approach to
        training and placing technical talents.
      </p>
      <button className="btn btn-outline-light">
        SIGN UP <i className="fas fa-arrow-right ms-2"></i>
      </button>
    </div>

    {/* Fellows Section */}
    <div className="col-12 col-lg-6 text-center">
      <img
        src={FellowImage}
        alt="3MTT Fellow"
        className="img-fluid rounded w-100"
      />
      <h3 className="mt-3">For Fellows</h3>
      <p>
        You will receive training in specific technical skills that will empower
        you to be competitive in the local and global technical talent
        marketplace.
      </p>
      <button className="btn btn-outline-light">
        SIGN UP <i className="fas fa-arrow-right ms-2"></i>
      </button>
    </div>
  </div>
</div>

  );
};

export default BuildingWorkforce;
