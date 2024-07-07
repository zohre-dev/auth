"use client";

import Link from "next/link";
import { Nav } from "./style";
import { useAppContext } from "@/context/AuthContext";
import { logout } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function Menu() {
  const { values, func } = useAppContext();
  const { user } = values;
  const { logoutUser } = func;
  const router = useRouter();

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
        {/* && Object.keys(user).length > 0 */}
        {user ? (
          <>
            {/* {user["name"]} */}
            <li className="menuItem">
              <Link className="menuLink signIn" href="/profile">
                پروفایل
              </Link>
            </li>
            <li className="menuItem">
              <button
                className="menuLink signUp"
                onClick={async () => {
                  await logout();
                  logoutUser();
                  router.push("/");
                }}
              >
                خروج
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
      <div className="logo"></div>
    </Nav>
  );
}
