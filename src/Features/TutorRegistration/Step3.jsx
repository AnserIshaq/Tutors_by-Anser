import CustomCheckBox from '../../Components/ui/CustomCheckBox'
import CustomInput from '../../Components/ui/CustomInput'

const BecomeTutorStep3 = () => {
  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>レッスン料金</h1>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>レッスン料金体系</p>
          <p className='text-[16px] text-[#181A20] font-medium mb-[10px]'>マンツーマン (60分/生徒)</p>
          <div>
            <CustomInput className={'w-full'} inputClassName={'bg-white border-none'} placeholder={'550 円 / 学生'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <div className='flex flex-col md:flex-row gap-[30px]'>
            <CustomCheckBox text={'体験レッスン (60分/生徒)'} className={' font-medium'} />
            <CustomCheckBox text={'グループレッスン (60分/生徒)'} className={' font-medium'}/>
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[16px] text-[#181A20] font-medium mb-[10px]'>体験レッスン (60分/生徒)</p>
          <div>
            <CustomInput
              className={'w-full'}
              inputClassName={'bg-white border-none'}
              placeholder={'550 円 / 学生'}
              disabled={true}
            />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[16px] text-[#181A20] font-medium mb-[10px]'>グループレッスン (60分/生徒)</p>
          <div>
            <CustomInput
              className={'w-full'}
              inputClassName={'bg-white border-none'}
              placeholder={'550 円 / 学生'}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeTutorStep3
