import { confirmOtp } from "@/actions/auth";
import { useLogin } from "@/app/auth/login/context";
import { useAppContext } from "@/context/AuthContext";
import { IOtpArguments } from "@/services/users/models";
import { IFormState } from "@/utils/stateForm";
import { Button, Form, Input, message, Typography, Flex } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function OtpForm() {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const { values, func } = useAppContext();
  const { userCellPhone } = useLogin();
  const { loginUser } = func;
  const router = useRouter();

  async function onFinish(data: IOtpArguments) {
    data.cellphone = userCellPhone;
    const result = await confirmOtp(data);
    setResultMessage(result.reportMessage);
    if (result.userInfo) {
      loginUser(result.userInfo);
      router.push("/");
    }
  }

  useEffect(() => {
    messageApi.open({
      type: resultMessage?.notify?.status,
      content: resultMessage?.notify?.message,
    });
  }, [resultMessage]);
  return (
    <>
      {resultMessage?.notify?.status !== undefined && contextHolder}

      <Form
        className="otpForm"
        form={form}
        onFinish={onFinish}
        name="basic"
        {...formItemLayout}
      >
        <Form.Item
          label="کد ورود"
          name="otp"
          rules={[{ required: true, message: "کد الزامی" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="گذرواژه"
          name="password"
          rules={[{ required: true, message: "گذرواژه الزامی است" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Typography.Link href="/auth/login">ورود با ایمیل</Typography.Link>
            <Button type="primary" htmlType="submit">
              ورود
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
}
