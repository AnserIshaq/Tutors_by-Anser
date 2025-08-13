import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const CustomSlider = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = checked => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider defaultValue={30} disabled={disabled} className='hidden' />
      <Slider range defaultValue={[20, 50]} disabled={false}/>
      {/* Disabled: <Switch size="small" checked={disabled} onChange={onChange} /> */}
    </>
  );
};
export default CustomSlider;