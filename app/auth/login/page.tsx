import { LoginContainer } from "./style";

export default function Login() {
  return (
    <LoginContainer>
      <div className="wrapper">
        <span className="title">ورود با ایمیل </span>
        <div className="topBoxTxt">
          <span>حساب کاربری ندارید؟</span>
          <a href="/auth/register" className="registerTxt">
            ثبت نام کنید
          </a>
        </div>
        <form>
          <div>
            <input
              className="emial inputs"
              type="text"
              placeholder="آدرس ایمیل"
            />
          </div>
          <div>
            <input
              className="password inputs"
              type="text"
              placeholder="رمز عبور"
            />
          </div>

          <button className="submitBtn">ورود</button>
        </form>
        <button className="googleAccount">
          ورود با اکانت گوگل
          <img src="/assets/images/google.png" />
        </button>
        <div className="bottomBoxTxt">
          <a href="/auth/login/cellphone" className="mobileTxt">
            ورود با موبایل
          </a>
          <a href="#" className="forgetTxt">
            فراموشی رمز عبور
          </a>
        </div>
      </div>
    </LoginContainer>
  );
}
