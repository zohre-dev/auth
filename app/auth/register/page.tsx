import { RegisterContainer } from "./style";

export default function Register() {
  return (
    <RegisterContainer>
      <div className="wrapper">
        <span className="title">عضویت </span>
        <form>
          <div>
            <input className="name inputs" type="text" placeholder="نام" />
            <input
              className="lname inputs"
              type="text"
              placeholder="نام خانوادگی"
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
            />
          </div>
          <div>
            <input
              className="password inputs"
              type="text"
              placeholder="رمز عبور"
            />
          </div>
          <div>
            <input
              className="confirmPassword inputs"
              type="text"
              placeholder="تکرار رمز عبور"
            />
          </div>
          <button className="submitBtn">ادامه</button>
        </form>
      </div>
    </RegisterContainer>
  );
}
