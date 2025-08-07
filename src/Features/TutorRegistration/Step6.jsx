import React from 'react'
import CustomInput from '../../Components/ui/CustomInput'
import CustomTextArea from '../../Components/ui/CustomTextArea'
import CustomCheckBox from '../../Components/ui/CustomCheckBox'

const BecomeTutorStep6 = () => {
  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>連絡先</h1>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>住所</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none w-full!'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>住所</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none w-full!'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>最寄駅</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none w-full!'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>メールアドレス</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput
              className={'w-full'}
              inputClassName={'bg-white border-none w-full!'}
              placeholder={'idenbrid@gmail.com'}
            />
          </div>
          <div className='flex gap-[10px] mt-[10px]'>
            <img src='/plusIcon.svg' alt='icon' className='cursor-pointer' />
            <span>他のメールアドレスを追加する</span>
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>電話番号</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none w-full!'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>趣味</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none w-full!'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>自己紹介</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomTextArea
              className={'w-full border-none bg-white p-[15px] h-[130px]'}
              inputClassName={'bg-white border-none w-full!'}
              placeholder={''}
            />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>自己紹介 (英語)</p>
          <div className='flex flex-col lg:flex-row w-full gap-[24px]'>
            <CustomTextArea
              className={'w-full border-none bg-white p-[15px] h-[130px]'}
              inputClassName={'bg-white border-none w-full!'}
              placeholder={''}
            />
          </div>
        </div>
          <div className='flex flex-col gap-[10px]'>
            <CustomCheckBox text={'利用規約に同意します'} className={'font-normal'} />
        </div>
          <p className='text-[14px] text-[#B1B1B1] font-normal'>
            住所、郵便番号、メールアドレス、電話番号はプロフィールに表示されません。
          </p>
      </div>
    </>
  )
}

export default BecomeTutorStep6
