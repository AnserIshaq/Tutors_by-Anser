import React from 'react'
import CustomInput from '../../Components/ui/CustomInput'
import CustomCheckBox from '../../Components/ui/CustomCheckBox'
import CustomSelect from '../../Components/ui/CustomSelect'
import { selectOptions } from '../../Static/SelectOptions'
import TimeSlotGrid from '../../Components/Shared/TimeSlot'

const BecomeTutorStep5 = () => {
  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>レッスンエリア＆日程</h1>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>日本語講師歴</p>
          <div className='mb-[30px]'>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'なし'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
          <div className='mb-[10px]'>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'なし'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
          <div className='flex gap-[10px]'>
            <img src='/plusIcon.svg' alt='icon' className='cursor-pointer' />
            <span>他の言語を追加する</span>
          </div>
        </div>
        <TimeSlotGrid/>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>レッスンのタイミング</p>
          <div className='flex flex-col gap-[10px]'>
            <CustomCheckBox text={'カフェ'} className={'font-normal'} />
            <CustomCheckBox text={'自宅'} className={'font-normal'} />
            <CustomCheckBox text={'生徒宅'} className={'font-normal'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>オンラインレッスン</p>
          <div className='flex flex-col md:flex-row gap-[50px]'>
            <CustomCheckBox text={'可能'} className={'font-normal'} />
            <CustomCheckBox text={'不可能'} className={'font-normal'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeTutorStep5
