import { signInWithPhone } from "@/actions/auth";
import { useLogin } from "@/app/auth/login/context";
import { useAppContext } from "@/context/AuthContext";
import { IPhoneArguments } from "@/services/users/models";
import { IFormState } from "@/utils/stateForm";
import { Button, Flex, Form, Input, message, Typography } from "antd";
import { useEffect, useState, Dispatch } from "react";

interface ChildProps {
  setStep: Dispatch<React.SetStateAction<number>>;
}
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
export default function PhoneForm({ setStep }: ChildProps) {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [resultMessage, setResultMessage] = useState<IFormState>();
  const { setCellPhone } = useLogin();
  async function onFinish(data: IPhoneArguments) {
    const result = await signInWithPhone(data);
    setResultMessage(result.reportMessage);
    if (result.phoneNumber) {
      setStep(2);
      setCellPhone(result.phoneNumber);
    }
  }

  useEffect(() => {
    messageApi.open({
      type: resultMessage?.notify?.status,
      content: resultMessage?.notify?.message,
    });
    if (resultMessage?.notify?.status === "success") {
    }
  }, [resultMessage]);
  return (
    <>
      {resultMessage?.notify?.status !== undefined && contextHolder}
      <Form
        className="phoneForm"
        form={form}
        onFinish={onFinish}
        name="basic"
        {...formItemLayout}
      >
        <Form.Item
          label="شماره موبایل"
          name="cellphone"
          rules={[{ required: true, message: "شماره موبایل الزامی" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Typography.Link href="/auth/login">ورود با ایمیل</Typography.Link>
            <Button type="primary" htmlType="submit">
              ارسال
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
}
