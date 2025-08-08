import React from 'react'
import { Segmented } from 'antd'

const CustomTab = () => {
  const [alignValue, setAlignValue] = React.useState('Tutor Profile')
  return (
    <>
      <Segmented
        animated={false}
        tabBarGutter={10}
        value={alignValue}
        style={{ marginBottom: 8 }}
        onChange={setAlignValue}
        options={['Tutor Profile', 'Edit Account']}
      />
    </>
  )
}
export default CustomTab
