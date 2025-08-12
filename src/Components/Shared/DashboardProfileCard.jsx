import React from 'react'
import { CustomButton } from '../ui/CustomButton'
import UploadProfile from './UploadProfile'
import InfoRow from './InfoRow'
import TimeSlotGrid from './TimeSlot'
import CustomTable from '../ui/CustomTable'

const DashboardProfileCard = ({
  heading,
  btnText,
  wrapperHeight,
  profileSection,
  calenderSection,
  sectionHeading,
  sectionDivider,
  sectionExtra,
  cardMainClass,
  sectionWidth,
  data,
  cardContentClass,
  tableSection = false,
  infoRowSection = true,
  mainButton = true,
}) => {
  return (
    <div className={`bg-[#EBF5FE] rounded-[30px]  p-[15px] md:p-[24px] ${cardMainClass}`}>
      <div className='head flex justify-between pb-[24px]'>
        <h2>{heading}</h2>
        {mainButton && (
          <CustomButton text={btnText} className={'w-[100px]! h-[42px]! rounded-[50px] py-1.5 px-[30px]'} />
        )}
      </div>
      <div className={`flex gap-[24px] lg:flex-row flex-col ${wrapperHeight}`}>
        {profileSection && (
          <div className='bg-white h-full xl:w-[30%] rounded-[20px] p-[24px] flex flex-col gap-[24px]'>
            <p className='text-[#5183F4] text-[24px] font-semibold'>プロフィール写真</p>
            <UploadProfile
              wrapperClass={'w-[200px] xl:w-[252px] h-[200px] xl:h-[252px] pointer-events-none'}
              imageClass={'w-[90%]  h-[90%]'}
              currentImage={'/demoDashboardUser.svg'}
              profileFrameImage={'/dashboardProfileFrame.svg'}
              profileFrame={true}
            />
          </div>
        )}
        <div className={`bg-white h-full ${sectionWidth} rounded-[20px] p-[24px] flex flex-col gap-[24px]`}>
          <p className='text-[#5183F4] text-[24px] font-semibold'>{sectionHeading}</p>
          <div className='flex flex-col lg:flex-row gap-[25px] xl:gap-[50px]'>
            {infoRowSection && <InfoRow data={data} labelsClass={cardContentClass} />}
            {tableSection && <CustomTable className='w-full!' />}
            {sectionDivider && <div className='xl:h-[245px] border border-[#B1B1B1]'></div>}
            {sectionExtra && (
              <div>
                <p className='text-[#181A20] text-lg xl:text-[22px] font-medium gap-[18px] xl:gap-[24px] flex '>
                  母国語: <span className='text-[#B1B1B1] font-normal'>ウルドゥ</span>
                </p>
              </div>
            )}
          </div>
        </div>
        {calenderSection && (
          <div className='bg-white h-full xl:w-[40%] rounded-[20px] p-[24px] flex flex-col gap-[24px]'>
            <p className='text-[#5183F4] text-[24px] font-semibold'>プロフィール写真</p>
            <TimeSlotGrid
              containerWidth={'w-full'}
              heading={false}
              overflowClass={'overflow-x-auto 2xl:overflow-x-visible'}
              slotGrid={
                'grid-cols-[110px_repeat(7,minmax(20px,1fr))] gap-[18px] md:gap-[10px] lg:gap-[36px] xl:gap-[18px]'
              }
              checkboxGrid={'grid-cols-[110px_repeat(7,minmax(15px,1fr))]'}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardProfileCard
