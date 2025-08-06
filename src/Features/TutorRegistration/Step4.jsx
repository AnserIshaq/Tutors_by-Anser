import { selectOptions } from '../../Static/SelectOptions'
import CustomCheckBox from '../../Components/ui/CustomCheckBox'
import CustomSelect from '../../Components/ui/CustomSelect'

const BecomeTutorStep4 = () => {
  return (
    <>
      <h1 className='text-[#5183F4] mb-[50px] text-center'>指導情報</h1>
      <div className='flex flex-col gap-[30px]'>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>レッスン料金体系</p>
          <div className='flex flex-col gap-[10px]'>
            <CustomCheckBox text={'シニア'} className={'font-normal'} />
            <CustomCheckBox text={'成人'} className={'font-normal'} />
            <CustomCheckBox text={'大学生'} className={'font-normal'} />
            <CustomCheckBox text={'高校生'} className={'font-normal'} />
            <CustomCheckBox text={'中学生'} className={'font-normal'} />
            <CustomCheckBox text={'小学生'} className={'font-normal'} />
            <CustomCheckBox text={'幼児'} className={'font-normal'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>対象レベル</p>
          <div className='flex flex-col gap-[10px]'>
            <CustomCheckBox text={'初心者'} className={'font-normal'} />
            <CustomCheckBox text={'初級'} className={'font-normal'} />
            <CustomCheckBox text={'中級'} className={'font-normal'} />
            <CustomCheckBox text={'上級'} className={'font-normal'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <div className='flex flex-col md:flex-row gap-[30px]'>
            <CustomCheckBox text={'初心者歓迎 !'} className={'font-medium'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>講師・語学資格</p>
          <div className='flex flex-col gap-[10px]'>
            <CustomCheckBox text={'CELTA'} className={'font-normal'} />
            <CustomCheckBox text={'TESOL'} className={'font-normal'} />
            <CustomCheckBox text={'TECSOL'} className={'font-normal'} />
            <CustomCheckBox text={'TESL/TEFL'} className={'font-normal'} />
            <CustomCheckBox text={'DELTA'} className={'font-normal'} />
            <CustomCheckBox text={'TOEIC'} className={'font-normal'} />
            <CustomCheckBox text={'TOEFL'} className={'font-normal'} />
          </div>
        </div>
        <div className='inputs flex flex-col'>
          <p className='text-[22px] text-[#181A20] font-medium mb-[10px]'>日本語講師歴</p>
          <div>
            <CustomSelect
              selectClassName={'h-[54px]! border border-none'}
              options={selectOptions}
              defaultValue={'なし'}
              rightIcon={'/select-arrow.svg'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeTutorStep4
