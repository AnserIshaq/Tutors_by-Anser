import React, { useState } from 'react'
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
import TutorProfile from '../../Features/TutorProfile/TutorProfile'
import TutorEditor from '../../Features/TutorProfile/TutorEditor'

const TutorDashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Tutor Profile')

  return (
    <section>
      <div className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px]'>
        <div className='flex justify-center'>
          <CustomTab value={activeTab} onChange={setActiveTab} />
        </div>
        {activeTab === 'Tutor Profile' ? <TutorProfile /> : <TutorEditor />}
      </div>
    </section>
  )
}

export default TutorDashboardScreen
