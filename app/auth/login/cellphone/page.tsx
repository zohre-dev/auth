"use client";

import { Typography } from "antd";
import { CellFormContainer } from "./style";
import { Suspense, useState } from "react";
import PhoneForm from "@/components/login/phone/phoneForm";
import OtpForm from "@/components/login/otp/otpForm";
import { LoginProvider } from "../context";
import { Step } from "./step";

export default function CellLoginForm() {
  const [step, setStep] = useState<string>(Step.phoneView); // "1"

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            {step === Step.phoneView && <PhoneForm setStep={setStep} />}
            {step === Step.otpView && <OtpForm />}
          </div>
        </CellFormContainer>
      </LoginProvider>
    </Suspense>
  );
}
