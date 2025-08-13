import { Divider } from 'antd'
import React from 'react'
import CustomSelect from '../../CustomSelect'
import { selectOptions } from '../../../../Static/SelectOptions'
import CustomCheckBox from '../../CustomCheckBox'
import CustomInput from '../../CustomInput'
import CustomSlider from '../../CustomSlider'
const FilterDrawerContent = () => {
  return (
    <>
      <div className='bg-[#F7F7F7] rounded-[20px] p-[14px]'>
        <div>
          <div className='flex gap-[16px]'>
            <img src='/filterIcon.svg' alt='filter icon' />
            <p className='text-xl font-medium'>Filter</p>
          </div>
          <Divider />
          <div className='flex justify-between'>
            <p className='text-xl font-medium'>Applied Filters</p>
            <div className='flex items-center'>
              <p className='text-base font-medium text-[#B1B1B1]'>Cancel All</p>
              <img src='/filterCross.svg' alt='filter icon' className='cursor-pointer' />
            </div>
          </div>
          <div className=''>
            <div className='items flex bg-[#5183F4]'>
              Lesson Area <img src='/filterIcon2.svg' alt='' />
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <p className='text-xl font-medium'>Lesson Area</p>
              <CustomSelect
                defaultValue={'Any'}
                options={selectOptions}
                rightIcon={'/select-arrow.svg'}
                height={'h-[58px]!'}
                rounded={'rounded-[10px]'}
                leftIconClassName={'z-10'}
                border={'border-none'}
              />
            </div>
            <div>
              <p className='text-xl font-medium'>Lesson Location</p>
              <CustomSelect
                defaultValue={'Any'}
                options={selectOptions}
                rightIcon={'/select-arrow.svg'}
                height={'h-[58px]!'}
                rounded={'rounded-[10px]'}
                leftIconClassName={'z-10'}
                border={'border-none'}
              />
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <p className='text-xl font-medium'>One-on-one</p>
              <div className='flex'>
                <CustomInput placeholder={'500'} />
                <div className='text-red-500'>-</div>
                <CustomInput placeholder={'3000'} />
              </div>
              <div>
                <CustomSlider />
                <div className='flex justify-between'>
                  <p>min</p>
                  <p>max</p>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <div>
              <p className='text-xl font-medium'>Gender</p>
              <CustomSelect
                defaultValue={'Any'}
                options={selectOptions}
                rightIcon={'/select-arrow.svg'}
                height={'h-[58px]!'}
                rounded={'rounded-[10px]'}
                leftIconClassName={'z-10'}
                border={'border-none'}
              />
            </div>
          </div>
          <Divider />
          <div className='flex flex-col'>
            <CustomCheckBox text={'Beginners Welcome!'} className={'bg-transparent text-xl font-medium'} />
            <CustomCheckBox text={'Beginners Welcome!'} className={'bg-transparent text-xl font-medium'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterDrawerContent
