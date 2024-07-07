"use server";

import {
  IRegisterArguments,
  IPhoneArguments,
  IOtpArguments,
  ILoginArguments,
} from "@/services/users/models";
import { UsersUrls } from "@/services/users/urls";
import { getFetch, postFetch } from "@/utils/fetch";
import { IFormState } from "@/utils/stateForm";
import { message } from "antd";
import { cookies } from "next/headers";

async function signUp(data: IRegisterArguments) {
  const name = data.name;
  const password = data.password;
  const email = data.email;
  const phoneNumber = data.phoneNumber;

  const res = await postFetch(UsersUrls.users, {
    name,
    password,
    email,
    phoneNumber,
  });

  if (res.errors) {
    const reportMessage: IFormState = {
      notify: {
        status: "error",
        message: res.errors[0].message,
      },
    };
    return reportMessage;
  }
  const seccessMessage: IFormState = {
    notify: {
      status: "success",
      message: "ثبت نام با موفقیت انجام شد",
    },
  };
  return seccessMessage;
}

async function signIn(data: ILoginArguments) {
  const email = data.email;
  const password = data.password;

  const res = await postFetch("/users/login", { password, email });

  if (res.errors) {
    const reportMessage: IFormState = {
      notify: {
        status: "error",
        message: res.errors[0].message,
      },
    };
    return reportMessage;
  }
  cookies().set({
    name: "loginToken",
    httpOnly: true,
    value: res.token,
  });
  const reportMessage: IFormState = {
    notify: {
      status: "success",
      message: "با موفقیت وارد شدید",
    },
    userInfo: res.user,
  };
  return reportMessage;
}

async function me() {
  // let reportMessage: IFormState = { userInfo: undefined };
  let reportMessage: IFormState = {};
  const token = cookies().get("loginToken");

  //token is undefind or null:
  if (!token) {
    reportMessage.userInfo = undefined;
    return reportMessage;
  }
  const res = await getFetch("/users/me", {
    Authorization: `Bearer ${token.value}`,
  });

  if (!res.user) {
    reportMessage.userInfo = undefined;
    return reportMessage;
  }

  reportMessage.userInfo = res.user;
  return reportMessage;
}

async function logout() {
  const token = cookies().get("loginToken");

  //token is undefind or null:
  if (!token) {
    const reportMessage: IFormState = {
      userInfo: undefined,
    };
    return reportMessage;
  }
  const res = await postFetch("/users/logout", {
    Authorization: `Bearer ${token.value}`,
  });
  if (res.message) {
    const reportMessage: IFormState = {
      notify: {
        status: "success",
        message: "خروج با موفقیت",
      },
    };
    return reportMessage;
  } else {
    const reportMessage: IFormState = {
      notify: {
        status: "error",
        message: res.errors[0].message,
      },
    };
    return reportMessage;
  }
}

//data: { cellphone: '09350070000' }
async function signInWithPhone(data: IPhoneArguments) {
  let reportMessage: IFormState = {
    notify: {
      status: undefined,
      message: "",
    },
  };
  const phoneNumber = data.cellphone;
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(phoneNumber)) {
    reportMessage.notify!.status = "error";
    reportMessage.notify!.message = "فرمت نامعتبر";
    return reportMessage;
  }
  const res = await postFetch(UsersUrls.loginByPhoneNumber, {
    phoneNumber,
  });

  //"success": false
  if (!res.success) {
    reportMessage.notify!.status = "error";
    // reportMessage.notify!.message = res.message;
    reportMessage.notify!.message = "ابتدا ثبت نام کنید";
    return reportMessage;
  }
  //"success": true
  reportMessage.notify!.status = "success";
  reportMessage.notify!.message = "کد ورود با موفقیت ارسال شد";
  reportMessage.userCellPhone = phoneNumber;
  return reportMessage;
}

async function confirmOtp(data: IOtpArguments) {
  const password = data.password;
  const code = data.otp;
  const phoneNumber = data.cellphone;
  const res = await postFetch(UsersUrls.confirmCode, {
    password,
    code,
    phoneNumber,
  });
  let reportMessage: IFormState = {
    notify: {
      status: undefined,
      message: "",
    },
  };

  //"success": false,
  // if (!res.success) {
  if (res.success === false) {
    reportMessage.notify!.status = "error";
    reportMessage.notify!.message = res.message;
    return reportMessage;
  }
  if (res.error) {
    reportMessage.notify!.status = "error";
    reportMessage.notify!.message = res.error;
    return reportMessage;
  }
  reportMessage.notify!.status = "success";
  reportMessage.notify!.message = "با موفقیت وارد شدید";
  reportMessage.userInfo = res.doc.user;
  return reportMessage;
}
export { signUp, signIn, me, signInWithPhone, confirmOtp, logout };
