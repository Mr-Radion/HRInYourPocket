import React from 'react'
import LandingHeader from '../../components/landingJobSeeker/LandingHeader';
import LandinFormFeedback from '../../components/landingJobSeeker/FormFeedback';
import LandingFooter from '../../components/landingJobSeeker/LandingFooter';

function index() {
  return (
    <div className="landing-container">
      <LandingHeader />
      <LandinFormFeedback />
      <LandingFooter />
    </div>
  )
}

export default index
