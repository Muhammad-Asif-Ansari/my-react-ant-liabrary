import React from 'react';
import { QRCode, Space, theme } from 'antd';

const { useToken } = theme;

const QRCodes = () => {
  const { token } = useToken();
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=muhammadasifansari101@gmail.com";

  return (
    <Space>
      <QRCode value={gmailLink} color={token.colorSuccessText} />
      <QRCode
        value={gmailLink}
        color={token.colorInfoText}
        bgColor={token.colorBgLayout}
      />
    </Space>
  );
};

export default QRCodes;
