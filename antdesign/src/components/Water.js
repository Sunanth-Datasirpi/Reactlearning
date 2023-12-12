import React from "react";
import { Watermark } from "antd";

function Water() {
  return (
    <div>
      <Watermark content=" ☀️🐜H">
        <div
          style={{
            height: 500,
          }}
        />
      </Watermark>
    </div>
  );
}

export default Water;
