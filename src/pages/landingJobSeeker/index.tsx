import React from 'react'
import LandingHeader from '../../components/landingJobSeeker/LandingHeader';
import LandingHowItWorks from '../../components/landingJobSeeker/LandingHowItWorks';
import LandinFormFeedback from '../../components/landingJobSeeker/FormFeedback';
import LandingFooter from '../../components/landingJobSeeker/LandingFooter';

function index() {
  return (
    <div className="landing-container">
      <LandingHeader />
      <LandingHowItWorks />
      <LandinFormFeedback />
      <LandingFooter />
    </div>
  )
}

export default index
