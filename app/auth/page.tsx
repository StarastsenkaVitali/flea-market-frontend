"use client";
import {JSX} from 'react';
import { Input, Space, Button } from 'antd';

export default function Auth(): JSX.Element {
  return (
    <Space direction="vertical" align='center' style={{ width: "100%" }}>
      <Input status="" placeholder="User name" />
      <Input status="" placeholder="Password" />
      <Button>Submit</Button>
    </Space>
  );
}
