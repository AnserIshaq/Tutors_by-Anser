import DashboardProfileCard from '../../Components/Shared/DashboardProfileCard'
import { ProfileCardEditor2, StudentCardData_INFO } from '../../Static/DashboardProfileCardData'

const StudentEditor = () => {
  return (
    <div className='justify-center rounded-[30px] flex flex-col px-0 py-[15px] md:py-[40px] md:px-[50px]'>
      <div className='flex gap-[24px] lg:gap-[40px] flex-col'>
        <div className='flex gap-[24px] lg:flex-row flex-col'>
          <DashboardProfileCard
            heading={'Account Information'}
            btnText={'Edit'}
            wrapperHeight={'h-auto'}
            sectionHeading={'Details'}
            profileSection={false}
            sectionDivider={false}
            sectionExtra={false}
            cardMainClass={'w-full lg:w-[50%] h-full'}
            sectionWidth={'w-full'}
            data={ProfileCardEditor2}
            cardContentClass={'xl:min-w-[100px] sm:whitespace-nowrap'}
          />
          <DashboardProfileCard
            heading={'User Information'}
            btnText={'Edit'}
            wrapperHeight={'h-auto'}
            sectionHeading={'Details'}
            profileSection={false}
            sectionDivider={false}
            sectionExtra={false}
            cardMainClass={'w-full lg:w-[50%] h-full'}
            sectionWidth={'w-full'}
            data={StudentCardData_INFO}
            cardContentClass={'xl:min-w-[200px] sm:whitespace-nowrap'}
          />
        </div>
      </div>
    </div>
  )
}

export default StudentEditor
