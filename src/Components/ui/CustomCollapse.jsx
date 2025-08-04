import { Collapse, Space } from 'antd'

const CustomCollapse = ({
  data,
  block,
  size = 'large',
  collapseWrapperClass = '',
  headerClass = '',
  contentClass = '',
  dateBlockClass = '',
}) => (
  <Space direction='vertical'>
    <Space direction='vertical' className='w-full'>
      {data.map(({ key, day, month, label, text }) => (
        <div key={key} className='relative'>
          {block && (
            <div
              className={`h-[120px] w-[99px] bg-[#5183F4] absolute z-10 rounded-l-[24px] flex flex-col justify-center items-center text-white font-medium text-xl xl:text-3xl ${dateBlockClass}`}>
              <div>{day}</div>
              <div>{month}</div>
            </div>
          )}
          <Collapse
          defaultActiveKey={['1']}
            accordion
            size={size}
            className={`custom-collapse ${collapseWrapperClass}`}
            items={[
              {
                key,
                label: <p className={`custom-collapse--header ${headerClass}`}>{label}</p>,
                children: <p className={`custom-collapse--content text-xl font-normal text- ${contentClass}`}>{text}</p>,
              },
            ]}
          />
        </div>
      ))}
    </Space>
  </Space>
)

export default CustomCollapse
