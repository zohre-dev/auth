"use client";
import { me } from "@/actions/auth";
import { createContext, useContext, useEffect, useState } from "react";
/**************************************************************************************** */
interface IContext {
  values: {
    user: {} | undefined;
  };
  func: {
    loginUser: (user: {} | undefined) => void;
    logoutUser: () => void;
  };
}
/**************************************************************************************** */
const AuthContext = createContext<IContext>({
  values: {
    user: {},
  },
  func: {
    loginUser: () => {},
    logoutUser: () => {},
  },
});
/**************************************************************************************** */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<{} | undefined>();
  const loginContext = (user: {} | undefined) => {
    setUser(user);
  };
  const logoutContext = () => {
    setUser({});
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

      if (result?.userInfo !== undefined) {
        loginContext(result.userInfo);
      } else {
        console.log("heyyy");
        loginContext({});
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
