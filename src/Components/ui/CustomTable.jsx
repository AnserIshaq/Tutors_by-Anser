import React, { useState } from 'react'
import { Space, Table, Tag } from 'antd'
import { CustomButton } from './CustomButton'
import CustomModal from '../Shared/CustomModal'

const data = [
  {
    key: '1',
    id: '12342',
    name: 'John Brown',
    email: 'example@gmail.com',
    ph: '123-1234-1234',
    image: '/tableImg.svg',
  },
  {
    key: '2',
    id: '12343',
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    ph: '456-4567-4567',
    image: '/tableImg.svg',
  },
  {
    key: '3',
    id: '12344',
    name: 'Mark Smith',
    email: 'mark@gmail.com',
    ph: '789-7890-7890',
    image: '/tableImg.svg',
  },
]

const CustomTable = () => {
  const [modal2Open, setModal2Open] = useState(false)
  const handleModal = () => setModal2Open(true)

  const columns = [
    {
      title: 'User',
      dataIndex: 'User',
      key: 'User',
      width: 180,
      render: (_, record) => (
        <div className='flex items-center gap-2'>
          <img src={record.image} alt={record.name} className='object-cover' />
        </div>
      ),
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 180,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 180,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: 180,
    },
    {
      title: 'Ph #',
      dataIndex: 'ph',
      key: 'ph',
      width: 180,
    },
    {
      title: 'Review',
      key: 'review',
      width: 180,

      render: (_, record) => (
        <Space size='middle'>
          <CustomButton
            text={'Leave a Review'}
            className={
              'text-[#5183F4]! border border-[#5183F4]! bg-[#FFFFFF]! h-[50px]! w-max rounded-[50px]! py-[15px] px-[32px] font-normal! text-xl! '
            }
            onClick={handleModal}
          />
        </Space>
      ),
    },
  ]

  return (
    <>
      <div className='flex flex-col justify-between gap-[24px] w-full'>
        <div className='flex flex-col lg:flex-row text-lg lg:text-[22px] font-medium text-[#181A20] gap-[10px] lg:gap-[24px]'>
          <p className='flex gap-[24px]'>
            Application No:<span className='text-[#B1B1B1]'>123456</span>
          </p>
          <div className='w-[1px] h-[32px] bg-black rotate-90 lg:rotate-0'></div>
          <p className='flex gap-[24px]'>
            Amount:<span className='text-[#B1B1B1]'>$8</span>
          </p>
          <div className='w-[1px] h-[32px] bg-black rotate-90 lg:rotate-0'></div>
          <p className='flex gap-[24px]'>
            Date:<span className='text-[#B1B1B1]'>04-04-2025</span>
          </p>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowClassName={(_, index) => (index % 2 === 0 ? 'bg-gray-50' : 'bg-white')}
          scroll={{ x: 'max-content' }}
        />
        <CustomModal modal2Open={modal2Open} setModal2Open={setModal2Open} />
      </div>
    </>
  )
}
export default CustomTable
