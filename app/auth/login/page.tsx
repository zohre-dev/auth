"use client";
import { IFormState } from "@/utils/stateForm";
import { Button, Form, Input, message, Typography } from "antd";
import { useEffect, useReducer, useState } from "react";
import { LoginContainer } from "./style";
import { signIn, signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AuthContext";

export interface IFormInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const { func } = useAppContext();
  const { loginUser } = func;
  const router = useRouter();

  async function onFinish(data: IFormInputs) {
    const formData = new FormData();

    formData.append("password", data.password);
    formData.append("email", data.email);

    const result = await signIn(formData);
    setResultMessage(result);
  }
  useEffect(() => {
    messageApi.open({
      type: resultMessage?.notify?.status,
      content: resultMessage?.notify?.message,
    });
    if (resultMessage?.notify?.status === "success") {
      loginUser(resultMessage.userInfo);
      router.push("/");
    }
  }, [resultMessage]);
  return (
    <LoginContainer>
      {resultMessage?.notify?.status !== undefined && contextHolder}
      <Form form={form} onFinish={onFinish}>
        <Typography.Title level={2}>ورود</Typography.Title>

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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginContainer>
  );
}
