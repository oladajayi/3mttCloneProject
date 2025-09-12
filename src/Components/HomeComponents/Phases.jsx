import React from 'react'
import GroupImage1 from '../../assets/GroupImage1.jpg'
import SingleImage from '../../assets/SingleImage.jpg'

const Phases = () => {
  return (
    <div className="container hero py-5 text-white">
      <div className="row align-items-center gx-5">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h2 className="fw-bold mb-3">300,000 young Nigerians to be equipped in Phases 1 & 2 of 3MTT</h2>
          <p className="lead">
            The first phase of the programme kicked off in December 2023 with 30,000 fellows selected across all 36 states and the FCT. The fellows went through an intense learning journey that included self-paced online courses and physical applied learning sessions, executed in partnership with 120+ organizations.
          </p>
          
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={GroupImage1}
            alt="3MTT Hero"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        
        <div className="col-12 col-lg-6 text-center">
          <img
            src={SingleImage}
            alt="3MTT Hero"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <p className="lead">
           The second phase of the programme will train 270,00 technical talents in three cohorts of 60,000, 90,000 and 120,000 respectively. The 3MTT programme is executed in collaboration with hundreds of applied learning clusters, state governments, development agencies and other key stakeholders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Phases