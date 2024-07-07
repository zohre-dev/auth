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
    userCellPhone: string | undefined;
  };
  dispatch: {
    setCellPhone: Dispatch<SetStateAction<string | undefined>>;
  };
  func: {
    loginUser: (user: IUserInfo | undefined) => void;
    logoutUser: () => void;
  };
}
/***************************   create context and set initial values      ******************** */
const AuthContext = createContext<IContext>({
  values: {
    user: undefined,
    userCellPhone: undefined,
  },
  dispatch: {
    setCellPhone: () => {},
  },
  func: {
    loginUser: () => {},
    logoutUser: () => {},
  },
});
/**************************************************************************************** */
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUserInfo>();
  const [cellPhone, setCellPhone] = useState<string | undefined>();

  const loginContext = (user: IUserInfo | undefined) => {
    setUser(user);
  };
  const logoutContext = () => {
    setUser(undefined);
  };

  const contextValues: IContext = {
    values: {
      user: user,
      userCellPhone: cellPhone,
    },
    dispatch: {
      setCellPhone,
    },
    func: {
      loginUser: loginContext,
      logoutUser: logoutContext,
    },
  };
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const result = await me();

      if (result?.userInfo) {
        loginContext(result.userInfo);
      } else {
        loginContext(undefined);
      }
    };
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

/************************************************************************************************** */
export const useAppContext = () => {
  return useContext(AuthContext);
};
