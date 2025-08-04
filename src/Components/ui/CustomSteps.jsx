import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
const description = 'This is a description.';

const steps = [
  {
    title: 'First',
      content: 'First-  content',
    
  },
  {
    title: 'Second',
      content: 'Second- content',
    
  },
  {
    title: 'third',
      content: 'Second- content',
    
  },
  {
    title: 'fourth',
      content: 'Second- content',
    
  },
  {
    title: 'Last',
      content: 'Last- content',
    
  },
];
const CustomSteps  = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title, content: item.content }));

  return (
    <>
      <Steps current={current} items={items} />
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default CustomSteps  ;