import DashboardProfileCard from '../../Components/Shared/DashboardProfileCard'
import {
  ProfileCardEditor2,
  StudentCardData_INFO,
  InstructionCardData_INFO,
} from '../../Static/DashboardProfileCardData'

const StudentProfile = () => {
  return (
    <div className='justify-center rounded-[30px] flex flex-col px-0 py-[15px] md:py-[40px] md:px-[50px]'>
      <div className='flex gap-[24px] lg:gap-[40px] flex-col'>
        <DashboardProfileCard
          heading={'Information'}
          btnText={''}
          wrapperHeight={'h-auto'}
          sectionHeading={''}
          profileSection={false}
          sectionDivider={false}
          sectionExtra={false}
          tableSection={true}
          cardMainClass={'w-full '}
          sectionWidth={'w-full'}
          infoRowSection={false}
          data={InstructionCardData_INFO}
          cardContentClass={'xl:min-w-[170px] sm:whitespace-nowrap'}
          mainButton={false}
        />
      </div>
    </div>
  )
}

export default StudentProfile
