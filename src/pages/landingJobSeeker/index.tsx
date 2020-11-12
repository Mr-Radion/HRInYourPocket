import React from 'react'
import Header from '../../components/landingJobSeeker/LandingHeader';
import FormFeedback from '../../components/landingJobSeeker/FormFeedback';
import LandingNav from '../../components/landingJobSeeker/LandingNav';
import LandingFooter from '../../components/landingJobSeeker/LandingFooter';

function index() {
  return (
    <>
      <LandingNav />
      <Header />
      <FormFeedback />
      <LandingFooter />
    </>
  )
}

export default index
