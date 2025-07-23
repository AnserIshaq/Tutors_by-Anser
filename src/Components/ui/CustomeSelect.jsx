import { Select, Space } from 'antd'

const CustomSelect = ({onClick}) => {
  return (
     <Select
                className='w-full border border-black rounded-[10px] h-[60px]! [font-family:var(--font-league)] pl-[48px]! pr-[16px]! py-[16px]! text-base sm:text-xl font-normal text-[#B1B1B1]focus-visible:outline-none focus-visible:border-[#5183F4] bg-none bg-white appearance-none'
                defaultValue='Select...'
                onChange={onClick}
                options={[
                  { value: 'teacher', label: 'Teacher' },
                  { value: 'student', label: 'Student' },
                ]}
              />
  )
}

export default CustomSelect