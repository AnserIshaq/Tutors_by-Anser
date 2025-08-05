import React from 'react'
import { selectOptions } from '../../Static/SelectOptions'
import CustomSelect from '../ui/CustomSelect'
import CustomInput from '../ui/CustomInput'
const BecomeTutorStep2 = () => {
  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>背景情報</h1>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'日本'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'日本'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'Last (姓)'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'日本'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeTutorStep2
