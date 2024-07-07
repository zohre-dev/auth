"use client";
import { IFormState } from "@/utils/stateForm";
import { Button, Flex, Form, Input, message, Typography } from "antd";
import { useEffect, useState } from "react";
import { LoginContainer } from "./style";
import { signIn } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AuthContext";
import { ILoginArguments } from "@/services/users/models";

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
export default function Login() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const { func } = useAppContext();
  const { loginUser } = func;
  const router = useRouter();

  async function onFinish(data: ILoginArguments) {
    const formData = new FormData();
    const result = await signIn(data);
    setResultMessage(result);
  }
  useEffect(() => {
    messageApi.open({
      type: resultMessage?.notify?.status,
      content: resultMessage?.notify?.message,
    });
    if (resultMessage?.notify?.status === "success") {
      loginUser(resultMessage.userInfo); // setUser(user); in context file
      router.push("/");
    }
  }, [resultMessage]);
  return (
    <LoginContainer>
      {resultMessage?.notify?.status !== undefined && contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        className="loginForm"
      >
        <Typography.Title level={3} className="formTitle">
          ورود با ایمیل
        </Typography.Title>
        <div className="topBoxTxt">
          <span>حساب کاربری ندارید؟</span>
          <Typography.Link className="registerTxt" href="/auth/register">
            ثبت نام کنید
          </Typography.Link>
        </div>
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
          <Button type="primary" htmlType="submit" block>
            ورود با اکانت گوگل
          </Button>
        </Form.Item>
        <Flex justify="space-between" align="center">
          <Typography.Link href="/auth/login/cellphone">
            ورود با موبایل
          </Typography.Link>
          <Button type="primary" htmlType="submit">
            ورود
          </Button>
        </Flex>
      </Form>
    </LoginContainer>
  );
}
