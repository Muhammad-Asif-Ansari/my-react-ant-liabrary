import React, { useState } from 'react';
import { Button, Radio, Slider, Space } from 'antd';
const Spacer = () => {
  const [size, setSize] = useState('small');
  const [customSize, setCustomSize] = React.useState(0);
  return (
    <>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        {['small', 'middle', 'large', 'customize'].map(item => (
          <Radio key={item} value={item}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      <br />
      <br />
      {size === 'customize' && (
        <>
          <Slider value={customSize} onChange={setCustomSize} />
          <br />
        </>
      )}
      <Space size={size !== 'customize' ? size : customSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Space>
    </>
  );
};
export default Spacer;