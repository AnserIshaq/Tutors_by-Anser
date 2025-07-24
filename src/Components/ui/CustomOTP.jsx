import { Flex, Input, Typography } from 'antd'

const CustomOTP = () => {
    const onChange = (text) => {
    console.log('onChange:', text)
  }
  const onInput = (value) => {
    console.log('onInput:', value)
  }
  const sharedProps = {
    onChange,
    onInput,
  }
  return (
    <Flex gap='middle' align='flex-start' vertical>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    </Flex>
  )
}

export default CustomOTP
