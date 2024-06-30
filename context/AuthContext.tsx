"use client";
import { me } from "@/actions/auth";
import { createContext, useContext, useEffect, useState } from "react";

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
type userType = Record<string, unknown>;

interface IContext {
  values: {
    user: userType | undefined;
  };
  func: {
    loginUser: (user: userType | undefined) => void;
    logoutUser: () => void;
  };
}
/***************************   create context and set initial values      ******************** */
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
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userType>();

  const loginContext = (user: userType | undefined) => {
    setUser(user);
  };
  const logoutContext = () => {
    setUser(undefined);
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
