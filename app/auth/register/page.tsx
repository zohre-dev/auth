"use client";
import { useForm } from "react-hook-form";
import { RegisterContainer } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { useFormState } from "react-dom";
import { signUp } from "@/actions/auth";

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type State = {
  status: string;
  message: string;
};

const initialValue: IFormInputs = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const schema = yup.object().shape({
  email: yup
    .string()
    .required("ایمیل ضروری است")
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "فرمت ایمیل نامعتبر"),
  password: yup
    .string()
    .required("گذرواژه الزامی است")
    .min(6, "حداقل پسورد 6 کاراکتر")
    .matches(/^(?=.*[A-Z])/, "حداقل یک کارکتر بزرگ"), //atleast one uppercase
  confirmPassword: yup
    .string()
    .required("تکرار گذرواژه الزامی است")
    .oneOf([yup.ref("password")], "گذرواژه ها مطابقت ندارند"),
  name: yup.string().required("نام ضروری است"),
});
export default function Register() {
  const [state, formAction] = useFormState<State, FormData>(signUp, {
    status: "",
    message: "",
  });

  const { register, control } = useForm<IFormInputs>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  return (
    <RegisterContainer>
      <div className="wrapper">
        <span className="title">عضویت </span>
        <form action={formAction}>
          <div>
            <input
              className="name inputs"
              type="text"
              placeholder="نام"
              {...register("name")}
            />
          </div>
          <div>
            <input
              className="cellphone inputs"
              type="text"
              placeholder="شماره موبایل"
            />
          </div>
          <div>
            <input
              className="emial inputs"
              type="text"
              placeholder="آدرس ایمیل"
              {...register("email")}
            />
          </div>
          <div>
            <input
              className="password inputs"
              type="text"
              placeholder="رمز عبور"
              {...register("password")}
            />
          </div>
          <div>
            <input
              className="confirmPassword inputs"
              type="text"
              placeholder="تکرار رمز عبور"
              {...register("confirmPassword")}
            />
          </div>
          <button className="submitBtn">ادامه</button>
        </form>
      </div>
      <DevTool control={control} />
    </RegisterContainer>
  );
}
