import React from 'react'
import TopBar from '../Components/Shared/TopBar'
import Footer from '../Components/Shared/Footer'
import CustomSteps from '../Components/ui/CustomSteps'

const TutorSignupScreen = () => {
  return (
    <>
      <section>
        <div className='py-[25px] md:py-[60px] px-0 sm:px-[24px] lg:px-[60px] contain'>
          <div>
            <CustomSteps />
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorSignupScreen
