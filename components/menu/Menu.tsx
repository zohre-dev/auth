import Link from "next/link";
import { Nav } from "./style";

export default function Menu() {
  return (
    <Nav>
      <ul className="menu">
        <li className="menuItem">
          <Link className="menuLink" href="/">
            خانه
          </Link>
        </li>
        <li className="menuItem">
          <Link className="menuLink" href="#">
            درباره ما
          </Link>
        </li>
        <li className="menuItem">
          <Link className="menuLink" href="#">
            مبلمان
          </Link>
        </li>
        <li className="menuItem">
          <Link className="menuLink signIn" href="/auth/login">
            ورود
          </Link>
        </li>
        <li className="menuItem">
          <Link className="menuLink signUp" href="/auth/register">
            ثبت نام
          </Link>
        </li>
      </ul>
      <div className="logo"></div>
    </Nav>
  );
}
