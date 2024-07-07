import { ContactWarraper } from "./style";
import phone from "@/public/assets/images/phone.jpg";

export default function ContactUs() {
  return (
    <ContactWarraper>
      <div className="right">
        <p className="title">ارسال پیام </p>
        <form>
          <div>
            <label>نام</label>
            <input
              className="name inputs"
              type="text"
              placeholder="نام خود را وارد کنید"
            />
          </div>
          <div>
            <label>موبایل</label>
            <input
              className="mobile inputs"
              type="text"
              placeholder="موبایل خود را وارد کنید"
            />
          </div>
          <div>
            <label>پیام</label>
            <textarea
              className="message inputs"
              placeholder="پیام خود را بنویسید"
            ></textarea>
          </div>
          <div>
            <button className="sendBtn">ارسال</button>
          </div>
        </form>
      </div>
      <div className="left">
        <img src={phone.src} />
      </div>
    </ContactWarraper>
  );
}
