"use client";

import { IFormState } from "@/utils/stateForm";
import { Button, Form, Input, message, Typography } from "antd";
import { useEffect, useState } from "react";
import { RegisterContainer } from "./style";
import { signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { IRegisterArguments } from "@/services/users/models";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export default function Register() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const router = useRouter();

  async function onFinish(data: IRegisterArguments) {
    const result = await signUp(data);
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
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        className="registerForm"
      >
        <Typography.Title level={3} className="formTitle">
          ثبت نام
        </Typography.Title>
        <Form.Item
          label="نام"
          name="name"
          rules={[{ required: true, message: "اجباری" }]}
        >
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
        <Form.Item
          label="شماره موبایل"
          name="phoneNumber"
          rules={[{ required: true, message: "اجباری" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block>
            ثبت نام
          </Button>
        </Form.Item>
      </Form>
    </RegisterContainer>
  );
}
