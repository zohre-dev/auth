"use server";

import { State } from "@/app/auth/register/page";

import { postFetch } from "../utils/fetch";

async function signUp(state: State, data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const confirmPassword = data.get("confirmPassword");
  const res = await postFetch("/users", { name, email, password });
  console.log("formData : ", res.message);

  return {
    status: "success",
    message: `Welcome`,
  };
}

export { signUp };
