import React from 'react'
import CustomInput from '../../Components/ui/CustomInput'
import CustomRadio from '../../Components/ui/CustomRadio'
import CustomSelect from '../../Components/ui/CustomSelect'
import { selectOptions } from '../../Static/SelectOptions'
import UploadProfile from '../../Components/Shared/UploadProfile'

const BecomeTutorStep1 = () => {

  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>個人情報</h1>
      <div className='profile flex flex-col'>
        <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>写真</p>
        <UploadProfile/>
      </div>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput
              className={'w-full'}
              inputClassName={'bg-white border-none w-full!'}
              placeholder={'Last (姓)'}
            />
            <CustomInput
              className={'w-full'}
              inputClassName={'bg-white border-none w-full!'}
              placeholder={'First (名)'}
            />
          </div>
          <p className='text-[14px] text-[#B1B1B1] font-normal pt-[10px]'>
            フルネームはプロフィールに表示されません。英語のファーストネームのみ表示されます。
          </p>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'Last (姓)'} />
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'First (名)'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'Last (姓)'} />
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'First (名)'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <div>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'Last (姓)'} />
          </div>
        </div>
        <div>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>名前（英語)</p>
          <CustomRadio />
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
        <div className='inputs flex flex-col lg:flex-row gap-[24px]'>
          <div className='w-full'>
            <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>流暢に話せる言語</p>
            <div className='flex gap-[24px] flex-col '>
              <CustomSelect
                selectClassName={'h-[54px]! border border-none'}
                options={selectOptions}
                defaultValue={'日本'}
                rightIcon={'/select-arrow.svg'}
              />
              <CustomSelect
                selectClassName={'h-[54px]! border border-none'}
                options={selectOptions}
                defaultValue={'日本'}
                rightIcon={'/select-arrow.svg'}
              />
            </div>
          </div>
          <div className='w-full'>
            <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>レベル</p>
            <div className='flex gap-[24px] flex-col '>
              <CustomSelect
                selectClassName={'h-[54px]! border border-none'}
                options={selectOptions}
                defaultValue={'日本'}
                rightIcon={'/select-arrow.svg'}
              />
              <CustomSelect
                selectClassName={'h-[54px]! border border-none'}
                options={selectOptions}
                defaultValue={'日本'}
                rightIcon={'/select-arrow.svg'}
              />
            </div>
          </div>
        </div>
        <div className='flex gap-[10px]'>
          <img src='/plusIcon.svg' alt='icon' className='cursor-pointer' />
          <span>他の言語を追加する</span>
        </div>
      </div>
    </>
  )
}

export default BecomeTutorStep1
