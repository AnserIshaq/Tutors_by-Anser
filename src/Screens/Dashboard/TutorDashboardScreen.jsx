import React from 'react'
import CustomTab from '../../Components/ui/CustomTab'
import { CustomButton } from '../../Components/ui/CustomButton'
import UploadProfile from '../../Components/Shared/UploadProfile'
import { Divider } from 'antd'
import DashboardProfileCard from '../../Components/Shared/DashboardProfileCard'
import {
  BackgroundCardData_INFO,
  FeeCardData_INFO,
  ProfileCardData_INFO,
  InstructionCardData_INFO,
  ScheduleCardData_INFO,
  ContactCardData_INFO,
} from '../../Static/DashboardProfileCardData'

const TutorDashboardScreen = () => {
  return (
    <section>
      <div className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px]'>
          <div className='flex justify-center'>
            <CustomTab />
          </div>
        <div className='justify-center rounded-[30px] flex flex-col px-0 py-[15px] md:py-[50px] md:px-[50px]'>
          <div className='flex gap-[24px] lg:gap-[40px] flex-col'>
            <DashboardProfileCard
              heading={'個人詳細'}
              btnText={'編集'}
              wrapperHeight={'h-auto lg:h-[85%]'}
              sectionHeading={'個人情報'}
              profileSection={true}
              sectionDivider={true}
              sectionExtra={true}
              cardMainClass={'xl:h-[472px] w-full'}
              sectionWidth={'xl:w-[70%] w-full'}
              data={ProfileCardData_INFO}
              cardContentClass={'xl:min-w-[100px] sm:whitespace-nowrap'}
            />
            <div className='flex gap-[24px] lg:flex-row flex-col'>
              <DashboardProfileCard
                heading={'背景情報'}
                btnText={'編集'}
                wrapperHeight={'h-auto lg:h-[80%]'}
                sectionHeading={'詳細'}
                profileSection={false}
                sectionDivider={false}
                sectionExtra={false}
                cardMainClass={'w-full lg:w-[50%]'}
                sectionWidth={'w-full'}
                data={BackgroundCardData_INFO}
                cardContentClass={'xl:min-w-[100px] sm:whitespace-nowrap'}
              />
              <DashboardProfileCard
                heading={'レッスン料金'}
                btnText={'編集'}
                wrapperHeight={'h-auto lg:h-[80%]'}
                sectionHeading={'レッスン料金体系'}
                profileSection={false}
                sectionDivider={false}
                sectionExtra={false}
                cardMainClass={'w-full lg:w-[50%]'}
                sectionWidth={'w-full'}
                data={FeeCardData_INFO}
                cardContentClass={'xl:min-w-[200px] sm:whitespace-nowrap'}
              />
            </div>
            <DashboardProfileCard
              heading={'指導情報'}
              btnText={'編集'}
              wrapperHeight={'h-auto lg:h-[85%]'}
              sectionHeading={'詳細'}
              profileSection={false}
              sectionDivider={false}
              sectionExtra={false}
              cardMainClass={'w-full'}
              sectionWidth={'w-full'}
              data={InstructionCardData_INFO}
              cardContentClass={'xl:min-w-[170px] sm:whitespace-nowrap'}
            />
            <div>
              <DashboardProfileCard
                heading={'指導情報'}
                btnText={'編集'}
                wrapperHeight={'h-auto lg:h-[80%] xl:flex-row! flex-col!'}
                sectionHeading={'詳細'}
                profileSection={false}
                calenderSection={true}
                sectionDivider={false}
                sectionExtra={false}
                cardMainClass={'xl:h-[472px] w-full'}
                sectionWidth={'w-full  xl:w-[60%]'}
                data={ScheduleCardData_INFO}
                cardContentClass={'xl:min-w-[200px] sm:whitespace-nowrap'}
              />
            </div>
            <DashboardProfileCard
              heading={'連絡先'}
              btnText={'編集'}
              wrapperHeight={'h-auto lg:h-[85%]'}
              sectionHeading={'詳細'}
              profileSection={false}
              sectionDivider={false}
              sectionExtra={false}
              cardMainClass={'w-full'}
              sectionWidth={'w-full'}
              data={ContactCardData_INFO}
              cardContentClass={'xl:min-w-[180px] sm:whitespace-nowrap'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorDashboardScreen
