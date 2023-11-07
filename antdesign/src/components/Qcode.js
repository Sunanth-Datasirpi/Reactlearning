import React from "react";
import { Input, QRCode, Space } from "antd";

function Qcode() {
  const [text, setText] = React.useState("https://ant.design/");
  return (
    <div>
      <Space direction="vertical" align="center">
        <QRCode value={text || "-"} />
        <Input
          placeholder="-"
          maxLength={60}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Space>
    </div>
  );
}

export default Qcode;
