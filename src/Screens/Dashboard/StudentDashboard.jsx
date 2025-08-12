import React, { useState } from 'react'
import CustomTab from '../../Components/ui/CustomTab'
import { studentTabsOptions } from '../../Static/TabOptions'
import StudentEditor from '../../Features/DashboardProfile/StudentEditor'
import StudentProfile from '../../Features/DashboardProfile/StudentProfile'

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
        {activeTab === 'Purchased History' ? <StudentProfile /> : <StudentEditor />}
      </div>
    </section>
  )
}

export default StudentDashboardScreen
