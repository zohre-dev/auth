"use client";

import { IFormState } from "@/utils/stateForm";
import { Button, Form, Input, message, Typography } from "antd";
import { useEffect, useReducer, useState } from "react";
import { RegisterContainer } from "./style";
import { signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";

export interface IFormInputs {
  name?: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export default function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const router = useRouter();

  async function onFinish(data: IFormInputs) {
    const formData = new FormData();
    formData.append("name", data.name || "");
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    const result = await signUp(formData);
    setResultMessage(result);
  }

  useEffect(() => {
    messageApi.open({
      type: resultMessage?.notify?.status,
      content: resultMessage?.notify?.message,
    });
    if (resultMessage?.notify?.status === "success") router.push("/auth/login");
  }, [resultMessage]);
  return (
    <RegisterContainer>
      {resultMessage?.notify?.status !== undefined && contextHolder}
      <Form form={form} onFinish={onFinish}>
        <Typography.Title level={2}>ثبت نام</Typography.Title>
        <Form.Item label="نام" name="name">
          <Input />
        </Form.Item>
        <Form.Item
          label="ایمیل"
          name="email"
          rules={[
            { required: true, message: "اجباری" },
            { type: "email", message: "فرمت نادرست" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="گذرواژه"
          name="password"
          rules={[{ min: 5, message: "حداقل 5 کاراکتر" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="شماره موبایل" name="phoneNumber">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </RegisterContainer>
  );
}
