import React, { useState, useEffect } from 'react'
import BecomeTutorStep1 from '../../Features/TutorRegistration/Step1'
import { CustomButton } from './CustomButton'
import StepBar from '../Shared/StepBar'
import StepCircularBar from '../Shared/StepCircularBar'
import BecomeTutorStep2 from '../../Features/TutorRegistration/Step2'
import BecomeTutorStep3 from '../../Features/TutorRegistration/Step3'
import BecomeTutorStep4 from '../../Features/TutorRegistration/Step4'
import BecomeTutorStep5 from '../../Features/TutorRegistration/Step5'
import BecomeTutorStep6 from '../../Features/TutorRegistration/Step6'

const stepLabels = [
  '1. 個人情報',
  '2. 背景情報',
  '3. レッスン料金',
  '4. 指導情報',
  '5. レッスンエリア＆日程',
  '6. 連絡先',
]

const stepComponents = [
  <BecomeTutorStep1 />,
  <BecomeTutorStep2 />,
  <BecomeTutorStep3 />,
  <BecomeTutorStep4 />,
  <BecomeTutorStep5 />,
  <BecomeTutorStep6 />,
]

const CustomSteps = () => {
  // Get step from query param in URl
  const getStepFromURL = () => {
    const params = new URLSearchParams(window.location.search)
    console.log('params', params)
    const step = parseInt(params.get('tutorStep'))
    console.log('params step', step)

    return isNaN(step) || step < 0 || step >= stepLabels.length ? 0 : step
  }
  const [currentStep, setCurrentStep] = useState(getStepFromURL)

  const updateStepInURL = (step) => {
    const newUrl = `?tutorStep=${step}`
    window.history.pushState({}, '', newUrl)
    setCurrentStep(step)
  }

  const next = () => {
    if (currentStep < stepLabels.length - 1) {
      updateStepInURL(currentStep + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      updateStepInURL(currentStep - 1)
    }
  }
  useEffect(() => {
    const onPopState = () => {
      const step = getStepFromURL()
      setCurrentStep(step)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <div className='px-[16px] lg:px-0'>
      {/* Step bars for large screens */}
      <div className='lg:mb-[60px]'>
        <div className='hidden lg:flex justify-between'>
          <StepBar stepLabels={stepLabels} currentStep={currentStep} />
        </div>
      </div>

      {/* Step bars for small screens */}
      <div className='flex justify-between lg:hidden flex-row items-center gap-6 lg:mt-8'>
        <StepCircularBar stepLabels={stepLabels} currentStep={currentStep} />
      </div>

      {/* Step content */}
      <div className='bg-[#EBF5FE] px-[15px] md:px-[50px] py-[30px] md:py-[50px] rounded-[30px] gap-[50px] mt-8'>
        <div className='max-w-[718px] mx-auto w-full'>
          {stepComponents[currentStep]}

          <div className='mt-6 flex justify-between gap-[10px]'>
            {currentStep > 0 ? (
              <CustomButton
                onClick={prev}
                className='h-[54px]! w-[150px]! rounded-[50px] py-[17px] px-[38px] bg-[#EBF5FE] border border-[#5183F4]! text-[#5183F4]!'
                text={'戻る'}
              />
            ) : (
              <div /> // Placeholder
            )}

            {currentStep < stepLabels.length - 1 ? (
              <CustomButton
                onClick={next}
                className='h-[54px]! w-[150px]! rounded-[50px] py-[17px] px-[38px]'
                text={'次'}
              />
            ) : (
              <CustomButton
                onClick={() => alert('done step 1')}
                className='h-[54px]! w-[150px]! rounded-[50px] py-[17px] px-[38px]'
                text={'Done'}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSteps
