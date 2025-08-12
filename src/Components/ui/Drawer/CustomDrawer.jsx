import React from 'react'
import { Drawer, Space } from 'antd'

const CustomDrawer = ({
  onCloseDrawer,
  openState,
  placement = 'left',
  width = 428,
  extraHeaderContent,
  mode,
  modeComponents = {},
  contentProps = {},
}) => {
  const ContentComponent = modeComponents[mode] || null

  return (
    <Drawer
      title=''
      placement={placement}
      width={width}
      onClose={onCloseDrawer}
      open={openState}
      extra={<Space className='flex justify-between w-full m-0!'>{extraHeaderContent}</Space>}>
      {ContentComponent && <ContentComponent {...contentProps} />}
    </Drawer>
  )
}

export default CustomDrawer
