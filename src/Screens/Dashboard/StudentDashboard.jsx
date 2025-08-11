import React, { useState } from 'react'
import CustomTab from '../../Components/ui/CustomTab'
import TutorProfile from '../../Features/DashboardProfile/TutorProfile'
import TutorEditor from '../../Features/DashboardProfile/TutorEditor'
import { studentTabsOptions } from '../../Static/TabOptions'
import StudentProfile from '../../Features/DashboardProfile/StudentEditor'

const StudentDashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('Purchased History')

  return (
    <section>
      <div className='contain sm:px-[24px] md:px-[60px] py-[30px] md:py-[60px]'>
        <div className='flex justify-center'>
          <CustomTab
            options={studentTabsOptions}
            storageKey='studentDashboardTab'
            defaultValue='Purchased History'
            onChange={setActiveTab}
          />
        </div>
        {activeTab === 'Purchased History' ? <StudentProfile /> : <StudentProfile />}
      </div>
    </section>
  )
}

export default StudentDashboardScreen
