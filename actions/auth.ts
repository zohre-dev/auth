"use server";

import { getFetch, postFetch } from "@/utils/fetch";
import { IFormState } from "@/utils/stateForm";
import { cookies } from "next/headers";

async function signUp(data: FormData) {
  const formData = Object.fromEntries(data);
  const name = formData.name;
  const password = formData.password;
  const email = formData.email;
  const phoneNumber = formData.phoneNumber;

  const res = await postFetch("/users", { name, password, email, phoneNumber });

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

async function signIn(data: FormData) {
  const formData = Object.fromEntries(data);
  const password = formData.password;
  const email = formData.email;

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
  const token = cookies().get("loginToken");

  //token is undefind or null:
  if (!token) {
    const reportMessage: IFormState = {
      userInfo: undefined,
    };
    return reportMessage;
  }
  const res = await getFetch("/users/me", {
    Authorization: `Bearer ${token.value}`,
  });

  if (!res.user) {
    const reportMessage: IFormState = {
      userInfo: undefined,
    };
    return reportMessage;
  }

  const reportMessage: IFormState = {
    userInfo: res.user,
  };
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
export { signUp, signIn, me, logout };
