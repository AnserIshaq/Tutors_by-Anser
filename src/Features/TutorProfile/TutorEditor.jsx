import DashboardProfileCard from '../../Components/Shared/DashboardProfileCard'
import {
ProfileCardEditor
} from '../../Static/DashboardProfileCardData'

const TutorEditor = () => {
  return (
    <div className='justify-center rounded-[30px] flex flex-col px-0 py-[15px] md:py-[40px] md:px-[50px]'>
      <div className='flex gap-[24px] lg:gap-[40px] flex-col'>
        <DashboardProfileCard
          heading={'アカウント情報'}
          btnText={'編集'}
          wrapperHeight={'h-auto lg:h-[85%]'}
          sectionHeading={'詳細'}
          profileSection={true}
          sectionDivider={false}
          sectionExtra={false}
          cardMainClass={'xl:h-[472px] w-full'}
          sectionWidth={'xl:w-[70%] w-full'}
          data={ProfileCardEditor}
          cardContentClass={'lg:min-w-[140px] xl:min-w-[170px] sm:whitespace-nowrap'}
        />
      </div>
    </div>
  )
}

export default TutorEditor
