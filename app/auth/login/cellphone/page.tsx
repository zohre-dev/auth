import { CellFormContainer } from "./style";

export default function CellLoginForm() {
  return (
    <CellFormContainer>
      <div className="wrapper">
        <span className="title">ورود با موبایل </span>
        <div className="topBoxTxt">
          <span>حساب کاربری ندارید؟</span>
          <a href="/auth/register" className="registerTxt">
            ثبت نام کنید
          </a>
        </div>

        <form>
          <input className="cellphone" type="text" placeholder="شماره موبایل" />

          <button className="submitBtn">ورود</button>
        </form>
        <div className="bottomBoxTxt">
          <a href="/auth/login" className="mobileTxt">
            ورود با ایمیل
          </a>
        </div>
      </div>
    </CellFormContainer>
  );
}
