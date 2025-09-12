import React from 'react'
import AboutImage from '../../assets/AboutImage.png'

const AboutSection = () => {
  return (
   <div className="container py-5 bg-light" id='about-section'>
      <div className="row align-items-center gx-5">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="fw-bold mb-3">The 3MTT</h1>
          <p className="lead">
            The 3 Million Technical Talent (3MTT) programme, a critical part of the Renewed Hope agenda, is aimed at building Nigeria’s technical talent backbone to power our digital economy and position Nigeria as a net talent exporter. The first phase of the programme, executed in collaboration with NITDA, will involve multiple stakeholders including fellows, training providers, partners and placement organisations.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={AboutImage}
            alt="3MTT About Image"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutSection