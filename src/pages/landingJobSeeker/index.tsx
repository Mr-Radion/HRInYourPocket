import React from 'react'
import LandingHeader from '../../components/landingJobSeeker/LandingHeader';
import LandingHowItWorks from '../../components/landingJobSeeker/LandingHowItWorks';
import LandingTariffs from '../../components/landingJobSeeker/landingTariffs';
import LandinFormFeedback from '../../components/landingJobSeeker/FormFeedback';
import LandingFooter from '../../components/landingJobSeeker/LandingFooter';

function index() {
  return (
    <div className="landing-container">
      <LandingHeader />
      <LandingHowItWorks />
      <LandingTariffs />
      <LandinFormFeedback />
      <LandingFooter />
    </div>
  )
}

export default index
