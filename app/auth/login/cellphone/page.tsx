"use client";

import { Typography } from "antd";
import { CellFormContainer } from "./style";
import { useState } from "react";
import PhoneForm from "@/components/login/phone/phoneForm";
import OtpForm from "@/components/login/otp/otpForm";
import { LoginProvider } from "../context";

export default function CellLoginForm() {
  const [step, setStep] = useState(1);

  return (
    <LoginProvider>
      <CellFormContainer>
        <div className="wrapper">
          <Typography.Title className="formTitle" level={3}>
            ورود با موبایل
          </Typography.Title>
          <div className="topBoxTxt">
            <span>حساب کاربری ندارید؟</span>
            <Typography.Link className="registerTxt" href="/auth/register">
              ثبت نام کنید
            </Typography.Link>
          </div>
          {step === 1 && <PhoneForm setStep={setStep} />}
          {step === 2 && <OtpForm />}
        </div>
      </CellFormContainer>
    </LoginProvider>
  );
}
