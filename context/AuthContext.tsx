"use client";
import { me } from "@/actions/auth";
import { IUserInfo } from "@/services/users/models";
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { logout } from "@/actions/auth";
import { Spin } from "antd";

/**************************************************************************************** */
// user: {
//             "id": "667fa8834d2d4a8b0cfa4660",
//             "name": "roya",
//             "roles": [
//                 "user"
//             ],
//             "phoneNumber": "123456",
//             "email": "roya@gmail.com",
//             "createdAt": "2024-06-29T06:24:03.604Z",
//             "updatedAt": "2024-06-29T06:24:03.604Z",
//             "loginAttempts": 0
//         }

/**************************************************************************************** */

interface IContext {
  values: {
    user: IUserInfo | undefined;
  };

  func: {
    loginUser: (user: IUserInfo | undefined) => void;
    logoutUser: () => void;
  };
}
/**********************  create context and set initial values      ******************** */
const AuthContext = createContext<IContext>({
  values: {
    user: undefined,
  },

  func: {
    loginUser: () => {},
    logoutUser: () => {},
  },
});
/**************************************************************************************** */
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUserInfo>();
  const [loading, setLoading] = useState<boolean>(true);
  const loginContext = (user: IUserInfo | undefined) => {
    setUser(user);
  };
  const logoutContext = async () => {
    await logout().finally(() => {
      setUser(undefined);
    });
  };

  const contextValues: IContext = {
    values: {
      user: user,
    },

    func: {
      loginUser: loginContext,
      logoutUser: logoutContext,
    },
  };
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        setLoading(true);
        const result = await me();

        if (result) {
          loginContext(result);
        } else {
          loginContext(undefined);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
      {/* {loading ? <Spin fullscreen /> : children} */}
    </AuthContext.Provider>
  );
};

/************************************************************************************************** */
export const useAppContext = () => {
  return useContext(AuthContext);
};
