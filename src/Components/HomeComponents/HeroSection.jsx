import React from 'react'
import { Link } from 'react-router-dom';
import HeroBG from '../../assets/HeroBG.gif'


const HeroSection = () => {
  return (
    <div className="container hero py-5 text-white">
      <div className="row align-items-center gx-5">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3">Shaping the Future of Nigeria’s Digital Workforce</h2>
          <p className="lead">
            The 3MTT programme by the Federal Ministry of Communications, Innovation & Digital Economy
            will generate a pipeline of technical talent in line with President Bola Ahmed Tinubu’s vision
            of creating 2 million digital jobs by 2025.
          </p>
          <div className="mt-4">
            <Link to="/about" className="btn btn-primary me-3">
              <span>Read More</span> <i className="fas fa-arrow-right ms-2"></i>
            </Link>
            <Link to="/apply" className="btn btn-outline-secondary">
              <span>Apply Now</span> <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={HeroBG}
            alt="3MTT Hero"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
